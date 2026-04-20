<template>
  <a-layout-header class="header">
    <div class="header-content">
      <div class="logo">
        <router-link to="/">
          <img 
            src="/logo.webp" 
            alt="Vesper AgriTech" 
            class="logo-image"
            @error="handleLogoError"
          />
        </router-link>
      </div>
      
      <a-menu 
        v-model:selectedKeys="currentKeys" 
        mode="horizontal" 
        class="nav-menu"
      >
        <a-menu-item key="home" @click="$router.push('/')">Home</a-menu-item>
        
        <!-- Products & Solutions Dropdown -->
        <a-sub-menu key="products-solutions" title="Products & Solutions">
          <template #title>
            <span class="dropdown-title">
              Products & Solutions
              <DownOutlined class="dropdown-icon" />
            </span>
          </template>
          <a-menu-item-group>
            <a-menu-item-group-title>Categories</a-menu-item-group-title>
            <a-menu-item 
              v-for="category in categories.slice(0, 5)" 
              :key="category.id"
              @click="$router.push('/products-solutions')"
            >
              <div class="category-item">
                <component :is="categoryIcons[category.icon]" class="category-icon" />
                <span>{{ category.name }}</span>
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item @click="$router.push('/products-solutions')">
              <span class="view-all">View All →</span>
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        
        <a-menu-item key="about" @click="$router.push('/about_us')">About</a-menu-item>
        <a-menu-item key="contact" @click="$router.push('/contact')">Contact</a-menu-item>
      </a-menu>
      
      <div class="header-actions">
        <a-button type="primary" class="demo-btn" @click="handleRequestDemo">
          Request Demo
        </a-button>
      </div>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import * as Icons from '@ant-design/icons-vue'
import { categories } from '../data/products'

const router = useRouter()
const route = useRoute()

const currentKeys = ref<string[]>(['home'])

const categoryIcons: Record<string, any> = Icons

interface Product {
  id: string
  code: string
  name: string
  category: string
}

const featuredProducts: Product[] = [
  { id: 'af718', code: 'AF718', name: 'Autosteering System', category: 'precision-agriculture' },
  { id: 'aries300n', code: 'Aries300N', name: 'Orchard Spraying Robot', category: 'agricultural-robotics' },
  { id: 'taurus80e', code: 'Taurus80E', name: 'Smart Lawn Mowing Robot', category: 'agricultural-robotics' },
  { id: 'vs100', code: 'VS100', name: 'Spray Control System', category: 'precision-agriculture' },
]

const handleLogoError = (event: Event) => {
  const img = event.target as HTMLImageElement
  if (img.src.includes('.webp')) {
    img.src = '/logo.png'
  }
}

const handleRequestDemo = () => {
  const phoneNumber = '8613755006969'
  const message = 'Hello! I would like to request a demo of Vesper AgriTech products.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

onMounted(() => {
  const path = route.path
  if (path === '/' || path === '') {
    currentKeys.value = ['home']
  } else if (path.includes('products-solutions') || path.startsWith('/product')) {
    currentKeys.value = ['products-solutions']
  } else if (path === '/about_us') {
    currentKeys.value = ['about']
  } else if (path === '/contact') {
    currentKeys.value = ['contact']
  }
})
</script>

<style scoped>
.header {
  background: white;
  border-bottom: 1px solid #e8e8e8;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: auto;
  line-height: normal;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 0;
  flex-wrap: wrap;
  gap: 12px;
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo a {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 120px;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;
}

.nav-menu {
  border: none;
  background: transparent;
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: center;
}

.nav-menu :deep(.ant-menu-item) {
  padding: 0 16px !important;
}

.nav-menu :deep(.ant-menu-submenu-title) {
  padding: 0 16px !important;
}

.dropdown-title {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dropdown-icon {
  font-size: 10px;
  margin-left: 2px;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.category-icon {
  font-size: 16px;
  color: #52c41a;
}

.product-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.product-code {
  font-size: 12px;
  color: #52c41a;
  font-weight: 600;
}

.product-name {
  font-size: 14px;
  color: #666;
}

.view-all {
  color: #52c41a;
  font-weight: 500;
}

.header-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.demo-btn {
  background: linear-gradient(135deg, #52c41a, #73d13d);
  border: none;
  font-weight: 500;
  white-space: nowrap;
  font-size: 14px;
  padding: 8px 16px;
  height: auto;
}

/* SubMenu dropdown styles */
.nav-menu :deep(.ant-menu-submenu-selected) {
  color: #52c41a;
}

.nav-menu :deep(.ant-menu-submenu-selected)::after {
  display: none;
}

/* Responsive */
@media (max-width: 992px) {
  .header-content {
    justify-content: center;
  }
  
  .logo {
    width: 100%;
    justify-content: center;
  }
  
  .logo-image {
    width: 100px;
  }
  
  .nav-menu {
    width: 100%;
    justify-content: flex-start;
    overflow-x: auto;
  }
  
  .header-actions {
    display: none;
  }
}

@media (max-width: 576px) {
  .nav-menu :deep(.ant-menu-item),
  .nav-menu :deep(.ant-menu-submenu-title) {
    padding: 0 10px !important;
    font-size: 14px;
  }
  
  .dropdown-title {
    font-size: 14px;
  }
}
</style>