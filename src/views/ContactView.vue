<template>
  <div class="contact">
    <!-- 导航栏 -->
    <Header />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-image-container">
        <img 
          :src="getImageUrl('contact', 'hero')" 
          alt="Contact Vesper AgriTech"
          class="hero-img"
          @error="(e) => e.target.src = images.fallback.contact.hero"
        />
        <div class="hero-overlay">
          <h1 class="hero-title">Get In Touch</h1>
          <p class="hero-subtitle">Connect with our team for agricultural technology solutions</p>
        </div>
      </div>
    </section>

    <!-- 联系信息 -->
    <section class="contact-info-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Contact Information</h2>
          <p class="section-subtitle">Reach out to us through any of these channels</p>
        </div>
        
        <div class="contact-cards">
          <div class="contact-card">
            <div class="contact-icon phone">
              <span>📞</span>
            </div>
            <h3 class="contact-card-title">Phone</h3>
            <p class="contact-card-content">+61 408 518 918</p>
            <a-button 
              type="primary" 
              size="small" 
              class="contact-action-btn"
              @click="callPhone"
            >
              Call Now
            </a-button>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon email">
              <span>📧</span>
            </div>
            <h3 class="contact-card-title">Email</h3>
            <p class="contact-card-content">market@vesperinno.com</p>
            <a-button 
              type="primary" 
              size="small" 
              class="contact-action-btn"
              @click="sendEmail"
            >
              Send Email
            </a-button>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon whatsapp">
              <span>💬</span>
            </div>
            <h3 class="contact-card-title">WhatsApp</h3>
            <p class="contact-card-content">+61 408 518 918</p>
            <a-button 
              type="primary" 
              size="small" 
              class="contact-action-btn"
              @click="openWhatsApp"
            >
              Message on WhatsApp
            </a-button>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon location">
              <span>📍</span>
            </div>
            <h3 class="contact-card-title">Location</h3>
            <p class="contact-card-content">Australia</p>
            <p class="contact-card-subtext">Global distribution network</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系表单 -->
    <section class="contact-form-section">
      <div class="section-container">
        <div class="form-container">
          <div class="form-header">
            <h2 class="form-title">Send Us a Message</h2>
            <p class="form-subtitle">Fill out the form below and we'll get back to you as soon as possible</p>
          </div>
          
          <div class="form-content">
            <div class="form-row">
              <div class="form-group">
                <label for="name" class="form-label">Full Name *</label>
                <a-input 
                  id="name"
                  v-model:value="formData.name"
                  placeholder="Enter your full name"
                  size="large"
                />
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email Address *</label>
                <a-input 
                  id="email"
                  v-model:value="formData.email"
                  placeholder="Enter your email address"
                  size="large"
                />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="phone" class="form-label">Phone Number</label>
                <a-input 
                  id="phone"
                  v-model:value="formData.phone"
                  placeholder="Enter your phone number"
                  size="large"
                />
              </div>
              
              <div class="form-group">
                <label for="product" class="form-label">Product Interest</label>
                <a-select 
                  id="product"
                  v-model:value="formData.product"
                  placeholder="Select a product"
                  size="large"
                  style="width: 100%"
                >
                  <a-select-option value="vg100">VG-100 Intelligent Navigation System</a-select-option>
                  <a-select-option value="ar300">AR-300 Orchard Spraying Robot</a-select-option>
                  <a-select-option value="sm200">SM-200 Soil Monitoring System</a-select-option>
                  <a-select-option value="other">Other Solutions</a-select-option>
                </a-select>
              </div>
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Message *</label>
              <a-textarea 
                id="message"
                v-model:value="formData.message"
                placeholder="Tell us about your needs or questions..."
                :rows="6"
                size="large"
              />
            </div>
            
            <div class="form-actions">
              <a-button 
                type="primary" 
                size="large" 
                class="submit-btn"
                @click="submitForm"
                :loading="isSubmitting"
              >
                Send Message via WhatsApp
              </a-button>
              <p class="form-note">
                By clicking "Send Message", you'll be redirected to WhatsApp to send your inquiry directly to our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 全球经销商地图 -->
    <section class="global-map-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Our Global Presence</h2>
          <p class="section-subtitle">Vesper AgriTech dealers and partners worldwide</p>
        </div>
        
        <WorldMap 
          title="Global Distribution Network"
          subtitle="Click on any country to see dealer information"
          :dealer-locations="dealerLocations"
          :show-legend="true"
          :height="600"
        />
        
        <div class="map-description">
          <p>
            Vesper AgriTech has established a global network of dealers and partners across major agricultural markets. 
            Our distribution network ensures that farmers and agricultural businesses worldwide have access to our 
            advanced technology solutions with local support and service.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <a-layout-footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <img 
              src="/logo.webp" 
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
        <p>Copyright© {{ copyrightYear }} Shenzhen Vesper Inno Technology Co., Ltd All Rights Reserved</p>
      </div>
    </a-layout-footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { LinkedinOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import type { DealerLocation } from '../components/WorldMap.vue'

const router = useRouter()
const current = ref<string[]>(['contact'])

// 图片配置
const images = {
  contact: {
    hero: '/images/pexels-vladimirsrajber-18431208.jpg',
  },
  fallback: {
    contact: {
      hero: '/images/pexels-vladimirsrajber-18431208.jpg',
    }
  }
}

// 获取图片URL
const getImageUrl = (type: string, key: string) => {
  try {
    if (type === 'contact' && key in images.contact) {
      return images.contact[key as keyof typeof images.contact]
    }
  } catch (error) {
    console.error('Error getting image URL:', error)
  }
  
  return images.fallback.contact.hero
}

// 错误处理
const handleLogoError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.warn('Header logo WebP failed to load, falling back to PNG')
  if (img.src.includes('.webp')) {
    img.src = '/logo.png'
  }
}

const handleFooterLogoError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.warn('Footer logo WebP failed to load, falling back to PNG')
  if (img.src.includes('.webp')) {
    img.src = '/logo.png'
  }
}

// 版权年份
const copyrightYear = (() => {
  const startYear = 2024
  const currentYear = new Date().getFullYear()
  return currentYear > startYear ? `${startYear}-${currentYear}` : currentYear.toString()
})()

// WhatsApp联系
const openWhatsApp = (customMessage?: string) => {
  const phoneNumber = '8613755006969'
  const message = customMessage || 'Hello! I would like to get more information about Vesper AgriTech products.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

// 电话联系
const callPhone = () => {
  window.open('tel:+8613755006969', '_blank')
}

// 邮件联系
const sendEmail = () => {
  window.open('mailto:market@vesperinno.com', '_blank')
}

// 表单数据
interface FormData {
  name: string
  email: string
  phone: string
  product: string
  message: string
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  product: '',
  message: ''
})

const isSubmitting = ref(false)

// 提交表单
const submitForm = () => {
  // 简单验证
  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    alert('Please fill in all required fields (Name, Email, Message)')
    return
  }
  
  isSubmitting.value = true
  
  // 构建WhatsApp消息
  let whatsappMessage = `New Contact Form Submission:\n\n`
  whatsappMessage += `Name: ${formData.name}\n`
  whatsappMessage += `Email: ${formData.email}\n`
  if (formData.phone) whatsappMessage += `Phone: ${formData.phone}\n`
  if (formData.product) {
    const productNames: Record<string, string> = {
      vg100: 'VG-100 Intelligent Navigation System',
      ar300: 'AR-300 Orchard Spraying Robot',
      sm200: 'SM-200 Soil Monitoring System',
      other: 'Other Solutions'
    }
    whatsappMessage += `Product Interest: ${productNames[formData.product] || formData.product}\n`
  }
  whatsappMessage += `\nMessage:\n${formData.message}`
  
  // 打开WhatsApp
  openWhatsApp(whatsappMessage)
  
  // 重置表单
  setTimeout(() => {
    formData.name = ''
    formData.email = ''
    formData.phone = ''
    formData.product = ''
    formData.message = ''
    isSubmitting.value = false
  }, 1000)
}

// 经销商数据（可以自定义）
const dealerLocations: DealerLocation[] = [
  // 大洋洲
  { countryCode: 'AU', countryName: 'Australia', city: 'Sydney', dealerCount: 5, description: 'Headquarters and main distribution center' },
  { countryCode: 'NZ', countryName: 'New Zealand', city: 'Auckland', dealerCount: 2, description: 'Regional partner for Oceania' },
  
  // 北美洲
  { countryCode: 'US', countryName: 'United States', city: 'California', dealerCount: 8, description: 'Major market with multiple distributors' },
  { countryCode: 'CA', countryName: 'Canada', city: 'Toronto', dealerCount: 3, description: 'Canadian agricultural technology partner' },
  
  // 欧洲
  { countryCode: 'GB', countryName: 'United Kingdom', city: 'London', dealerCount: 4, description: 'European headquarters' },
  { countryCode: 'DE', countryName: 'Germany', city: 'Berlin', dealerCount: 3, description: 'Central European distribution' },
  { countryCode: 'FR', countryName: 'France', city: 'Paris', dealerCount: 2, description: 'French agricultural solutions' },
  { countryCode: 'ES', countryName: 'Spain', city: 'Madrid', dealerCount: 2, description: 'Spanish market partner' },
  { countryCode: 'IT', countryName: 'Italy', city: 'Rome', dealerCount: 2, description: 'Italian agricultural technology' },
  
  // 亚洲
  { countryCode: 'CN', countryName: 'China', city: 'Shanghai', dealerCount: 10, description: 'Manufacturing and R&D center' },
  { countryCode: 'JP', countryName: 'Japan', city: 'Tokyo', dealerCount: 3, description: 'Japanese technology partner' },
  { countryCode: 'KR', countryName: 'South Korea', city: 'Seoul', dealerCount: 2, description: 'Korean agricultural innovation' },
  { countryCode: 'IN', countryName: 'India', city: 'Mumbai', dealerCount: 4, description: 'Indian market expansion' },
  { countryCode: 'ID', countryName: 'Indonesia', city: 'Jakarta', dealerCount: 2, description: 'Southeast Asian partner' },
  { countryCode: 'TH', countryName: 'Thailand', city: 'Bangkok', dealerCount: 2, description: 'Thai agricultural solutions' },
  
  // 南美洲
  { countryCode: 'BR', countryName: 'Brazil', city: 'São Paulo', dealerCount: 3, description: 'South American agricultural hub' },
  { countryCode: 'AR', countryName: 'Argentina', city: 'Buenos Aires', dealerCount: 2, description: 'Argentinian farming solutions' },
  { countryCode: 'CL', countryName: 'Chile', city: 'Santiago', dealerCount: 2, description: 'Chilean wine region partner' },
  
  // 非洲
  { countryCode: 'ZA', countryName: 'South Africa', city: 'Johannesburg', dealerCount: 2, description: 'African market entry' },
  { countryCode: 'KE', countryName: 'Kenya', city: 'Nairobi', dealerCount: 1, description: 'East African agricultural technology' },
]
</script>

<style scoped>
.contact {
  font-family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 400px;
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
  margin-bottom: 16px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(18px, 2vw, 24px);
  opacity: 0.9;
  max-width: 600px;
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

/* Contact Info Section */
.contact-info-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.contact-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 20px;
}

.contact-icon.phone {
  background: linear-gradient(135deg, #91d5ff, #69c0ff);
}

.contact-icon.email {
  background: linear-gradient(135deg, #ffd666, #ffc53d);
}

.contact-icon.whatsapp {
  background: linear-gradient(135deg, #b7eb8f, #95de64);
}

.contact-icon.location {
  background: linear-gradient(135deg, #d3adf7, #b37feb);
}

.contact-card-title {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
}

.contact-card-content {
  font-size: 18px;
  color: #444;
  margin-bottom: 20px;
  font-weight: 500;
}

.contact-card-subtext {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}

.contact-action-btn {
  background: linear-gradient(135deg, #52c41a, #73d13d);
  border: none;
  font-weight: 500;
  margin-top: auto;
}

/* Contact Form Section */
.contact-form-section {
  padding: 80px 0;
  background: white;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
  background: #f8f9fa;
  border-radius: 16px;
  padding: 50px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 40px;
}

.form-title {
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
}

.form-subtitle {
  font-size: 16px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #444;
}

.form-actions {
  text-align: center;
  margin-top: 20px;
}

.submit-btn {
  background: linear-gradient(135deg, #52c41a, #73d13d);
  border: none;
  font-weight: 500;
  padding: 0 40px;
  height: 48px;
  font-size: 16px;
  min-width: 250px;
}

.form-note {
  font-size: 14px;
  color: #666;
  margin-top: 12px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Global Map Section */
.global-map-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.map-description {
  max-width: 800px;
  margin: 40px auto 0;
  text-align: center;
  font-size: 16px;
  line-height: 1.6;
  color: #666;
}

/* Footer Styles (复用现有) */
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
    height: 300px;
  }
  
  .hero-title {
    font-size: 28px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .form-container {
    padding: 30px 20px;
  }
  
  .contact-cards {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 250px;
  }
  
  .hero-title {
    font-size: 24px;
  }
  
  .section-title {
    font-size: 20px;
  }
  
  .submit-btn {
    min-width: 100%;
  }
}
</style>