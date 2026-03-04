# 贡献指南

感谢你对 [URL Scheme Collection](https://github.com/tofrankie/url-scheme-collection) 项目的关注！我们欢迎任何形式的贡献。

## 🚀 开始之前

在开始贡献之前，请确保：

1. 你已经 Fork 了本仓库
2. 你已经克隆了你的 Fork 到本地
3. 你已经安装了 [pnpm](https://pnpm.io/installation#using-corepack)（项目使用 pnpm 作为包管理器）

## ⚙️ 开发环境设置

1. 安装依赖

```bash
$ pnpm install
```

2. 启动开发服务器

```bash
$ pnpm dev
```

3. 运行代码检查

```bash
$ pnpm lint
```

4. 构建项目

```bash
$ pnpm build
```

## 📊 数据结构

在开始贡献之前，请先了解项目的数据结构。类型定义如下（实际以代码为准）：

```ts
interface Category {
  id: CategoryId // 分类的唯一标识符
  name: string // 分类名称
  description?: string // 分类描述
}

interface UrlScheme {
  id: string // 唯一标识符，格式为 `category_id + '_' + 标识`（使用下划线分隔）
  name: string // URL Scheme 名称（中文）
  description: string // 描述信息（中文）
  contributors: string[] // 贡献者 GitHub 用户名数组，第一个为创建者
  updatedAt: string // 最后更新时间，ISO8601 格式（如 '2025-01-20T00:00:00Z'）
  urlSchemeTemplate: string // URL Scheme 模板，使用 {slotName} 表示动态参数
  slots?: Slot[] // 动态参数插槽定义（可选）
  examples?: string[] // 示例数组（可选，建议提供）
  deprecated?: boolean // 是否已失效（可选，默认为 false）
}

interface Slot {
  name: string // 插槽名称，与模板中的 {slotName} 对应
  description: string // 插槽的描述信息（中文）
  placeholder: string // 输入框的占位符文本
  transform?: (inputValue: string) => string // 转换函数（可选）
}
```

示例：

```js
{
  id: 'app_store',
  name: '应用商店',
  description: '唤起 App Store 和 Android 各应用商店的应用。',
}
```

```js
{
  id: 'app_store_ios',
  name: 'App Store',
  description: '打开 App Store 指定应用',
  contributors: ['tofrankie'],
  updatedAt: '2025-08-09T00:00:00Z',
  urlSchemeTemplate: 'itms-apps://itunes.apple.com/{region}/app/{bundle_id}/id{apple_id}',
  slots: [
    {
      name: 'region',
      description: '国家或地区，如国区 cn、美区 us 等',
      placeholder: 'cn',
    },
    {
      name: 'bundle_id',
      description: '应用 Bundle ID，可在 App Store Connect 中查看',
      placeholder: 'wechat',
    },
    {
      name: 'apple_id',
      description: 'Apple 分配的应用 ID，可在 App Store Connect 中查看',
      placeholder: '414478124',
    },
  ],
  examples: ['itms-apps://itunes.apple.com/cn/app/wechat/id414478124'],
}
```

💡 提示：

1. 若 `urlSchemeTemplate` 有动态参数，则必须定义 `slots` 数组，并定义每个插槽的名称、描述、占位符文本和转换函数（可选）
   - 描述（`description`）应准确描述，建议给出获取参数值的方式
   - 占位符文本（`placeholder`）会用于生成默认示例，建议给出一个有效值（最好不涉及敏感信息）
2. 在分类下，可以按功能对 URL Scheme 进行排序，以便用户更好地查找相关功能
3. 尽量提供 `examples` 数组，方便用户理解和使用

## 🤝 如何贡献

分类通常以 App 为粒度，比如「抖音」相关的 URL Scheme 定义在 `src/constants/categories/douyin.ts` 文件中。也可能是 iOS、macOS 等以操作系统为粒度的，或是扫一扫集合等。总之，合理即可。

> [!IMPORTANT]
> 无论新增 URL Scheme 还是改进已有 URL Scheme，都应在「真机」中测试，确保功能正常！

> [!TIP]
> `README.md` 文件无需手动更新，它会通过 GitHub Workflow 自动触发进行更新。

### ➕ 添加 URL Scheme

如果你想为现有分类添加新的 URL Scheme，请按照以下步骤：

1. 找到对应的分类文件，分类文件位于 `src/constants/categories/` 目录下，例如 `douyin.ts`

2. 在对应的分类文件中添加 URL Scheme 条目：

```js
{
  id: 'douyin_example',
  name: '示例功能',
  description: '打开抖音示例功能',
  contributors: ['your-github-username'],
  updatedAt: '2025-01-20T00:00:00Z',
  urlSchemeTemplate: 'snssdk1128://example?param={value}',
  slots: [
    {
      name: 'value',
      description: '参数值',
      placeholder: 'example-value',
    },
  ],
  examples: ['snssdk1128://example?param=example-value'],
}
```

### 🆕 新增分类

如果你想添加一个全新的分类，请按照以下步骤：

1. 在 `src/constants/categories/` 目录下创建新文件，例如 `app-store.ts`：

```ts
import type { UrlSchemeWithoutCategory } from '@/types'

const APP_STORE: UrlSchemeWithoutCategory[] = [
  // 在这里添加 URL Scheme 条目
]

export default APP_STORE
```

2. 在 `src/constants/categories/index.ts` 中注册分类：

```ts
// 1. 导入分类数据
import APP_STORE from './app-store'

// 2. 定义分类 ID
export const CATEGORY_IDS = {
  // ...
  APP_STORE: 'app_store',
} as const

// 3. 定义分类信息
export const CATEGORIES: Category[] = [
  // ...
  {
    id: CATEGORY_IDS.APP_STORE,
    name: '应用商店',
    description: '唤起 App Store 和 Android 各应用商店的应用。',
  },
] as const

// 4. 使用分类数据
export const CATEGORY_SCHEMES_MAP: Record<CategoryId, UrlSchemeWithoutCategory[]> = {
  // ...
  [CATEGORY_IDS.APP_STORE]: APP_STORE,
} as const
```

> [!TIP]
> 页面分类导航是按照 `CATEGORIES` 顺序展示的，编写代码时，分类的 `CATEGORY_IDS` 和 `CATEGORY_SCHEMES_MAP` 的 `key` 顺序应与 `CATEGORIES` 保持一致。

### 🔄 更新 URL Scheme

如果你发现某个 URL Scheme 已失效或需要改进：

1. 找到对应的条目
2. 若已失效，设置 `deprecated: true`
3. 更新 `updatedAt` 为当前日期（ISO8601 格式，如 '2025-01-20T00:00:00Z'）
4. 在 `contributors` 数组末尾添加你的 GitHub 用户名（如果还没有的话）

---

💬 如有任何问题，欢迎在 [Issues](https://github.com/tofrankie/url-scheme-collection/issues) 中提出。
