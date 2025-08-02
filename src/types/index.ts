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

export interface Slot {
  name: string
  description: string
  placeholder: string
  required: boolean
  defaultValue?: string
}

export interface Category {
  id: string
  name: string
  description?: string
  count: number
}

export interface URLBuilderResult {
  url: string
  isValid: boolean
  errors: string[]
}
