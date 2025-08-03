import type { CategoryId } from '@/constants'

export interface UrlScheme {
  /** URL Scheme 唯一标识符，约定格式为 `category_id + '_' + 标识` */
  id: string

  /** URL Scheme 名称 */
  name: string

  /** 描述信息 */
  description: string

  /** 贡献者的 GitHub 用户名，其中第一个表示创造者，其他表示贡献者 */
  contributors: string[]

  /** 最后更新时间，ISO8601 格式 */
  updatedAt: string

  /** 所属分类 */
  category: CategoryId

  /** URL 模板，使用 <slotName> 格式表示动态参数 */
  urlTemplate: string

  /** 动态参数插槽定义 */
  slots?: Slot[]

  /** 示例 */
  examples?: string[]

  /** 已失效 */
  deprecated?: boolean
}

export type UrlSchemeWithoutCategory = Omit<UrlScheme, 'category'>

export interface Slot {
  /** 插槽名称，用于在 URL 模板中标识 */
  name: string

  /** 插槽的描述信息 */
  description: string

  /** 输入框的占位符文本 */
  placeholder: string
}

export interface Category {
  /** 分类的唯一标识符 */
  id: CategoryId

  /** 分类名称 */
  name: string

  /** 分类描述 */
  description?: string
}

export type ValidateURLSchemes<T extends readonly UrlScheme[]> = {
  [K in keyof T]: T[K] extends { category: CategoryId } ? T[K] : never
}

export type ValidateUniqueIds<T extends readonly UrlScheme[]> = T extends readonly [infer First, ...infer Rest]
  ? First extends UrlScheme
    ? Rest extends readonly UrlScheme[]
      ? First['id'] extends Rest[number]['id']
        ? never
        : ValidateUniqueIds<Rest>
      : T
    : never
  : T
