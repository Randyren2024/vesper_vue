// Vesper AgriTech Products Data
// Structured per AllyNav categories

export interface Product {
  id: string
  code: string
  name: string
  nameCn: string
  description: string
  descriptionCn: string
  category: string
  categoryName: string
  features: string[]
  applications?: string[]
  specsGroups?: { title: string; specs: Record<string, string> }[]
  specifications: Record<string, string>
  image: string
  gallery?: string[]
  faqs?: { question: string; answer: string }[]
  inStock: boolean
  isBestSeller: boolean
  isNew: boolean
}

export const categories = [
  {
    id: 'precision-agriculture',
    name: 'Precision Agriculture',
    nameCn: '精准农业',
    description: 'Advanced auto-steering systems including AF718, AF305, and ISOBUS terminal',
    icon: 'precision-agriculture'
  },
  {
    id: 'precision-spraying',
    name: 'Precision Agriculture Solutions',
    nameCn: '精准农业解决方案',
    description: 'Precision spraying solutions including VS100 Spray Control System',
    icon: 'precision-spraying'
  },
  {
    id: 'land-leveling',
    name: 'Land Leveling System',
    nameCn: '土地整平系统',
    description: 'GPS-controlled land leveling systems for sustainable agriculture',
    icon: 'land-leveling'
  },
  {
    id: 'agricultural-robotics',
    name: 'Agricultural Robots',
    nameCn: '农业机器人',
    description: 'Autonomous robots for spraying, mowing, and farm operations',
    icon: 'agricultural-robotics'
  },
  {
    id: 'machine-control',
    name: 'Machine Control',
    nameCn: '机械控制',
    description: 'Intelligent guidance systems for construction and mining equipment',
    icon: 'machine-control'
  }
]

export const products: Product[] = [
  // =====================
  // Precision Agriculture
  // =====================
  {
    id: 'af718',
    code: 'AF718',
    name: 'Autosteering System',
    nameCn: '自动转向系统',
    description: 'AF718 Frontier — Pioneering the Future of Smart Farming. High-performance autosteering system with advanced computing platform for enhanced accuracy and efficiency.',
    descriptionCn: 'AF718前沿 — 开创智慧农业新未来',
    category: 'precision-agriculture',
    categoryName: 'Precision Agriculture',
    features: [
      'GNSS-based auto-steering',
      'Centimeter-level precision (±2.5 cm)',
      'Support for multiple vehicle types',
      'Real-time path tracking',
      'Obstacle avoidance',
      'Multi-machine collaboration'
    ],
    specsGroups: [
      { title: 'Positioning', specs: { 'Positioning Accuracy': '±2.5 cm', 'Working Speed': '0-50 km/h', 'Control Angle': '±40°' }},
      { title: 'Display', specs: { 'Screen': '12.1 inches', 'Resolution': '1280x800', 'Brightness': '750 nits' }},
      { title: 'Electrical', specs: { 'Power': '12V DC', 'Operating Temp': '-20°C to 70°C' }}
    ],
    specifications: {
      'Positioning Accuracy': '±2.5 cm',
      'Working Speed': '0-50 km/h',
      'Control Angle': '±40°',
      'Display': '12.1 inch touchscreen',
      'Power': '12V DC',
      'Operating Temp': '-20°C to 70°C'
    },
    faqs: [
      { question: 'What vehicles is AF718 compatible with?', answer: 'AF718 is compatible with most agricultural tractors and heavy machinery including John Deere, Case IH, New Holland, and other major brands.' },
      { question: 'Does it require internet connectivity?', answer: 'No, AF718 uses GNSS satellite positioning and does not require internet for basic operation.' }
    ],
    image: '/images/products/af718.webp',
    inStock: true,
    isBestSeller: true,
    isNew: true
  },
  {
    id: 'af305',
    code: 'AF305',
    name: 'Automated Steering System',
    nameCn: '自动转向系统',
    description: 'An Advanced Steering Solution for Precision Agriculture. High-torque motor control with self-developed algorithm for ±2.5 cm accuracy.',
    descriptionCn: '精准农业先进转向解决方案',
    category: 'precision-agriculture',
    categoryName: 'Precision Agriculture',
    features: [
      'Advanced GNSS positioning',
      'Auto-steering control',
      'Easy installation (20 min setup)',
      'ISOBUS compatible',
      'Terrain compensation',
      '±2.5 cm accuracy'
    ],
    specsGroups: [
      { title: 'Performance', specs: { 'Accuracy': '±2.5 cm', 'Response Time': '<20 ms', 'Min Speed': '0.1 km/h' }},
      { title: 'Display', specs: { 'Screen': '10.1 inches', 'Resolution': '1280x800', 'RAM/ROM': '6+64GB' }},
      { title: 'Electrical', specs: { 'Voltage': '12V/24V DC', 'Operating Temp': '-20°C to 70°C' }}
    ],
    specifications: {
      'Accuracy': '±2.5 cm',
      'Response Time': '<20 ms',
      'Min Speed': '0.1 km/h',
      'Display': '10.1 inch',
      'Voltage': '12V/24V DC',
      'Operating Temp': '-20°C to 70°C'
    },
    image: '/images/products/af305.webp',
    inStock: true,
    isBestSeller: true,
    isNew: false
  },
  {
    id: 'isobus',
    code: 'ISOBUS',
    name: 'Terminal',
    nameCn: '终端',
    description: 'AEF-Certified ISOBUS Terminal for Reliable Precision Farming. Multi-brand compatibility for seamless integration.',
    descriptionCn: 'AEF认证的ISOBUS终端确保精准农业可靠性',
    category: 'precision-agriculture',
    categoryName: 'Precision Agriculture',
    features: [
      'AEF certified',
      'ISOBUS compliant',
      'Multi-brand compatibility',
      'UT and TC support'
    ],
    specifications: {
      'Certification': 'AEF',
      'Display': '12.1 inch',
      'Resolution': '1280x800',
      'Protocol': 'ISOBUS'
    },
image: '/images/products/isobus-terminal.webp',
    inStock: true,
    isBestSeller: false,
    isNew: false
  },
  {
    id: 'vs100',
    code: 'VS100',
    name: 'Spray Control System',
    nameCn: '喷洒控制系统',
    description: 'A Sprayer for Efficient and Sustainable Agriculture. Precision spraying with 98% accuracy and section control.',
    descriptionCn: '高效可持续农业喷洒系统',
    category: 'precision-spraying',
    categoryName: 'Precision Agriculture Solutions',
    features: [
      'Precision spraying',
      'Section control (up to 16 sections)',
      'Flow rate monitoring',
      '98% accuracy',
      'Real-time monitoring'
    ],
    specsGroups: [
      { title: 'Spray Performance', specs: { 'Spray Accuracy': '98%', 'Section Control': 'Up to 16 sections' }},
      { title: 'Display', specs: { 'Display': '10.1 inch', 'IP Rating': 'IP67' }}
    ],
    specifications: {
      'Spray Accuracy': '98%',
      'Section Control': 'Up to 16 sections',
      'Display': '10.1 inch',
      'IP Rating': 'IP67'
    },
    image: '/images/products/vs100.webp',
    inStock: true,
    isBestSeller: true,
    isNew: false
  },

  // =====================
  // Land Leveling System
  // =====================
  {
    id: 'w20',
    code: 'W20',
    name: 'Land Leveling System',
    nameCn: '土地整平系统',
    description: 'A Land Leveling System for Sustainable Agricultural Management. GPS-controlled grading for precision land preparation.',
    descriptionCn: '可持续农业管理的土地整平系统',
    category: 'land-leveling',
    categoryName: 'Land Leveling System',
    features: [
      'GPS control',
      'Dual antenna',
      'Laser grading option',
      'Precision ground control'
    ],
    specifications: {
      'Accuracy': '±2 cm',
      'Control': 'GNSS/Laser',
      'Display': '7 inch',
      'Power': '12V DC'
    },
    image: '/images/products/group-1609-1.webp',
    inStock: true,
    isBestSeller: false,
    isNew: false
  },

  // =====================
  // Agricultural Robots
  // =====================
  {
    id: 'aries300n',
    code: 'Aries300N',
    name: 'Orchard Spraying Robot',
    nameCn: '果园喷洒机器人',
    description: 'An intelligent spraying solution suitable for standardized agriculture, forestry, orchard management. Autonomous driving with hybrid power.',
    descriptionCn: '适合标准化农业、林业、果园管理的智能喷洒方案',
    category: 'agricultural-robotics',
    categoryName: 'Agricultural Robots',
    features: [
      'Autonomous navigation',
      'Hybrid power (Gasoline-Electric)',
      'Air-assisted spraying',
      'Night mode operation',
      '3-10m spray width'
    ],
    specsGroups: [
      { title: 'Dimensions & Capacity', specs: { 'Dimensions': '2200x1200x1000 mm', 'Weight': '450 kg', 'Tank Capacity': '300L' }},
      { title: 'Performance', specs: { 'Spray Width': '3-10 m', 'Runtime': '8 hours', 'Charging Time': '3 hours' }}
    ],
    specifications: {
      'Dimensions': '2200x1200x1000 mm',
      'Weight': '450 kg',
      'Tank Capacity': '300L',
      'Spray Width': '3-10 m',
      'Power': 'Hybrid (Gasoline-Electric)'
    },
    image: '/images/products/300n.webp',
    inStock: true,
    isBestSeller: true,
    isNew: false
  },
  {
    id: 'taurus80e',
    code: 'Taurus80E',
    name: 'Smart Lawn Mowing Robot',
    nameCn: '智能割草机器人',
    description: 'Autonomous Electric Mowing Robot for Professional Operations. 24/7 working capability with slope handling.',
    descriptionCn: '专业作业 autonomous电动割草机器人',
    category: 'agricultural-robotics',
    categoryName: 'Agricultural Robots',
    features: [
      'Autonomous navigation',
      'Electric powered (48V Lithium)',
      'Low noise operation',
      '24/7 working',
      'Slope capability'
    ],
    specsGroups: [
      { title: 'Performance', specs: { 'Cutting Width': '800 mm', 'Speed': '0-6 km/h', 'Runtime': '8 hours' }},
      { title: 'Battery', specs: { 'Power': '48V Lithium', 'Charging Time': '3 hours', 'Runtime': '8 hours' }}
    ],
    specifications: {
      'Power': '48V Lithium',
      'Cutting Width': '800 mm',
      'Speed': '0-6 km/h',
      'Runtime': '8 hours',
      'Charging Time': '3 hours'
    },
    image: '/images/products/80e-1.webp',
    inStock: true,
    isBestSeller: true,
    isNew: false
  },

  // =====================
  // Machine Control
  // =====================
  {
    id: 'egs101',
    code: 'EGS101',
    name: 'Intelligent Excavator Guidance System',
    nameCn: '智能挖掘机引导系统',
    description: 'Intelligent Grade Control System for Excavators and Dozers. Precision depth and slope control for construction.',
    descriptionCn: '挖掘机和推土机智能坡度控制系统',
    category: 'machine-control',
    categoryName: 'Machine Control',
    features: [
      'Grade control',
      'Depth display',
      'Slope matching',
      '2D/3D control',
      'GNSS + Laser sensors'
    ],
    specifications: {
      'Accuracy': '±10 mm',
      'Display': '7 inch',
      'Sensors': 'GNSS + Laser',
      'Power': '12V/24V DC'
    },
    image: '/images/products/egs101.webp',
    inStock: true,
    isBestSeller: false,
    isNew: false
  }
]

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.category === categoryId)
}

export function getProductById(productId: string): Product | undefined {
  return products.find(p => p.id === productId)
}

export function getBestSellers(): Product[] {
  return products.filter(p => p.isBestSeller)
}

export function getNewProducts(): Product[] {
  return products.filter(p => p.isNew)
}