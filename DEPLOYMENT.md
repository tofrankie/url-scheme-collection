# 部署指南

## Vercel 部署

### 前置条件

1. **Vercel 账户**
   - 访问 [vercel.com](https://vercel.com) 注册账户
   - 推荐使用 GitHub 账户登录

2. **Vercel CLI**
   ```bash
   npm install -g vercel
   ```

### 首次部署

#### 方法一：使用 Vercel CLI

1. **登录 Vercel**

   ```bash
   vercel login
   ```

2. **在项目根目录执行部署**

   ```bash
   vercel
   ```

3. **按提示配置**
   - 选择项目名称
   - 确认部署目录为 `dist`
   - 确认构建命令为 `pnpm build`

#### 方法二：使用 GitHub 集成

1. **推送代码到 GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **在 Vercel 中导入项目**
   - 登录 Vercel 控制台
   - 点击 "New Project"
   - 选择 GitHub 仓库
   - 配置构建设置：
     - Framework Preset: Vite
     - Build Command: `pnpm build`
     - Output Directory: `dist`
     - Install Command: `pnpm install`

### 后续更新部署

#### 自动部署（推荐）

1. **推送代码到 GitHub**

   ```bash
   git add .
   git commit -m "Update: 描述你的更改"
   git push origin main
   ```

2. **Vercel 自动部署**
   - 每次推送到 `main` 分支时自动触发部署
   - 可在 Vercel 控制台查看部署状态

#### 手动部署

1. **部署到生产环境**

   ```bash
   pnpm deploy
   ```

2. **部署预览版本**
   ```bash
   pnpm deploy:preview
   ```

### 环境变量配置

在 Vercel 项目设置中添加环境变量：

1. **访问项目设置**
   - 在 Vercel 控制台选择项目
   - 点击 "Settings" → "Environment Variables"

2. **添加环境变量**
   ```
   VITE_API_URL=https://your-api.com
   VITE_APP_TITLE=URL Scheme Collection
   ```

### 自定义域名

1. **在 Vercel 中添加域名**
   - 项目设置 → "Domains"
   - 添加你的自定义域名

2. **配置 DNS**
   - 按照 Vercel 提供的 DNS 记录配置
   - 等待 DNS 传播（通常几分钟到几小时）

### 性能优化

项目已配置以下优化：

1. **静态资源缓存**
   - 配置了长期缓存策略
   - 提高加载速度

2. **SPA 路由支持**
   - 配置了重写规则
   - 支持客户端路由

3. **构建优化**
   - 使用 Vite 进行快速构建
   - 自动代码分割

### 监控和分析

1. **Vercel Analytics**
   - 在项目设置中启用
   - 查看访问统计和性能指标

2. **错误监控**
   - 集成 Sentry 或其他错误监控服务
   - 实时监控应用错误

### 故障排除

#### 常见问题

1. **构建失败**
   - 检查 `package.json` 中的依赖
   - 确认 Node.js 版本兼容性
   - 查看构建日志

2. **路由问题**
   - 确认 `vercel.json` 中的重写规则
   - 检查 React Router 配置

3. **环境变量问题**
   - 确认环境变量名称以 `VITE_` 开头
   - 检查变量值是否正确

#### 获取帮助

- [Vercel 文档](https://vercel.com/docs)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [项目 Issues](https://github.com/toFrankie/url-scheme-collection/issues)
