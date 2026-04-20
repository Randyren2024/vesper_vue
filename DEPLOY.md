# Netlify 部署指南

## 步骤1: 准备构建文件

项目已经构建完成，构建文件位于 `dist/` 目录。

## 步骤2: 部署到 Netlify

### 方法A: 拖拽部署 (最简单)
1. 访问 [https://app.netlify.com](https://app.netlify.com)
2. 登录或注册账号
3. 将 `dist` 文件夹拖拽到 Netlify 的部署区域
4. Netlify 会自动部署你的网站

### 方法B: 连接 GitHub/GitLab
1. 将项目推送到 GitHub 或 GitLab
2. 在 Netlify 中选择 "New site from Git"
3. 选择你的仓库
4. 配置构建设置:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. 点击 "Deploy site"

### 方法C: 使用 Netlify CLI
```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 初始化项目
netlify init

# 部署
netlify deploy --prod
```

## 步骤3: 配置自定义域名 (可选)

1. 在 Netlify 控制台选择你的站点
2. 进入 "Domain settings"
3. 点击 "Add custom domain"
4. 按照指引配置 DNS

## 项目配置说明

### `netlify.toml` 配置文件
```toml
[build]
  command = "npm run build"  # 构建命令
  publish = "dist"          # 发布目录

[build.environment]
  NODE_VERSION = "18"       # Node.js 版本

[[redirects]]
  from = "/*"               # 所有路径
  to = "/index.html"        # 重定向到 index.html
  status = 200              # SPA 路由支持
```

### 环境变量 (如果需要)
在 Netlify 控制台的 "Site settings" > "Environment variables" 中添加:
- `NODE_ENV=production`
- 其他需要的环境变量

## 构建输出文件

```
dist/
├── index.html              # 主HTML文件
├── assets/
│   ├── index-xxx.css      # 样式文件
│   ├── index-xxx.js       # 主JavaScript文件
│   ├── vendor-xxx.js      # 第三方库
│   └── antd-xxx.js        # Ant Design库
└── vite.svg               # 图标文件
```

## 常见问题

### 1. 构建失败
- 确保 Node.js 版本 ≥ 18
- 检查 `package.json` 依赖是否正确
- 查看 Netlify 构建日志

### 2. 页面空白
- 检查控制台错误
- 确保所有资源路径正确
- 验证 SPA 路由配置

### 3. 样式丢失
- 检查 CSS 文件是否加载
- 验证 Ant Design 样式是否正确引入

### 4. 图片不显示
- Unsplash 图片需要网络连接
- 检查图片 URL 是否有效

## 性能优化建议

1. **启用压缩**: Netlify 自动启用 Gzip/Brotli 压缩
2. **CDN 缓存**: Netlify 使用全球 CDN
3. **图片优化**: 考虑使用 Netlify 图片优化功能
4. **代码分割**: 已配置 vendor 和 antd 分离

## 监控和统计

1. **访问统计**: Netlify Analytics (付费功能)
2. **表单处理**: Netlify Forms
3. **函数服务**: Netlify Functions (如果需要后端逻辑)

## 技术支持

- Netlify 文档: https://docs.netlify.com/
- Vue 3 文档: https://vuejs.org/
- Ant Design Vue: https://www.antdv.com/

## 项目信息

- 网站名称: Vesper AgriTech
- 技术栈: Vue 3 + TypeScript + Ant Design Vue
- 构建工具: Vite
- 部署平台: Netlify
- 联系方式: market@vesperinno.com / +61 408 518 918