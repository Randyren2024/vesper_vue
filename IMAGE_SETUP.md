# 图片设置指南

## 当前图片使用情况

网站目前使用Unsplash的免费图片。你需要用本地图片替换这些图片。

## 需要替换的图片位置

### 1. 轮播图图片 (3张)
- 位置: Hero Section 轮播图
- 当前URL: Unsplash农业科技图片
- 建议尺寸: 1200x500px 或更大

### 2. 解决方案卡片图片 (4张)
- 位置: Solutions Section
- 当前URL: Unsplash相关图片
- 建议尺寸: 800x200px

### 3. 产品卡片图片 (3张)
- 位置: Products Section
- 当前URL: Unsplash产品图片
- 建议尺寸: 800x200px

## 如何替换图片

### 步骤1: 准备图片
1. 将你的图片放入 `public/images/` 目录
2. 建议命名:
   - `carousel-1.jpg` (轮播图第1张)
   - `carousel-2.jpg` (轮播图第2张)
   - `carousel-3.jpg` (轮播图第3张)
   - `solution-precision.jpg` (精准农业)
   - `solution-robotics.jpg` (农业机器人)
   - `solution-iot.jpg` (物联网监测)
   - `solution-data.jpg` (数据分析)
   - `product-vg100.jpg` (VG-100产品)
   - `product-ar300.jpg` (AR-300产品)
   - `product-sm200.jpg` (SM-200产品)

### 步骤2: 更新代码
修改 `src/views/HomeView.vue` 中的图片URL:

#### 轮播图部分:
```vue
<!-- 第1张轮播图 -->
<img 
  src="/images/carousel-1.jpg" 
  alt="VG-100 Navigation System"
  class="slide-img"
/>

<!-- 第2张轮播图 -->
<img 
  src="/images/carousel-2.jpg" 
  alt="AR-300 Spraying Robot"
  class="slide-img"
/>

<!-- 第3张轮播图 -->
<img 
  src="/images/carousel-3.jpg" 
  alt="SM-200 Monitoring System"
  class="slide-img"
/>
```

#### 解决方案部分:
```vue
<!-- 精准农业 -->
<img src="/images/solution-precision.jpg" alt="Precision Agriculture" />

<!-- 农业机器人 -->
<img src="/images/solution-robotics.jpg" alt="Agricultural Robots" />

<!-- 物联网监测 -->
<img src="/images/solution-iot.jpg" alt="IoT Monitoring" />

<!-- 数据分析 -->
<img src="/images/solution-data.jpg" alt="Data Analytics" />
```

#### 产品部分:
```vue
<!-- VG-100产品 -->
<img src="/images/product-vg100.jpg" alt="VG-100 Navigation System" />

<!-- AR-300产品 -->
<img src="/images/product-ar300.jpg" alt="AR-300 Spraying Robot" />

<!-- SM-200产品 -->
<img src="/images/product-sm200.jpg" alt="SM-200 Monitoring System" />
```

### 步骤3: 创建图片目录
```bash
mkdir public/images
```

### 步骤4: 复制图片
将你的图片文件复制到 `public/images/` 目录

### 步骤5: 重新构建
```bash
npm run build
```

## 图片优化建议

### 格式选择
- **JPEG**: 适合照片类图片，文件较小
- **PNG**: 适合需要透明背景的图片
- **WebP**: 现代格式，压缩率更高（需要浏览器支持）

### 尺寸优化
1. **轮播图**: 1200x500px (16:7比例)
2. **卡片图片**: 800x200px (4:1比例)
3. **Logo**: 根据实际需要，建议 200-400px 宽度

### 压缩工具
- **在线工具**: TinyPNG, Compressor.io
- **桌面工具**: Photoshop, GIMP
- **命令行**: ImageMagick, sharp

## 备用方案

如果暂时没有合适的图片，可以:
1. 继续使用Unsplash图片
2. 使用占位符图片服务: https://placeholder.com
3. 使用AI生成图片: DALL-E, Midjourney等

## 注意事项

1. **版权**: 确保使用的图片有合法使用权
2. **文件大小**: 单张图片建议不超过200KB
3. **加载速度**: 大图片会影响网站加载速度
4. **响应式**: 确保图片在不同屏幕尺寸下显示正常
5. **ALT文本**: 为所有图片添加描述性ALT文本

## 测试

替换图片后，请测试:
1. 所有图片是否正常加载
2. 图片在不同设备上的显示效果
3. 网站加载速度
4. 图片的ALT文本是否正确

## 技术支持

如有问题，请参考:
- Vue静态资源处理: https://vuejs.org/guide/scaling-up/ssr.html
- Vite静态资源: https://vitejs.dev/guide/assets.html
- 图片优化指南: https://web.dev/fast/#optimize-your-images