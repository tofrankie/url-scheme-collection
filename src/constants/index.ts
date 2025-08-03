import type { UrlScheme, Category } from '@/types'

import APP_STORE from './categories/app-store'

export const GITHUB_REPO_URL = 'https://github.com/toFrankie/url-scheme-collection'

export const GITHUB_ISSUES_URL = `${GITHUB_REPO_URL}/issues`

export const GITHUB_PULLS_URL = `${GITHUB_REPO_URL}/pulls`

export const STORAGE_KEYS = {
  COLOR_MODE: 'color_mode',
}

export const CATEGORY_IDS = {
  APP_STORE: 'app_store',
} as const

export type CategoryId = (typeof CATEGORY_IDS)[keyof typeof CATEGORY_IDS]

const BASE_CATEGORIES = [
  {
    id: CATEGORY_IDS.APP_STORE,
    name: '应用商店',
    description: '唤起 App Store 和 Android 各应用商店的应用',
  },
] as const

const calculateCategoryCounts = (schemes: UrlScheme[]) => {
  const counts: Record<string, number> = {}

  schemes.forEach(scheme => {
    counts[scheme.category] = (counts[scheme.category] || 0) + 1
  })

  return counts
}

export const URL_SCHEMES: UrlScheme[] = [...APP_STORE] as const

export const CATEGORIES: Category[] = (() => {
  const counts = calculateCategoryCounts(URL_SCHEMES)

  return BASE_CATEGORIES.map(category => ({
    ...category,
    count: counts[category.id] || 0,
  }))
})()
