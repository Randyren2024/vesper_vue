<template>
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
        <h3 class="footer-title">Quick Links</h3>
        <a @click="$router.push('/products-solutions')" class="footer-link">Products & Solutions</a>
        <a @click="$router.push('/about_us')" class="footer-link">About Us</a>
        <a @click="$router.push('/contact')" class="footer-link">Contact</a>
        <a @click="$router.push('/support')" class="footer-link">Support</a>
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
        <a href="https://www.linkedin.com/in/alan-gan-vesperinno/" target="_blank" class="footer-link">
          <LinkedinOutlined /> LinkedIn
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright© {{ copyrightYear }} Shenzhen Vesper Inno Technology Co., Ltd All Rights Reserved</p>
    </div>
  </a-layout-footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { LinkedinOutlined } from '@ant-design/icons-vue'

const router = useRouter()

const copyrightYear = computed(() => {
  const year = new Date().getFullYear()
  return year
})

const logoError = ref(false)

const handleFooterLogoError = (event: Event) => {
  const img = event.target as HTMLImageElement
  if (img.src.includes('.webp')) {
    img.src = '/logo.png'
  }
}
</script>

<style scoped>
.footer {
  background: #1a1a2e;
  color: white;
  padding: 60px clamp(16px, 3vw, 40px) 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: clamp(24px, 4vw, 40px);
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  margin-bottom: 8px;
}

.footer-logo-image {
  width: 140px;
  height: auto;
  object-fit: contain;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.6;
}

.footer-title {
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
  display: block;
  cursor: pointer;
}

.footer-link:hover {
  color: #52c41a;
}

.footer-contact {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin: 0;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  padding-top: 24px;
  text-align: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  margin: 0;
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 16px 24px;
  }
  
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-section:first-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 480px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>