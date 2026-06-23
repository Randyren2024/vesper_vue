// Cloudflare Pages Function: POST /api/order
// Proxies order creation through service_role key (never exposed to frontend)
// Uses Supabase REST API directly — no npm dependencies needed in Workers runtime.

const SUPABASE_URL = 'https://iratweopgcknkjhrhsxk.supabase.co'

interface OrderItem {
  productId: string
  variantId?: string | null
  quantity: number
  unitPriceCents: number
  productName: string
  variantName?: string | null
}

interface ShippingAddress {
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
}

interface OrderRequest {
  email: string
  items: OrderItem[]
  shippingAddress: ShippingAddress
  subtotalCents: number
  shippingCents: number
  taxCents: number
  totalCents: number
}

function validate(req: OrderRequest): string | null {
  if (!req.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.email)) {
    return 'Invalid email address'
  }
  if (!req.items || req.items.length === 0) {
    return 'Order must contain at least one item'
  }
  if (req.items.length > 50) {
    return 'Too many items in order'
  }
  const addr = req.shippingAddress
  if (!addr || !addr.firstName || !addr.lastName || !addr.address || !addr.city || !addr.state || !addr.zipCode || !addr.country) {
    return 'Missing required shipping address fields'
  }
  if (typeof req.subtotalCents !== 'number' || req.subtotalCents < 0) {
    return 'Invalid subtotal'
  }
  if (typeof req.totalCents !== 'number' || req.totalCents < 0) {
    return 'Invalid total'
  }
  return null
}

function supabaseHeaders(serviceRoleKey: string): Record<string, string> {
  return {
    'Content-Type': 'application/json',
    'apikey': serviceRoleKey,
    'Authorization': `Bearer ${serviceRoleKey}`,
    'Prefer': 'return=representation',
  }
}

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  })
}

export const onRequestPost: PagesFunction<{ SUPABASE_SERVICE_ROLE_KEY: string }> = async ({ request, env }) => {
  const corsHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

  try {
    const body = await request.json() as OrderRequest

    const err = validate(body)
    if (err) {
      return new Response(JSON.stringify({ error: err }), { status: 400, headers: corsHeaders })
    }

    const key = env.SUPABASE_SERVICE_ROLE_KEY
    const headers = supabaseHeaders(key)

    // 1. Insert order
    const orderRes = await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email: body.email,
        status: 'paid',
        subtotal_cents: body.subtotalCents,
        shipping_cents: body.shippingCents,
        tax_cents: body.taxCents,
        total_cents: body.totalCents,
        currency: 'USD',
        shipping_address: body.shippingAddress,
      }),
    })

    if (!orderRes.ok) {
      const errText = await orderRes.text()
      console.error('Order insert failed:', orderRes.status, errText)
      return new Response(JSON.stringify({ error: 'Failed to create order' }), { status: 500, headers: corsHeaders })
    }

    const orders = await orderRes.json() as Array<{ id: string; order_number: string; email: string; status: string; total_cents: number }>
    const order = orders[0]

    // 2. Insert order items
    const orderItems = body.items.map((item) => ({
      order_id: order.id,
      product_id: item.productId,
      variant_id: item.variantId || null,
      quantity: item.quantity,
      unit_price_cents: item.unitPriceCents,
      total_cents: item.unitPriceCents * item.quantity,
      product_name: item.productName,
      variant_name: item.variantName || null,
    }))

    const itemsRes = await fetch(`${SUPABASE_URL}/rest/v1/order_items`, {
      method: 'POST',
      headers,
      body: JSON.stringify(orderItems),
    })

    if (!itemsRes.ok) {
      console.error('Order items insert failed:', itemsRes.status)
      // Clean up the orphaned order
      await fetch(`${SUPABASE_URL}/rest/v1/orders?id=eq.${order.id}`, {
        method: 'DELETE',
        headers: {
          'apikey': key,
          'Authorization': `Bearer ${key}`,
        },
      })
      return new Response(JSON.stringify({ error: 'Failed to create order items' }), { status: 500, headers: corsHeaders })
    }

    return new Response(
      JSON.stringify({
        success: true,
        order: {
          id: order.id,
          orderNumber: order.order_number,
          email: order.email,
          status: order.status,
          totalCents: order.total_cents,
        },
      }),
      { status: 200, headers: corsHeaders }
    )
  } catch (e) {
    console.error('Unexpected error:', e)
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: corsHeaders })
  }
}
