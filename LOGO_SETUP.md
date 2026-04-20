# Logo 设置指南

## 当前状态
网站使用临时的文字logo占位符。你需要替换为实际的logo图片。

## 如何替换logo

### 方法1: 使用在线图片URL
1. 将logo图片上传到图片托管服务（如imgur、cloudinary、imgbb等）
2. 获取图片的公开URL
3. 修改 `src/views/HomeView.vue` 文件：

```vue
<!-- 替换这部分代码 -->
<div class="logo">
  <div class="logo-image-placeholder">
    <span class="logo-initial">V</span>
  </div>
  <div class="logo-text-container">
    <span class="logo-text">VESPER</span>
    <span class="logo-subtext">AgriTech</span>
  </div>
</div>

<!-- 替换为 -->
<div class="logo">
  <img src="YOUR_LOGO_URL_HERE" alt="Vesper AgriTech" class="logo-image" />
  <div class="logo-text-container">
    <span class="logo-text">VESPER</span>
    <span class="logo-subtext">AgriTech</span>
  </div>
</div>
```

4. 在CSS部分取消注释并修改：
```css
/* 取消注释并修改 */
.logo-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
}
```

### 方法2: 使用本地图片
1. 将logo图片放入 `public/` 目录
2. 使用相对路径引用：
```vue
<img src="/logo.png" alt="Vesper AgriTech" class="logo-image" />
```

### 方法3: 使用Base64编码
1. 将logo图片转换为Base64字符串
2. 直接嵌入HTML：
```vue
<img src="data:image/png;base64,YOUR_BASE64_STRING" alt="Vesper AgriTech" class="logo-image" />
```

## Logo图片要求
- 格式: PNG, SVG, JPG
- 尺寸: 建议 80x80px 到 200x200px
- 背景: 透明背景最佳
- 文件大小: 小于 100KB

## 推荐的图片托管服务
1. **Imgur** - 免费，无需注册
2. **Cloudinary** - 免费套餐，支持优化
3. **ImgBB** - 简单易用
4. **GitHub** - 上传到仓库的assets目录

## 联系方式已更新
- 电话: +61 408 518 918
- 邮箱: market@vesperinno.com

## 重新构建
替换logo后，需要重新构建项目：
```bash
npm run build
```

构建后的文件在 `dist/` 目录，可以部署到Netlify。