<template>
  <a-card class="product-card" hoverable @click="$router.push(`/product/${product.id}`)">
    <template #cover>
      <div class="product-image-wrap">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="product-badges">
          <span v-if="product.isBestSeller" class="badge badge-best">Best Seller</span>
          <span v-if="product.isNew" class="badge badge-new">New</span>
        </div>
      </div>
    </template>
    <div class="card-body">
      <a-card-meta :title="product.code + ' ' + product.name" class="product-meta">
        <template #description>
          <span class="product-category">{{ product.categoryName }}</span>
        </template>
      </a-card-meta>
      <div class="product-price-row" v-if="product.price">
        <span class="price-current">{{ formatCents(product.price) }}</span>
        <span v-if="product.compareAtPrice" class="price-compare">{{ formatCents(product.compareAtPrice) }}</span>
      </div>
      <a-button type="primary" block class="buy-btn" @click.stop="addToCart">
        <ShoppingCartOutlined /> Add to Cart
      </a-button>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ShoppingCartOutlined } from '@ant-design/icons-vue'
import { useCartStore } from '../stores/cart'
import { useCurrency } from '../composables/useCurrency'
import type { Product } from '../data/products'

const props = defineProps<{ product: Product }>()
const router = useRouter()
const cartStore = useCartStore()
const { formatCents } = useCurrency()

const addToCart = () => {
  cartStore.addItem({
    productId: props.product.id,
    quantity: 1,
    unitPriceCents: props.product.price ?? 0,
    productName: `${props.product.code} ${props.product.name}`,
    imageUrl: props.product.image
  })
  cartStore.openDrawer()
}
</script>

<style scoped>
.product-card {
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.product-image-wrap {
  position: relative;
  width: 100%;
  padding-top: 100%;
  background: #f5f5f5;
}

.product-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 16px;
}

.product-badges {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  color: white;
}

.badge-best {
  background: #faad14;
}

.badge-new {
  background: #52c41a;
}

.card-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.product-meta :deep(.ant-card-meta-title) {
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-category {
  font-size: 12px;
  color: #999;
}

.product-price-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price-current {
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
}

.price-compare {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.buy-btn {
  margin-top: auto;
}
</style>
