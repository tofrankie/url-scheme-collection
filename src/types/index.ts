import type { CategoryId } from '@/constants'

export interface URLScheme {
  id: string // 约定 category_id + '_' + 标识
  name: string
  category: CategoryId
  urlTemplate: string
  slots?: Slot[]
  deprecated?: boolean
  lastUpdated: string
  updatedBy?: string
  description: string
  examples?: string[]
}

export interface Slot {
  name: string
  description: string
  placeholder: string
  required: boolean
  defaultValue?: string
}

export interface Category {
  id: CategoryId
  name: string
  description?: string
  count: number
}

export interface URLBuilderResult {
  url: string
  isValid: boolean
  errors: string[]
}

// 类型检查：确保所有 URL Scheme 的 category 都是有效的 CategoryId
export type ValidateURLSchemes<T extends readonly URLScheme[]> = {
  [K in keyof T]: T[K] extends { category: CategoryId } ? T[K] : never
}

// 类型检查：确保所有 URL Scheme 的 id 都是唯一的
export type ValidateUniqueIds<T extends readonly URLScheme[]> =
  T extends readonly [infer First, ...infer Rest]
    ? First extends URLScheme
      ? Rest extends readonly URLScheme[]
        ? First['id'] extends Rest[number]['id']
          ? never
          : ValidateUniqueIds<Rest>
        : T
      : never
    : T
