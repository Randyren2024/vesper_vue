<template>
  <div class="products-solutions-page">
    <!-- 导航栏 -->
    <a-layout-header class="header">
      <div class="header-content">
        <div class="logo" @click="$router.push('/')">
          <img src="/logo.webp" alt="Vesper AgriTech" class="logo-image" @error="handleLogoError" />
        </div>
        
        <a-menu v-model:selectedKeys="currentKeys" mode="horizontal" class="nav-menu">
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
                v-for="category in categories" 
                :key="category.id"
                @click="selectCategory(category.id)"
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
          <a-button type="primary" class="demo-btn" @click="openWhatsApp">
            Request Demo
          </a-button>
        </div>
      </div>
    </a-layout-header>

    <!-- Hero Banner -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Products & Solutions</h1>
        <p class="hero-subtitle">Advanced agricultural technology solutions for modern farming. From precision steering to autonomous robots, we deliver efficiency and reliability.</p>
      </div>
    </section>

    <!-- Category Tabs -->
    <section class="categories-section">
      <div class="categories-container">
        <div class="category-tabs">
          <a-button 
            :type="selectedCategory === 'all' ? 'primary' : 'default'"
            class="category-tab"
            @click="selectedCategory = 'all'"
          >
            All
          </a-button>
          <a-button 
            v-for="cat in displayCategories"
            :key="cat.id"
            :type="selectedCategory === cat.id ? 'primary' : 'default'"
            class="category-tab"
            @click="selectedCategory = cat.id"
          >
            {{ cat.name }}
          </a-button>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="products-section">
      <div class="products-container">
        <div class="products-grid">
          <a-card 
            v-for="product in filteredProducts" 
            :key="product.id" 
            class="product-card" 
            hoverable
            @click="$router.push(`/product/${product.id}`)"
          >
            <template #cover>
              <div class="product-cover">
                <img :src="product.image" :alt="product.name" />
                <div class="product-badges">
                  <a-tag v-if="product.isBestSeller" color="gold">Best Seller</a-tag>
                  <a-tag v-if="product.isNew" color="green">New</a-tag>
                </div>
              </div>
            </template>
            <a-card-meta :title="product.code + ' ' + product.name">
              <template #description>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-category">
                  <a-tag color="green">{{ product.categoryName }}</a-tag>
                </div>
              </template>
            </a-card-meta>
            <div class="product-actions">
              <a-button type="primary" size="small" @click.stop="$router.push(`/product/${product.id}`)">
                Learn More
              </a-button>
              <a-button size="small" @click.stop="openWhatsAppForProduct(product)">
                Get Quote
              </a-button>
            </div>
          </a-card>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Transform Your Farming?</h2>
        <p>Contact us today for a personalized demonstration or quote</p>
        <div class="cta-buttons">
          <a-button type="primary" size="large" @click="openWhatsApp">Request a Demo</a-button>
          <a-button size="large" @click="$router.push('/contact')">Contact Us</a-button>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <a-layout-footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <img src="/logo.webp" alt="Vesper AgriTech" class="footer-logo-image" @error="handleFooterLogoError" />
          </div>
          <p class="footer-description">
            Committed to advancing agricultural modernization through technological innovation
          </p>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Quick Links</h3>
          <a @click="$router.push('/products-solutions')" class="footer-link">Products & Solutions</a>
          <a @click="$router.push('/about_us')" class="footer-link">About Us</a>
          <a @click="$router.push('/contact')" class="footer-link">Contact</a>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Legal</h3>
          <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
          <a href="/terms-conditions" class="footer-link">Terms & Conditions</a>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Contact Us</h3>
          <p class="footer-contact">market@vesperinno.com</p>
          <p class="footer-contact">+61 408 518 918</p>
          <p class="footer-contact">Australia</p>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Follow Us</h3>
          <a href="https://www.linkedin.com/in/alan-gan-vesperinno/" target="_blank" class="footer-link">LinkedIn</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright© {{ currentYear }} Shenzhen Vesper Inno Technology Co., Ltd All Rights Reserved</p>
      </div>
    </a-layout-footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import * as Icons from '@ant-design/icons-vue'
import { categories, products, type Product } from '../data/products'

const currentKeys = ref<string[]>(['products-solutions'])
const selectedCategory = ref('all')
const currentYear = new Date().getFullYear()

const categoryIcons: Record<string, any> = Icons

const displayCategories = categories

const selectCategory = (categoryId: string) => {
  selectedCategory.value = categoryId
}

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products
  }
  return products.filter(p => p.category === selectedCategory.value)
})

const openWhatsApp = () => {
  const phoneNumber = '8613755006969'
  const message = 'Hello! I would like to learn more about Vesper AgriTech products and solutions.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

const openWhatsAppForProduct = (product: Product) => {
  const phoneNumber = '8613755006969'
  const message = `Hello! I'm interested in ${product.name} (${product.code}). Could you please provide more information?`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

const handleLogoError = (event: Event) => {
  const img = event.target as HTMLImageElement
  if (img.src.includes('.webp')) {
    img.src = '/logo.png'
  }
}

const handleFooterLogoError = (event: Event) => {
  const img = event.target as HTMLImageElement
  if (img.src.includes('.webp')) {
    img.src = '/logo.png'
  }
}
</script>

<style scoped>
.products-solutions-page {
  font-family: 'Noto Sans', 'Noto Sans SC', 'Roboto', sans-serif;
  min-height: 100vh;
}

/* 导航栏 */
.header {
  background: white;
  border-bottom: 1px solid #e8e8e8;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 0;
  flex-wrap: wrap;
  gap: 16px;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo-image {
  width: 120px;
  height: auto;
  object-fit: contain;
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
  padding: 0 12px !important;
  font-size: clamp(14px, 1.1vw, 16px);
}

.header-actions {
  display: flex;
  gap: 12px;
}

.demo-btn {
  background: linear-gradient(135deg, #52c41a, #73d13d);
  border: none;
  font-weight: 500;
}

/* Hero */
.hero-section {
  background: linear-gradient(135deg, #f6ffed 0%, #e6f7ff 100%);
  padding: clamp(40px, 5vw, 60px) clamp(16px, 3vw, 24px);
  text-align: center;
}

.hero-title {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: clamp(12px, 1.5vw, 16px);
}

.hero-subtitle {
  font-size: clamp(16px, 1.3vw, 18px);
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Categories */
.categories-section {
  padding: 20px clamp(16px, 3vw, 24px);
  background: white;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 64px;
  z-index: 100;
}

.categories-container {
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
}

.category-tabs {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.category-tab {
  font-size: 14px;
  padding: 8px 20px;
  border-radius: 20px;
}

/* Products Grid */
.products-section {
  padding: clamp(32px, 4vw, 48px) clamp(16px, 3vw, 24px);
  background: #f8f9fa;
}

.products-container {
  max-width: 1200px;
  margin: 0 auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
  gap: 24px;
}

.product-card {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.product-cover {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-cover img {
  transform: scale(1.1);
}

.product-badges {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 8px;
}

.product-description {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-category {
  margin-top: 8px;
}

.product-actions {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  padding-bottom: 8px;
}

.product-actions :deep(.ant-btn) {
  flex: 1;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #2e7d32, #4caf50);
  padding: clamp(40px, 5vw, 60px) clamp(16px, 3vw, 24px);
  text-align: center;
  color: white;
}

.cta-content h2 {
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  margin-bottom: 12px;
}

.cta-content p {
  font-size: clamp(16px, 1.3vw, 18px);
  opacity: 0.9;
  margin-bottom: 24px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-buttons .ant-btn {
  padding: 8px 32px;
  height: auto;
  font-size: 16px;
}

.cta-buttons .ant-btn-primary {
  background: white;
  color: #2e7d32;
  border: none;
}

.cta-buttons .ant-btn-default {
  background: transparent !important;
  border-color: white;
  color: white;
}

.cta-buttons .ant-btn-default:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  border-color: white;
  color: white;
}

.cta-buttons .ant-btn-default:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: white;
  color: white;
}

/* Footer */
.footer {
  background: #1a252f;
  color: white;
  padding: clamp(40px, 5vw, 60px) clamp(16px, 3vw, 24px) 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-logo-image {
  width: 100px;
  height: auto;
  object-fit: contain;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.6;
}

.footer-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #52c41a;
}

.footer-contact {
  color: rgba(255, 255, 255, 0.7);
  margin: 4px 0;
  font-size: 14px;
}

.footer-bottom {
  text-align: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

/* Dropdown styles */
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

.view-all {
  color: #52c41a;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    height: auto;
    padding: 16px 0;
  }
  
  .nav-menu {
    margin: 12px 0;
  }
  
  .hero-section {
    padding: 40px 16px;
  }
  
  .categories-section {
    top: auto;
  }
}
</style>
