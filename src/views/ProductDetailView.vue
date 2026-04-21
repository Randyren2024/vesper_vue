<template>
  <div class="product-detail-page" v-if="product">
    <Header />
    
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item><a @click="$router.push('/')">Home</a></a-breadcrumb-item>
        <a-breadcrumb-item><a @click="$router.push('/products-solutions')">Products & Solutions</a></a-breadcrumb-item>
        <a-breadcrumb-item><a @click="$router.push(`/products-solutions?category=${product.category}`)">{{ product.categoryName }}</a></a-breadcrumb-item>
        <a-breadcrumb-item>{{ product.code }}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <!-- Product Hero -->
    <section class="product-hero">
      <div class="product-hero-container">
        <div class="product-image-section" v-motion-slide-visible-left :delay="100">
          <div class="product-main-image">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="product-badges">
            <a-tag v-if="product.inStock" color="green">In Stock</a-tag>
            <a-tag v-if="product.isBestSeller" color="gold">Best Seller</a-tag>
            <a-tag v-if="product.isNew" color="blue">New Release</a-tag>
          </div>
        </div>
        
        <div class="product-info-section" v-motion-slide-visible-right :delay="200">
           <div class="product-category-link">
            <a @click="$router.push(`/products-solutions?category=${product.category}`)">{{ product.categoryName }}</a>
          </div>
          <h1 class="product-title">{{ product.code }} {{ product.name }}</h1>
          <p class="product-description">{{ product.description }}</p>
          
          <div class="product-actions">
            <a-button type="primary" size="large" class="demo-btn" @click="openWhatsAppDemo">
              <CalendarOutlined /> Request a Demo
            </a-button>
            <a-button size="large" class="quote-btn" @click="openWhatsApp">
              <MessageOutlined /> Get a Quote
            </a-button>
            <a-button size="large" @click="scrollToSpecs">
              <TableOutlined /> View Specifications
            </a-button>
          </div>
          
          <div class="product-features-preview">
            <h3>Key Features:</h3>
            <ul>
              <li v-for="(feature, index) in product.features.slice(0, 4)" :key="index">
                <CheckCircleOutlined /> {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Applications / Use Cases -->
    <section v-if="product.applications && product.applications.length" class="applications-section" v-motion-fade-visible :delay="300">
      <div class="section-container">
        <h2 class="section-title" v-motion-slide-visible-bottom :delay="300">Applications</h2>
        <div class="applications-grid">
          <div 
            v-for="(app, index) in product.applications" 
            :key="app" 
            class="application-item"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: index * 100 + 400 } }"
          >
            <AppstoreOutlined class="app-icon" />
            <span>{{ app }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section" v-motion-fade-visible :delay="400">
      <div class="section-container">
        <h2 class="section-title" v-motion-slide-visible-bottom :delay="400">Product Features</h2>
        <div class="features-grid">
          <div 
            v-for="(feature, index) in product.features" 
            :key="index" 
            class="feature-item"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: index * 100 + 500 } }"
          >
            <div class="feature-icon"><CheckCircleOutlined /></div>
            <div class="feature-text">{{ feature }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Grouped Specifications -->
    <section class="specs-section" id="specifications" v-motion-fade-visible :delay="500">
      <div class="section-container">
        <h2 class="section-title" v-motion-slide-visible-bottom :delay="500">Technical Specifications</h2>
        
        <!-- If product has grouped specs -->
        <div v-if="product.specsGroups && product.specsGroups.length" class="specs-groups">
          <div v-for="group in product.specsGroups" :key="group.title" class="spec-group">
            <h3 class="spec-group-title">{{ group.title }}</h3>
            <a-table 
              :dataSource="Object.entries(group.specs).map(([key, value]) => ({ key, specification: key, value }))" 
              :columns="specsColumns" 
              :pagination="false"
              bordered
              size="small"
              class="specs-table"
            />
          </div>
        </div>
        
        <!-- Fallback to simple specs -->
        <a-table 
          v-else
          :dataSource="specsData" 
          :columns="specsColumns" 
          :pagination="false"
          bordered
          class="specs-table"
        />
      </div>
    </section>

    <!-- FAQs -->
    <section v-if="product.faqs && product.faqs.length" class="faq-section">
      <div class="section-container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <a-collapse v-model:activeKey="activeFaqKeys" class="faq-collapse">
          <a-collapse-panel v-for="(faq, index) in product.faqs" :key="index" :header="faq.question">
            <p>{{ faq.answer }}</p>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </section>

    <!-- Related Products -->
    <section class="related-section">
      <div class="section-container">
        <h2 class="section-title">Related Products</h2>
        <div class="related-grid">
          <a-card 
            v-for="related in relatedProducts" 
            :key="related.id" 
            class="related-card" 
            hoverable
            @click="$router.push(`/product/${related.id}`)"
          >
            <template #cover>
              <div class="related-cover">
                <img :src="related.image" :alt="related.name" />
              </div>
            </template>
            <a-card-meta :title="related.code + ' ' + related.name">
              <template #description>
                {{ related.description.substring(0, 60) }}...
              </template>
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>Interested in {{ product.code }} {{ product.name }}?</h2>
        <p>Contact us today for more information or request a demo</p>
        <div class="cta-buttons">
          <a-button type="primary" size="large" @click="openWhatsApp">
            <MessageOutlined /> Get A Quote
          </a-button>
          <a-button size="large" @click="$router.push('/contact_us')">Contact Us</a-button>
        </div>
      </div>
    </section>

    <Footer />
  </div>

  <!-- Not Found -->
  <div v-else class="not-found">
    <a-result status="404" title="Product Not Found" sub-title="Sorry, the product you are looking for does not exist.">
      <template #extra>
        <a-button type="primary" @click="$router.push('/products-solutions')">Back to Products & Solutions</a-button>
      </template>
    </a-result>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { CheckCircleOutlined, MessageOutlined, TableOutlined, AppstoreOutlined, LinkedinOutlined, CalendarOutlined } from '@ant-design/icons-vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { products, getProductById, getProductsByCategory, type Product } from '../data/products'

const route = useRoute()
const current = ref<string[]>([])
const logoError = ref(false)
const footerLogoError = ref(false)
const currentYear = new Date().getFullYear()
const activeFaqKeys = ref<number[]>([0])

const product = computed(() => {
  const productId = route.params.id as string
  return getProductById(productId)
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  const categoryProducts = getProductsByCategory(product.value.category)
  return categoryProducts.filter(p => p.id !== product.value?.id).slice(0, 4)
})

const specsData = computed(() => {
  if (!product.value) return []
  return Object.entries(product.value.specifications).map(([key, value]) => ({
    key,
    specification: key,
    value
  }))
})

const specsColumns = [
  { title: 'Specification', dataIndex: 'specification', key: 'specification', width: '40%' },
  { title: 'Value', dataIndex: 'value', key: 'value' }
]

const handleLogoError = (event: Event) => { logoError.value = true }
const handleFooterLogoError = (event: Event) => { footerLogoError.value = true }

const openWhatsAppDemo = () => {
  if (!product.value) return
  const message = `Hi, I would like to request a demo for ${product.value.code} ${product.value.name}. What are the available demo options?`
  const whatsappUrl = `https://wa.me/8613755006969?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

const openWhatsApp = () => {
  if (!product.value) return
  const message = `Hi, I'm interested in ${product.value.code} ${product.value.name}. Could you please provide more information?`
  const whatsappUrl = `https://wa.me/8613755006969?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

const scrollToSpecs = () => {
  const element = document.getElementById('specifications')
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.product-detail-page { font-family: 'Noto Sans', 'Noto Sans SC', 'Inter', sans-serif; background: #f8f9fa; line-height: 1.7; }

.breadcrumb { max-width: 1200px; margin: 0 auto; padding: 16px 20px; }

.product-hero { background: white; padding: 40px 20px; }
.product-hero-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.product-image-section { position: relative; }
.product-main-image { width: 100%; aspect-ratio: 4/3; border-radius: 16px; overflow: hidden; background: #f0f0f0; }
.product-main-image img { width: 100%; height: 100%; object-fit: cover; }
.product-badges { position: absolute; top: 16px; left: 16px; display: flex; gap: 8px; }
.product-info-section { padding: 20px 0; }
.product-category-link { margin-bottom: 12px; }
.product-category-link a { color: #52c41a; font-weight: 500; }
.product-title { font-size: clamp(28px, 3vw, 36px); font-weight: 700; background: var(--gradient-primary); -webkit-background-clip: text; background-clip: text; color: transparent; margin-bottom: 16px; }
.product-description { font-size: 18px; color: #666; line-height: 1.6; margin-bottom: 24px; }
.product-actions { display: flex; gap: 16px; margin-bottom: 32px; }
.quote-btn { background: linear-gradient(135deg, #52c41a, #73d13d) !important; border: none !important; }
.product-features-preview h3 { font-size: 16px; font-weight: 600; margin-bottom: 12px; color: #2c3e50; }
.product-features-preview ul { list-style: none; padding: 0; }
.product-features-preview li { padding: 8px 0; color: #666; display: flex; align-items: center; gap: 8px; }

.section-container { max-width: 1200px; margin: 0 auto; padding: 60px 20px; }
.section-title { font-size: 28px; font-weight: 700; background: var(--gradient-secondary); -webkit-background-clip: text; background-clip: text; color: transparent; text-align: center; margin-bottom: 40px; }

/* Applications */
.applications-section { background: white; }
.applications-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
.application-item { display: flex; align-items: center; gap: 12px; padding: 20px; background: #f8f9fa; border-radius: 12px; }
.app-icon { font-size: 24px; color: #52c41a; }

/* Features */
.features-section { background: white; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.feature-item { display: flex; align-items: flex-start; gap: 16px; padding: 20px; background: #f8f9fa; border-radius: 12px; }
.feature-icon { color: #52c41a; font-size: 24px; flex-shrink: 0; }
.feature-text { color: #2c3e50; line-height: 1.5; }

/* Specifications */
.specs-section { background: #f8f9fa; }
.specs-groups { display: flex; flex-direction: column; gap: 32px; }
.spec-group { background: white; padding: 24px; border-radius: 12px; }
.spec-group-title { font-size: 18px; font-weight: 600; color: #2c3e50; margin-bottom: 16px; }
.specs-table { border-radius: 12px; overflow: hidden; }

/* FAQs */
.faq-section { background: white; }
.faq-collapse { background: transparent; }
.faq-collapse :deep(.ant-collapse-header) { font-weight: 600; }
.faq-collapse :deep(.ant-collapse-content-box) { color: #666; line-height: 1.6; }

/* Related */
.related-section { background: white; }
.related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; }
.related-card { border-radius: 12px; overflow: hidden; cursor: pointer; transition: transform 0.3s, box-shadow 0.3s; }
.related-card:hover { transform: translateY(-8px); box-shadow: 0 12px 40px rgba(0,0,0,0.15); }
.related-cover { height: 180px; overflow: hidden; }
.related-cover img { width: 100%; height: 100%; object-fit: cover; }

/* CTA */
.cta-section { background: linear-gradient(135deg, #2e7d32, #4caf50); padding: 80px 20px; text-align: center; color: white; }
.cta-container h2 { font-size: 32px; font-weight: 700; margin-bottom: 16px; }
.cta-container p { font-size: 18px; opacity: 0.9; margin-bottom: 32px; }
.cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
.cta-buttons .ant-btn { background: white; color: #2e7d32; border: none; padding: 8px 32px; height: auto; font-size: 16px; }
.cta-buttons .ant-btn-primary { background: #2e7d32 !important; color: white !important; }

.product-actions { display: flex; gap: 12px; flex-wrap: wrap; margin: 24px 0; }
.product-actions .ant-btn { padding: 8px 24px; height: auto; font-size: 15px; }
.demo-btn { background: #2196f3 !important; border-color: #2196f3 !important; }
.quote-btn { border-color: #2e7d32 !important; color: #2e7d32 !important; }
.quote-btn:hover { background: #2e7d32 !important; color: white !important; }

/* Footer */
.footer { background: #1a252f; color: white; padding: 60px 20px 24px; }
.footer-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto; }
.footer-section { display: flex; flex-direction: column; gap: 16px; }
.footer-logo-image { width: 100px; }
.footer-logo-fallback { display: flex; flex-direction: column; background: linear-gradient(135deg, #2e7d32, #4caf50); padding: 8px 12px; border-radius: 8px; }
.footer-logo-text { font-size: 18px; font-weight: 700; }
.footer-description { color: rgba(255,255,255,0.7); line-height: 1.6; }
.footer-title { font-size: 18px; font-weight: 600; color: white; }
.footer-link { color: rgba(255,255,255,0.7); text-decoration: none; cursor: pointer; }
.footer-link:hover { color: #52c41a; }
.footer-contact { color: rgba(255,255,255,0.7); margin: 4px 0; }
.footer-bottom { text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); }

.not-found { padding: 100px 20px; text-align: center; }

@media (max-width: 992px) {
  .product-hero-container { grid-template-columns: 1fr; gap: 40px; }
  .product-actions { flex-direction: column; }
}
</style>