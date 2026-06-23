-- Secure RLS: anon role should only SELECT, never INSERT/UPDATE/DELETE
-- Run this in Supabase SQL Editor

-- Revoke anon INSERT on orders
DROP POLICY IF EXISTS "Enable insert for all users" ON orders;

-- Revoke anon INSERT on order_items
DROP POLICY IF EXISTS "Enable insert for order items" ON order_items;

-- Ensure anon SELECT policies exist (idempotent re-creation)
DROP POLICY IF EXISTS "Enable read for users based on email" ON orders;
CREATE POLICY "Enable read for users based on email" ON orders
  FOR SELECT
  TO anon
  USING (true);

DROP POLICY IF EXISTS "Enable read for order items" ON order_items;
CREATE POLICY "Enable read for order items" ON order_items
  FOR SELECT
  TO anon
  USING (true);
