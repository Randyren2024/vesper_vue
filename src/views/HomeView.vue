<template>
  <div class="home">
    <!-- 导航栏 -->
    <Header />
    <!-- 下面是旧的导航栏代码备份参考：
    <a-layout-header class="header">
      <div class="header-content">
        <div class="logo" @click="$router.push('/')">
          <img src="/logo.webp" alt="Vesper AgriTech" class="logo-image" @error="handleLogoError" />
        </div>
        <a-menu v-model:selectedKeys="current" mode="horizontal" class="nav-menu">
          <a-menu-item key="home" @click="$router.push('/')">Home</a-menu-item>
          <a-menu-item key="products-solutions" @click="$router.push('/products-solutions')">Products & Solutions</a-menu-item>
          <a-menu-item key="about" @click="$router.push('/about_us')">About Us</a-menu-item>
          <a-menu-item key="contact" @click="$router.push('/contact_us')">Contact Us</a-menu-item>
        </a-menu>
        <div class="header-actions">
          <a-button type="primary" class="demo-btn" @click="openWhatsApp">Request Demo</a-button>
        </div>
      </div>
    </a-layout-header>
    旧导航栏代码结束 -->
    
    <!-- 英雄区域 - 产品轮播图 -->
    <section class="hero-section">
      <div class="hero-content" v-motion-fade-visible>
        <h1 class="hero-title" v-motion-slide-visible-bottom :delay="100">Smart Agriculture, Precision Future</h1>
        <p class="hero-subtitle" v-motion-slide-visible-bottom :delay="200">
          Vesper AgriTech provides advanced agricultural technology solutions,<br>
          enhancing farming efficiency and sustainability through intelligent technology
        </p>
        <div class="hero-actions" v-motion-slide-visible-bottom :delay="300">
          <a-button type="primary" size="large" class="primary-btn" @click="$router.push('/products-solutions')">Explore Products & Solutions</a-button>
        </div>
      </div>
      
      <div class="carousel-container">
        <div class="carousel" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <!-- 产品1: AF718 Autosteering System -->
          <div class="carousel-slide" @click="$router.push('/product/af718')">
            <div class="slide-content">
              <div class="slide-image">
                <img 
                  src="/images/products/af718.webp" 
                  alt="AF718 Autosteering System"
                  class="slide-img"
                  @error="(e) => e.target.src = images.fallback.carousel[0]"
                />
                <div class="slide-overlay">
                  <div class="product-tag">AF718</div>
                  <h2 class="slide-title">Autosteering System</h2>
                  <p class="slide-description">High-performance autosteering with ±2.5 cm accuracy for precision agriculture</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 产品2: Aries300N Orchard Spraying Robot -->
          <div class="carousel-slide" @click="$router.push('/product/aries300n')">
            <div class="slide-content">
              <div class="slide-image">
                <img 
                  src="/images/products/300n.webp" 
                  alt="Aries300N Orchard Spraying Robot"
                  class="slide-img"
                  @error="(e) => e.target.src = images.fallback.carousel[1]"
                />
                <div class="slide-overlay">
                  <div class="product-tag">Aries300N</div>
                  <h2 class="slide-title">Orchard Spraying Robot</h2>
                  <p class="slide-description">Autonomous hybrid-powered sprayer, reduces pesticide usage by 40%</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 产品3: Taurus80E Smart Lawn Mowing Robot -->
          <div class="carousel-slide" @click="$router.push('/product/taurus80e')">
            <div class="slide-content">
              <div class="slide-image">
                <img 
                  src="/images/products/80e-1.webp" 
                  alt="Taurus80E Smart Lawn Mowing Robot"
                  class="slide-img"
                  @error="(e) => e.target.src = images.fallback.carousel[2]"
                />
                <div class="slide-overlay">
                  <div class="product-tag">Taurus80E</div>
                  <h2 class="slide-title">Smart Lawn Mowing Robot</h2>
                  <p class="slide-description">Professional autonomous mower with 24/7 capability and slope handling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 轮播控制 -->
        <div class="carousel-controls">
          <button class="control-btn prev" @click="prevSlide">
            <span class="control-icon">‹</span>
          </button>
          <div class="carousel-dots">
            <button 
              v-for="(_, index) in 3" 
              :key="index"
              class="dot" 
              :class="{ active: currentSlide === index }"
              @click="goToSlide(index)"
            ></button>
          </div>
          <button class="control-btn next" @click="nextSlide">
            <span class="control-icon">›</span>
          </button>
        </div>
      </div>
    </section>

    <!-- 解决方案 -->
    <section class="solutions-section" v-motion-fade-visible :delay="400">
      <div class="section-header" v-motion-slide-visible-bottom :delay="400">
        <h2 class="section-title">Products & Solutions</h2>
        <p class="section-subtitle">Comprehensive technical support for modern agriculture</p>
      </div>
      <div class="solutions-grid">
        <a-card 
          v-for="(category, index) in displayedCategories" 
          :key="category.id" 
          class="solution-card" 
          hoverable
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 + 500 } }"
          @click="$router.push(`/products-solutions?category=${category.id}`)"
        >
          <template #cover>
            <div :class="`card-cover ${category.id}`">
              <img 
                :src="getCategoryImage(category.id)" 
                :alt="category.name" 
                @error="(e) => e.target.src = images.fallback.solutions.precision"
              />
            </div>
          </template>
          <a-card-meta :title="category.name">
            <template #description>
              {{ category.description }}
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </section>

<!-- 产品展示 -->
    <section class="products-section" v-motion-fade-visible :delay="600">
      <div class="section-header" v-motion-slide-visible-bottom :delay="600">
        <h2 class="section-title">Featured Products</h2>
        <p class="section-subtitle">Leading agricultural technology equipment</p>
      </div>
      <div class="products-grid">
         <a-card 
            v-for="(product, index) in displayedProducts" 
            :key="product.id" 
            class="product-card" 
            hoverable
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: index * 100 + 700 } }"
            @click="$router.push(`/product/${product.id}`)"
          >
            <template #cover>
              <div :class="`product-cover ${product.id}`">
                <img 
                  :src="product.image" 
                  :alt="product.name" 
                  @error="(e) => e.target.src = images.fallback.products.sm200"
                />
              </div>
            </template>
            <a-card-meta :title="product.name">
              <template #description>
                {{ product.description }}
              </template>
            </a-card-meta>
            <div class="product-actions">
              <a-button type="primary" size="small" @click="$router.push(`/product/${product.id}`)">Learn More</a-button>
              <a-button size="small" @click="openWhatsAppForProduct(product.name)">Get Quote</a-button>
            </div>
          </a-card>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-section" v-motion-fade-visible :delay="800">
      <div class="section-header" v-motion-slide-visible-bottom :delay="800">
        <h2 class="section-title">Why Choose Us</h2>
        <p class="section-subtitle">Our proven track record</p>
      </div>
      <div class="stats-grid">
        <div 
          v-for="(stat, index) in statItems" 
          :key="index" 
          class="stat-card"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 + 900 } }"
        >
          <div class="stat-icon" :class="`stat-${index + 1}`">{{ stat.icon }}</div>
          <h3 class="stat-title">{{ stat.title }}</h3>
          <p class="stat-description">{{ stat.description }}</p>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="values-section" v-motion-fade-visible :delay="900">
      <div class="section-header" v-motion-slide-visible-bottom :delay="900">
        <h2 class="section-title">Our Values</h2>
        <p class="section-subtitle">What drives us forward</p>
      </div>
      <div class="values-grid">
        <div 
          v-for="(value, index) in valueItems" 
          :key="index" 
          class="value-card"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 + 1000 } }"
        >
          <div class="value-icon" :class="`value-${index + 1}`">{{ value.icon }}</div>
          <h3 class="value-title">{{ value.title }}</h3>
          <p class="value-description">{{ value.description }}</p>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { LinkedinOutlined } from '@ant-design/icons-vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { categories, products, getBestSellers } from '../data/products'

const current = ref<string[]>(['home'])

const displayedCategories = categories
const displayedProducts = getBestSellers().slice(0, 3)

const statItems = [
  {
    icon: '🌱',
    title: '10+ Years Experience',
    description: 'Deep expertise in agricultural technology, continuously innovating since 2014.'
  },
  {
    icon: '🚜',
    title: 'Multiple Product Lines',
    description: 'Comprehensive solutions covering precision agriculture, autonomous robots, and smart farming systems.'
  },
  {
    icon: '🇦🇺',
    title: 'Australia Market',
    description: 'Headquartered in Australia, serving customers across Oceania and globally.'
  },
  {
    icon: '🤝',
    title: 'Global Partners',
    description: 'Strong partnerships with leading international investors and distribution networks.'
  }
]

const valueItems = [
  {
    icon: '⚡',
    title: 'Technical Excellence',
    description: 'Maintaining the highest standards in product selection and technical validation, ensuring every solution meets rigorous quality benchmarks.'
  },
  {
    icon: '🤝',
    title: 'Customer Partnership',
    description: 'Viewing clients as long-term partners, providing comprehensive support from product selection to after-sales service.'
  },
  {
    icon: '📊',
    title: 'Market Intelligence',
    description: 'Deep understanding of both Chinese manufacturing capabilities and global market needs for optimal product-market fit.'
  },
  {
    icon: '🌏',
    title: 'Localized Service',
    description: 'Building deep, localized service systems to truly serve global customers with complete solutions, not just products.'
  }
]

const categoryImages: Record<string, string> = {
  'precision-agriculture': '/images/pexels-nc-farm-bureau-mark-26256448.webp',
  'precision-spraying': '/images/agriculture-6502282.webp',
  'land-leveling': '/images/pexels-wolfgang-weiser-467045605-34239949.webp',
  'agricultural-robotics': '/images/3U9A0093.webp',
  'machine-control': '/images/pexels-vladimirsrajber-18431208.webp'
}

const getCategoryImage = (categoryId: string): string => {
  return categoryImages[categoryId] || images.fallback.solutions[categoryId] || images.fallback.solutions.precision
}

const images = {
  carousel: [
    '/images/3U9A0093.webp',
    '/images/pexels-nc-farm-bureau-mark-2889442.webp',
    '/images/harvest-1543064.webp'
  ],
  solutions: {
    precision: '/images/pexels-nc-farm-bureau-mark-26256448.webp',
    robotics: '/images/harvest-1543064.webp',
    iot: '/images/agriculture-6502282.webp',
    data: '/images/sunrise-8218442.webp'
  },
  products: {
    sm200: '/images/agriculture-6502282.webp',
    ar300: '/images/harvest-1543064.webp',
    vg100: '/images/3U9A0093.webp'
  },
  fallback: {
    carousel: [
      '/images/3U9A0093.jpg',
      '/images/pexels-nc-farm-bureau-mark-2889442.jpg',
      '/images/harvest-1543064.jpg'
    ],
    solutions: {
      precision: '/images/pexels-nc-farm-bureau-mark-26256448.jpg',
      robotics: '/images/3U9A0093.jpg',
      iot: '/images/agriculture-6502282.jpg',
      data: '/images/sunrise-8218442.jpg',
      spraying: '/images/agriculture-6502282.jpg',
      'land-leveling': '/images/pexels-wolfgang-weiser-467045605-34239949.jpg',
      'machine-control': '/images/pexels-vladimirsrajber-18431208.jpg'
    },
    products: {
      sm200: '/images/agriculture-6502282.jpg',
      ar300: '/images/harvest-1543064.jpg',
      vg100: '/images/3U9A0093.jpg'
    }
  }
}
const currentSlide = ref(0)
const autoPlayInterval = ref<NodeJS.Timeout | null>(null)

// 版权年份 - 显示起始年份到当前年份
const copyrightYear = (() => {
  const startYear = 2024
  const currentYear = new Date().getFullYear()
  
  // 如果当前年份大于起始年份，显示范围（如2024-2026）
  // 否则只显示当前年份
  return currentYear > startYear ? `${startYear}-${currentYear}` : currentYear.toString()
})()

// 打开WhatsApp联系
const openWhatsApp = () => {
  const phoneNumber = '61448290926'
  const message = 'Hello! I would like to request a demo of Vesper AgriTech products.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

// 为特定产品打开WhatsApp获取报价
const openWhatsAppForProduct = (productName: string) => {
  const phoneNumber = '61448290926'
  const message = `Hello! I'm interested in getting a quote for the ${productName}. Could you please provide more information?`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

// 获取图片URL，如果本地图片不存在则使用备用图片
const getImageUrl = (type: string, key?: string | number) => {
  try {
    if (type === 'carousel' && typeof key === 'number') {
      return images.carousel[key] || images.fallback.carousel[key]
    }
    if (type === 'solutions' && typeof key === 'string') {
      return images.solutions[key as keyof typeof images.solutions] || 
             images.fallback.solutions[key as keyof typeof images.fallback.solutions]
    }
    if (type === 'products' && typeof key === 'string') {
      return images.products[key as keyof typeof images.products] || 
             images.fallback.products[key as keyof typeof images.fallback.products]
    }
  } catch (error) {
    console.error('Error getting image URL:', error)
  }
  
  // 默认返回第一个备用图片
  return images.fallback.carousel[0]
}

const handleLogoError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.warn('Header logo WebP failed to load, falling back to PNG')
  // 尝试回退到PNG版本
  if (img.src.includes('.webp')) {
    img.src = '/logo.png'
  }
}

const handleFooterLogoError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.warn('Footer logo WebP failed to load, falling back to PNG')
  // 尝试回退到PNG版本
  if (img.src.includes('.webp')) {
    img.src = '/logo.png'
  }
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 3
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + 3) % 3
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
  }
  autoPlayInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.home {
  font-family: 'Noto Sans', 'Noto Sans SC', 'Inter', sans-serif;
}

/* 导航栏样式 - 改进响应式 */
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
  flex-shrink: 0;
  text-decoration: none;
  cursor: pointer;
}

.logo-image {
  width: 120px;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;
}

/* 如果logo加载失败，显示备用样式 */
.logo-image[src*="logo.png"]:not([src]) {
  display: none;
}

.logo-image:not([src]), 
.logo-image[src=""] {
  display: none;
}

/* 备用logo样式 */
.logo-fallback {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 40px;
  padding: 0 12px;
  background: linear-gradient(135deg, #2e7d32, #4caf50);
  border-radius: 8px;
  color: white;
  flex-shrink: 0;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1;
}

.logo-subtext {
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  opacity: 0.9;
}

/* Footer备用logo样式 */
.footer-logo-fallback {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 40px;
  padding: 0 12px;
  background: linear-gradient(135deg, #2e7d32, #4caf50);
  border-radius: 8px;
  color: white;
}

.footer-logo-text {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1;
}

.footer-logo-subtext {
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  opacity: 0.9;
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
  flex-shrink: 0;
}

.demo-btn {
  background: linear-gradient(135deg, #52c41a, #73d13d);
  border: none;
  font-weight: 500;
  white-space: nowrap;
  font-size: clamp(14px, 1.1vw, 16px);
  padding: 8px 16px;
  height: auto;
}

/* 英雄区域 - 产品轮播图 */
.hero-section {
  background: linear-gradient(135deg, #f6ffed 0%, #e6f7ff 100%);
  padding: clamp(40px, 5vw, 80px) clamp(16px, 3vw, 24px);
  /* 全宽设计 - 移除最大宽度限制 */
  scroll-margin-top: 100px; /* 当滚动到hero section时，为固定的header留出空间 */
}

.hero-content {
  text-align: center;
  margin-bottom: clamp(40px, 5vw, 60px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.hero-title {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: clamp(16px, 2vw, 24px);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(16px, 1.5vw, 18px);
  color: #666;
  margin-bottom: clamp(24px, 3vw, 40px);
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: clamp(12px, 1.5vw, 16px);
  flex-wrap: wrap;
  justify-content: center;
}

.primary-btn {
  background: linear-gradient(135deg, #52c41a, #73d13d);
  border: none;
  font-weight: 500;
  padding: 0 clamp(20px, 2.5vw, 32px);
  height: clamp(40px, 4vw, 48px);
  font-size: clamp(14px, 1.1vw, 16px);
}

.secondary-btn {
  border-color: #52c41a;
  color: #52c41a;
  padding: 0 clamp(20px, 2.5vw, 32px);
  height: clamp(40px, 4vw, 48px);
  font-size: clamp(14px, 1.1vw, 16px);
}

/* 轮播图样式 */
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  /* 移除 overflow: hidden，因为 object-fit: contain 不会溢出 */
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  background-color: #f5f7fa; /* 容器背景色，与图片背景一致 */
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
  height: clamp(280px, 35vw, 450px); /* 降低高度，显示更多图片宽度 */
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  cursor: pointer;
}

.slide-content {
  height: 100%;
  position: relative;
}

.slide-image {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* 移除 border-radius，因为容器已经有圆角 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 显示完整图片，不裁剪 */
  object-position: 50% 50%; /* 精确居中 */
  background-color: #f5f7fa; /* 添加浅色背景填充空白区域 */
  transition: transform 0.3s ease;
}

/* 悬停时轻微放大 */
.carousel-slide:hover .slide-img {
  transform: scale(1.05);
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  color: white;
  padding: clamp(20px, 4vw, 40px);
  padding-top: clamp(60px, 10vw, 120px);
}

.product-tag {
  display: inline-block;
  background: rgba(82, 196, 26, 0.95);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: clamp(12px, 1.2vw, 14px);
  font-weight: 600;
  margin-bottom: clamp(8px, 1vw, 16px);
  backdrop-filter: blur(4px);
}

.slide-title {
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.3;
}

.slide-description {
  font-size: clamp(16px, 1.5vw, 18px);
  opacity: 0.9;
  line-height: 1.5;
  max-width: 600px;
}

/* 轮播控制 */
.carousel-controls {
  position: absolute;
  bottom: 40px; /* 增加底部距离，避免遮挡描述文字 */
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 10;
}

.control-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
}

.control-btn:hover {
  background: rgba(82, 196, 26, 0.8);
  border-color: #52c41a;
  transform: scale(1.1);
}

.control-icon {
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
}

.carousel-dots {
  display: flex;
  gap: 12px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot.active {
  background: #52c41a;
  transform: scale(1.2);
}

.dot:hover {
  background: rgba(82, 196, 26, 0.8);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .carousel {
    height: 400px;
  }
  
  .slide-overlay {
    padding: 24px;
    padding-top: 60px;
  }
  
  .slide-title {
    font-size: 20px;
  }
  
  .slide-description {
    font-size: 14px;
  }
  
  .control-btn {
    width: 40px;
    height: 40px;
  }
  
  .control-icon {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .carousel {
    height: 300px;
  }
  
  .slide-overlay {
    padding: 16px;
    padding-top: 40px;
  }
  
  .product-tag {
    padding: 6px 12px;
    font-size: 12px;
  }
}

/* 解决方案 - 改进响应式 */
.solutions-section {
  padding: clamp(40px, 5vw, 80px) clamp(16px, 3vw, 24px);
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: clamp(32px, 4vw, 48px);
}

.section-title {
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 700;
  background: var(--gradient-secondary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: clamp(12px, 1.5vw, 16px);
}

.section-subtitle {
  font-size: clamp(16px, 1.5vw, 18px);
  color: #666;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: clamp(20px, 2.5vw, 24px);
}

.solution-card {
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-cover {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-cover:hover img {
  transform: scale(1.1);
}

.card-cover.precision::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(183, 235, 143, 0.3), rgba(149, 222, 100, 0.3));
}

.card-cover.robotics::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(145, 213, 255, 0.3), rgba(105, 192, 255, 0.3));
}

.card-cover.iot::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(211, 173, 247, 0.3), rgba(179, 127, 235, 0.3));
}

.card-cover.data::after,
.card-cover.livestock-management::after,
.card-cover.machine-control::after,
.card-cover.vesper-service::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 214, 102, 0.3), rgba(255, 197, 61, 0.3));
}

/* 产品展示 - 改进响应式 */
.products-section {
  padding: clamp(40px, 5vw, 80px) clamp(16px, 3vw, 24px);
  background: #f8f9fa;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
  gap: clamp(24px, 3vw, 32px);
  max-width: 1200px;
  margin: 0 auto;
}

.product-card {
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-cover {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-cover::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(82, 196, 26, 0.3), rgba(56, 158, 13, 0.3));
}

.product-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-cover:hover img {
  transform: scale(1.1);
}

.product-cover.vg100::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(82, 196, 26, 0.4), rgba(56, 158, 13, 0.4));
}

.product-cover.ar300::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.4), rgba(9, 109, 217, 0.4));
}

.product-cover.sm200::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(114, 46, 209, 0.4), rgba(83, 29, 171, 0.4));
}

.product-actions {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  padding-bottom: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  justify-content: stretch;
}

.product-actions :deep(.ant-btn) {
  flex: 1;
  height: 40px;
}

/* Why Choose Us Section */
.why-choose-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
}

.section-subtitle {
  font-size: clamp(16px, 1.5vw, 18px);
  color: #666;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 40px 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}

.stat-1 { background: linear-gradient(135deg, #b7eb8f, #95de64); }
.stat-2 { background: linear-gradient(135deg, #91d5ff, #69c0ff); }
.stat-3 { background: linear-gradient(135deg, #ffd666, #ffc53d); }
.stat-4 { background: linear-gradient(135deg, #d3adf7, #b37feb); }

.stat-title {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
}

.stat-description {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
}

/* Our Values Section */
.values-section {
  padding: 80px 0;
  background: white;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.value-card {
  text-align: center;
  padding: 40px 20px;
  border-radius: 12px;
  background: #f8f9fa;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.value-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}

.value-1 { background: linear-gradient(135deg, #b7eb8f, #95de64); }
.value-2 { background: linear-gradient(135deg, #91d5ff, #69c0ff); }
.value-3 { background: linear-gradient(135deg, #ffd666, #ffc53d); }
.value-4 { background: linear-gradient(135deg, #d3adf7, #b37feb); }

.value-title {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
}

.value-description {
  font-size: 16px;
  line-height: 1.5;
  color: #666;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .stats-grid,
  .values-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}

/* 页脚 - 改进响应式 */
.footer {
  background: #1a252f;
  color: white;
  padding: clamp(40px, 5vw, 60px) clamp(16px, 3vw, 24px) 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: clamp(24px, 3vw, 40px);
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.5vw, 16px);
}

.footer-logo {
  display: flex;
  align-items: center;
}

.footer-logo-image {
  width: 80px;
  height: auto;
  object-fit: contain;
  opacity: 0.9;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-size: clamp(14px, 1.2vw, 16px);
}

.footer-title {
  font-size: clamp(16px, 1.5vw, 18px);
  font-weight: 600;
  margin-bottom: clamp(6px, 0.8vw, 8px);
  color: white;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
  font-size: clamp(14px, 1.2vw, 16px);
}

.footer-link:hover {
  color: #52c41a;
}

.footer-contact {
  color: rgba(255, 255, 255, 0.7);
  margin: clamp(3px, 0.5vw, 4px) 0;
  font-size: clamp(14px, 1.2vw, 16px);
}

.footer-bottom {
  text-align: center;
  margin-top: clamp(24px, 3vw, 40px);
  padding-top: clamp(16px, 2vw, 24px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: clamp(14px, 1.2vw, 16px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 40px 16px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-actions {
    justify-content: center;
  }

  .section-title {
    font-size: 28px;
  }

  .header-content {
    flex-direction: column;
    height: auto;
    padding: 16px 0;
  }

  .nav-menu {
    margin: 16px 0;
  }
}
</style>