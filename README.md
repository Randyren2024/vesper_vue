# Vesper AgriTech - Agricultural Technology Website

MVP website for agricultural technology products built with Vue 3 + TypeScript + Ant Design Vue.

## Tech Stack

- **Vue 3** - Frontend framework
- **TypeScript** - Type safety
- **Ant Design Vue** - UI component library
- **Vite** - Build tool
- **Roboto font** - Primary font

## Features

1. **Modern Design** - Professional agricultural technology website design
2. **Vesper Brand Style** - Custom green theme color scheme
3. **Responsive Layout** - Adapts to various screen sizes
4. **Component-based Development** - Reusable component structure
5. **TypeScript Support** - Complete type definitions

## Vesper Brand Colors

- Primary: `#2e7d32` (Dark Green)
- Secondary: `#4caf50` (Light Green)
- Accent: `#2196f3` (Blue)
- Text: `#2c3e50` (Dark Gray)

## Project Structure

```
vesper_vue/
├── src/
│   ├── components/     # Reusable components
│   │   ├── ProductCard.vue
│   │   └── SolutionCard.vue
│   ├── views/         # Page components
│   │   └── HomeView.vue
│   ├── router/        # Routing configuration
│   │   └── index.ts
│   ├── assets/        # Static assets
│   │   └── global.css
│   ├── App.vue        # Root component
│   └── main.ts        # Application entry
├── public/            # Public resources
├── index.html         # HTML template
├── package.json       # Dependency configuration
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

## Quick Start

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Visit http://localhost:3001

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Main Features

### 1. Navigation Bar
- Vesper brand identity
- Responsive menu
- Request demo button

### 2. Hero Section
- Brand slogan
- Primary call-to-action buttons
- Visual showcase area

### 3. Solutions Showcase
- Precision Agriculture System
- Agricultural Robots
- IoT Monitoring
- Data Analytics Platform

### 4. Products Display
- VG-100 Intelligent Navigation System
- AR-300 Orchard Spraying Robot
- SM-200 Soil Monitoring System

### 5. Statistics
- Partner farms count
- Efficiency improvement data
- Countries served
- Customer satisfaction rate

### 6. Footer
- Company information
- Solution links
- Contact details

## Custom Theme

The project uses Ant Design Vue's theme system. You can modify the theme configuration in `src/App.vue`:

```typescript
const themeConfig = computed(() => ({
  token: {
    colorPrimary: '#2e7d32', // Primary color
    colorSuccess: '#4caf50', // Success color
    // ... other configurations
  },
  components: {
    Button: {
      borderRadius: 6,
    },
    // ... other component configurations
  },
}))
```

## Responsive Design

- **Desktop**: Full layout, multi-column display
- **Tablet**: Adaptive layout
- **Mobile**: Single-column layout, optimized for touch experience

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT