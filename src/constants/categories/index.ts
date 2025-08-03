import type { UrlScheme, UrlSchemeWithoutCategory, Category } from '@/types'
import APP_STORE from './app-store'
import WECHAT from './wechat'

export const CATEGORY_IDS = {
  APP_STORE: 'app_store',
  WECHAT: 'wechat',
} as const

export type CategoryId = (typeof CATEGORY_IDS)[keyof typeof CATEGORY_IDS]

export const CATEGORIES: Category[] = [
  {
    id: CATEGORY_IDS.APP_STORE,
    name: '应用商店',
    description: '唤起 App Store 和 Android 各应用商店的应用',
  },
  {
    id: CATEGORY_IDS.WECHAT,
    name: '微信',
    description: '微信相关 URL Scheme',
  },
] as const

export const CATEGORY_SCHEMES_MAP: Record<CategoryId, UrlSchemeWithoutCategory[]> = {
  [CATEGORY_IDS.APP_STORE]: APP_STORE,
  [CATEGORY_IDS.WECHAT]: WECHAT,
} as const

export const URL_SCHEMES: UrlScheme[] = Object.entries(CATEGORY_SCHEMES_MAP).flatMap(([categoryId, schemes]) =>
  schemes.map(scheme => ({
    ...scheme,
    category: categoryId as CategoryId,
  }))
)
