// URL Scheme 数据结构
export interface URLScheme {
  id: string
  name: string
  category: string
  urlTemplate: string
  slots?: Slot[]
  deprecated?: boolean
  lastUpdated: string
  updatedBy?: string
  description?: string
  examples?: string[]
}

// 动态插槽数据结构
export interface Slot {
  name: string
  description: string
  placeholder: string
  required: boolean
  defaultValue?: string
}

// 分类数据结构
export interface Category {
  id: string
  name: string
  description?: string
  count: number
  icon?: string
}

// URL 构建器结果
export interface URLBuilderResult {
  url: string
  isValid: boolean
  errors: string[]
}
