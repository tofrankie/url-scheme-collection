# URL Scheme Collection 项目计划

## 项目概述

创建一个移动端应用 URL Scheme 收集和管理工具，支持分类、搜索、动态参数配置等功能。

## 技术栈

- **前端**: React 19 + TypeScript
- **UI 组件**: Primer React + Octicons
- **样式系统**: Primer CSS + Primer Primitives
- **构建工具**: Vite
- **包管理器**: pnpm
- **代码质量**: ESLint + Prettier + Husky

## 功能特性

### 第一阶段：基础功能 ✅

- [x] 项目初始化和基础配置
- [x] 基础组件开发（搜索栏、分类过滤器、URL Scheme 卡片）
- [x] 数据模型定义和示例数据
- [x] 基础布局和样式

### 第二阶段：UI/UX 优化 ✅

- [x] 引入 Primer React 组件库
- [x] 实现深色/浅色主题切换
- [x] 优化组件布局和交互
- [x] 使用 Stack 组件改善排版
- [x] 集成 Primer CSS 和 Primitives
- [x] 重构为卡片 + 弹窗的交互模式
- [x] 使用 NavList 组件优化侧边栏
- [x] 路径别名配置和文件命名规范
- [x] 网格卡片布局设计，参考 Raycast 风格
- [x] 优化布局：一行三列卡片，紧凑设计
- [x] 分类导航交互：完全固定布局，标题栏和导航栏不随滚动移动
- [x] 布局优化：增加内边距，调整标题栏高度，参考 Primer 设计指引
- [x] 使用 PageLayout 组件：Header 和 Pane 使用 sticky 布局，Pane 支持 resizable
- [x] 使用 npm-run-all2 优化构建脚本

### 第三阶段：功能完善 🔄

- [ ] 实现数据持久化功能
- [ ] 添加编辑和添加 URL Scheme 功能
- [ ] 实现数据导入导出
- [ ] 添加使用说明和帮助文档
- [ ] 实现键盘快捷键支持

### 第四阶段：测试和部署 ⏳

- [ ] 单元测试
- [ ] 集成测试
- [ ] 用户测试
- [ ] 部署到 GitHub Pages 或其他平台
- [ ] 配置 CI/CD 流程

## 当前状态

✅ **已完成**: 基础功能 + UI/UX 优化
🔄 **进行中**: 功能完善
⏳ **待开始**: 测试和部署

## 下一步计划

1. **数据持久化**: 实现本地存储或数据库存储
2. **编辑功能**: 添加 URL Scheme 的编辑和创建功能
3. **数据管理**: 支持导入导出 JSON 格式的数据
4. **用户体验**: 添加帮助文档和键盘快捷键
5. **测试**: 编写单元测试和集成测试

## 项目结构

```
url-scheme-collection/
├── src/
│   ├── components/          # React 组件
│   ├── data/               # 示例数据
│   ├── utils/              # 工具函数
│   ├── types/              # TypeScript 类型定义
│   ├── App.tsx             # 主应用组件
│   └── main.tsx            # 应用入口
├── public/                 # 静态资源
├── dist/                   # 构建输出
├── package.json            # 项目配置
├── tsconfig.json           # TypeScript 配置
├── vite.config.ts          # Vite 配置
└── README.md               # 项目说明
```

## 设计原则

1. **Primer 优先**: 优先使用 Primer 设计系统的组件和模式
2. **Stack 布局**: 使用 Stack 组件进行一致的间距和布局
3. **类型安全**: 严格的 TypeScript 配置确保代码质量
4. **可维护性**: 清晰的文件结构和导入路径
5. **用户体验**: 简洁的卡片设计 + 详细的弹窗交互
