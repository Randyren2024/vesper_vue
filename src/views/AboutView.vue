<template>
  <div class="about">
    <!-- 导航栏 -->
    <Header />
    <!-- 旧导航栏备份：
    <a-layout-header class="header">
      <div class="header-content">
        <div class="logo">
          <img src="/logo.png" alt="Vesper AgriTech" class="logo-image" @error="handleLogoError" />
        </div>
        <a-menu v-model:selectedKeys="current" mode="horizontal" class="nav-menu">
          <a-menu-item key="home" @click="$router.push('/')">Home</a-menu-item>
          <a-menu-item key="solutions" @click="$router.push('/solutions')">Solutions</a-menu-item>
          <a-menu-item key="products" @click="$router.push('/products')">Products</a-menu-item>
          <a-menu-item key="about" @click="$router.push('/about_us')">About</a-menu-item>
          <a-menu-item key="contact" @click="$router.push('/contact')">Contact</a-menu-item>
        </a-menu>
        <div class="header-actions">
          <a-button type="primary" class="demo-btn" @click="openWhatsApp">Request Demo</a-button>
        </div>
      </div>
    </a-layout-header>
    旧导航栏结束 -->
    
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-image-container">
        <img 
          :src="getImageUrl('about', 'hero')" 
          alt="Vesper AgriTech - About Us"
          class="hero-img"
          @error="(e) => e.target.src = images.fallback.about.hero"
        />
        <div class="hero-overlay">
          <h1 class="hero-title">Bridging China's Intelligent Hardware Technology with Australia Agriculture</h1>
          <p class="hero-subtitle">Your trusted partner for advanced agricultural robotics solutions</p>
        </div>
      </div>
    </section>

    <!-- Company Introduction -->
    <section class="intro-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">About Vesper AgriTech</h2>
          <p class="section-subtitle">Building the bridge between technology and agriculture</p>
        </div>
        <div class="intro-content">
          <div class="intro-text">
            <p class="intro-paragraph">
              Vesper AgriTech is committed to building an efficient bridge between China's intelligent hardware technology and the local needs of Australia. With deep expertise accumulated from residential scenarios to large-scale agriculture, we provide comprehensive product solutions and services for the Australian market.
            </p>
            <p class="intro-paragraph">
              Based in Australia with strong connections to China's technology ecosystem, we leverage our full-chain capabilities—spanning R&D, mass production, and overseas service systems—to deliver cutting-edge agricultural robotics solutions that enhance efficiency and sustainability.
            </p>
          </div>
          <div class="intro-image">
            <img 
              :src="getImageUrl('about', 'intro')" 
              alt="Agricultural Technology"
              @error="(e) => e.target.src = images.fallback.about.intro"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Company Journey Timeline -->
    <section class="timeline-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Our Journey</h2>
          <p class="section-subtitle">From drones to agricultural robotics</p>
        </div>
        <div class="timeline">
          <div class="timeline-item" v-for="(item, index) in timeline" :key="index">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-content">
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="team-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Leadership Team</h2>
          <p class="section-subtitle">Expertise driving innovation</p>
        </div>
        <div class="team-grid">
          <div class="team-card">
            <div class="team-image">
              <img 
                :src="getImageUrl('about', 'team')" 
                alt="Mr. Gan - Founder & CEO of Vesper AgriTech"
                @error="(e) => e.target.src = images.fallback.about.team"
              />
            </div>
            <div class="team-info">
              <h3 class="team-name">Mr. Gan</h3>
              <p class="team-position">Founder & CEO</p>
              <div class="team-bio">
                <p>Top-tier expert in the drone and robotics industry with over 15 years of deep experience. Former core member of DJI's intelligent perception system team and architect at Alibaba DAMO Academy.</p>
                <p>Led industry-first mass production of 8,000 units/day at DJI and co-founded a robotic lawn mower company that secured investment from Mr. Lei Jun (Xiaomi) and Mr. Zeng Liqing (Tencent).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Values -->
    <section class="values-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Our Values</h2>
          <p class="section-subtitle">What drives us forward</p>
        </div>
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in values" :key="index">
            <div class="value-icon" :class="`value-${index + 1}`">
              {{ value.icon }}
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="stats-section">
      <div class="section-container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">10+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">Multiple</div>
            <div class="stat-label">Product Lines</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">Australia</div>
            <div class="stat-label">Market Presence</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">Global</div>
            <div class="stat-label">Investment Partners</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-section">
      <div class="section-container">
        <div class="contact-content">
          <h2 class="contact-title">Ready to Transform Your Agriculture?</h2>
          <p class="contact-description">
            Whether you need agricultural robots, intelligent navigation systems, or customized solutions, our team is ready to help you find the perfect technology for your needs.
          </p>
          <div class="contact-actions">
            <a-button type="primary" size="large" class="contact-btn" @click="router.push('/contact')">Contact Us</a-button>
            <a-button size="large" class="secondary-btn" @click="openWhatsApp">Request Demo</a-button>
          </div>
          <div class="contact-info">
            <p class="contact-detail">📧 market@vesperinno.com</p>
            <p class="contact-detail">📞 +61 408 518 918</p>
            <p class="contact-detail">📍 Australia</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <a-layout-footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <img 
              src="/logo.png" 
              alt="Vesper AgriTech" 
              class="footer-logo-image"
              @error="handleFooterLogoError"
            />
          </div>
          <p class="footer-description">
            Committed to advancing agricultural modernization through technological innovation,<br>
            achieving sustainable agricultural production
          </p>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Solutions</h3>
          <a href="#" class="footer-link">Precision Agriculture</a>
          <a href="#" class="footer-link">Agricultural Robots</a>
          <a href="#" class="footer-link">IoT Monitoring</a>
          <a href="#" class="footer-link">Data Analytics</a>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Legal</h3>
          <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
          <a href="/terms-conditions" class="footer-link">Terms & Conditions</a>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Contact Us</h3>
          <p class="footer-contact">📧 market@vesperinno.com</p>
          <p class="footer-contact">📞 +61 408 518 918</p>
          <p class="footer-contact">📍 Australia</p>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Follow Us</h3>
          <a href="https://www.linkedin.com/in/alan-gan-vesperinno/" target="_blank" class="footer-link"><LinkedinOutlined /> LinkedIn</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright© {{ new Date().getFullYear() }} Shenzhen Vesper Inno Technology Co., Ltd All Rights Reserved</p>
      </div>
    </a-layout-footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LinkedinOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'

const router = useRouter()
const current = ref<string[]>(['about'])
const logoError = ref(false)
const footerLogoError = ref(false)

// 图片配置 - 使用public目录中的图片
const images = {
  about: {
    hero: '/images/AM2A1835.JPG',
    intro: '/images/agriculture-6502282.jpg',
    team: '/images/Mr. Gan the Founder.png'  // Mr. Gan的照片
  },
  fallback: {
    about: {
      hero: '/images/AM2A1835.JPG',
      intro: '/images/agriculture-6502282.jpg',
      team: '/images/Mr. Gan the Founder.png'
    }
  }
}

// 获取图片URL
const getImageUrl = (type: string, key: string) => {
  try {
    if (type === 'about' && key in images.about) {
      return images.about[key as keyof typeof images.about]
    }
  } catch (error) {
    console.error('Error getting image URL:', error)
  }
  
  return images.fallback.about.hero
}

const handleLogoError = () => {
  logoError.value = true
  console.error('Header logo image failed to load.')
}

const handleFooterLogoError = () => {
  footerLogoError.value = true
  console.error('Footer logo image failed to load.')
}

// WhatsApp联系
const openWhatsApp = () => {
  const phoneNumber = '8613755006969'
  const message = 'Hello! I would like to request a demo of Vesper AgriTech products.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

// 时间线数据
const timeline = [
  {
    year: '2015-2018',
    title: 'DJI Intelligent Perception System Team',
    description: 'Core member, pioneered mass production of 8,000 units/day. DJI held 90% market share in consumer and agricultural drones.'
  },
  {
    year: '2018-2022',
    title: 'Alibaba DAMO Academy',
    description: 'Architect for robotics team, reported to Professor Tan Ping (3D vision expert). Focused on spatial intelligence and robotics technologies.'
  },
  {
    year: '2022',
    title: 'Robotic Lawn Mower Company',
    description: 'Co-founded company with investment from Mr. Lei Jun (Xiaomi) and Mr. Zeng Liqing (Tencent). Achieved successful mass production and overseas export.'
  },
  {
    year: '2024',
    title: 'Vesper AgriTech',
    description: 'Extended expertise to large-scale agriculture. Partnered with Australia-China Agricultural Association. Established product matrix including agricultural robots and lawn mowers.'
  }
]

// 核心价值
const values = [
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


</script>

<style scoped>
.about {
  font-family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 500px;
  margin-bottom: 60px;
}

.hero-image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 20px;
}

.hero-title {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  max-width: 900px;
}

.hero-subtitle {
  font-size: clamp(18px, 2vw, 24px);
  opacity: 0.9;
  max-width: 700px;
}

/* Section Common Styles */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: clamp(28px, 3vw, 36px);
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: clamp(16px, 1.5vw, 18px);
  color: #666;
}

/* Introduction Section */
.intro-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.intro-content {
  display: flex;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
}

.intro-text {
  flex: 1;
  min-width: 300px;
}

.intro-paragraph {
  font-size: 18px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
}

.intro-image {
  flex: 1;
  min-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.intro-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* Timeline Section */
.timeline-section {
  padding: 80px 0;
  background: white;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #52c41a;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 80px;
}

.timeline-year {
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 60px;
  background: #52c41a;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
}

.timeline-content {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #52c41a;
}

.timeline-title {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
}

.timeline-description {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
}

/* Team Section */
.team-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.team-grid {
  max-width: 800px;
  margin: 0 auto;
}

.team-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.team-image {
  height: 400px;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  padding: 20px;
}

.team-info {
  padding: 40px;
}

.team-name {
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 8px;
}

.team-position {
  font-size: 18px;
  color: #52c41a;
  font-weight: 600;
  margin-bottom: 20px;
}

.team-bio {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
}

.team-bio p {
  margin-bottom: 15px;
}

/* Values Section */
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

/* Statistics Section */
.stats-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #2c3e50, #1a252f);
}

.stats-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  flex-wrap: wrap;
  gap: 20px;
}

.stat-item {
  color: white;
  flex: 1;
  min-width: 200px;
  padding: 20px;
}

.stat-number {
  font-size: clamp(36px, 4vw, 48px);
  font-weight: 700;
  margin-bottom: 12px;
  color: #52c41a;
  line-height: 1.2;
}

.stat-label {
  font-size: clamp(16px, 1.5vw, 18px);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  line-height: 1.4;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .stats-grid {
    justify-content: center;
  }
  
  .stat-item {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .stats-grid {
    flex-direction: column;
    gap: 30px;
  }
  
  .stat-item {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 15px;
  }
  
  .stat-number {
    font-size: 40px;
  }
  
  .stat-label {
    font-size: 16px;
  }
}

/* Contact Section */
.contact-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.contact-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-title {
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
}

.contact-description {
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.contact-btn {
  background: linear-gradient(135deg, #52c41a, #73d13d);
  border: none;
  font-weight: 500;
  padding: 0 32px;
  height: 48px;
  font-size: 16px;
}

.secondary-btn {
  border-color: #52c41a;
  color: #52c41a;
  padding: 0 32px;
  height: 48px;
  font-size: 16px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.contact-detail {
  font-size: 16px;
  color: #666;
}

/* Footer Styles (复用HomeView样式) */
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

.footer-logo-image {
  width: 80px;
  height: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
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

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    height: 400px;
  }
  
  .hero-title {
    font-size: 28px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .intro-content {
    flex-direction: column;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    padding-left: 60px;
  }
  
  .timeline-year {
    width: 40px;
    height: 40px;
    font-size: 12px;
  }
  
  .team-image {
    height: 200px;
  }
  
  .contact-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-btn,
  .secondary-btn {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 300px;
  }
  
  .hero-title {
    font-size: 24px;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>