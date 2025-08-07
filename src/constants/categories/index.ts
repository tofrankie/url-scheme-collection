import type { UrlScheme, UrlSchemeWithoutCategory, Category } from '@/types'
import APP_STORE from './app-store'
import XIAOHONGSHU from './xiaohongshu'
import WECHAT from './wechat'
import WXWORK from './wxwork'
import ALIPAY from './alipay'
import ZHIHU from './zhihu'
import XITU from './xitu'
import JIANSHU from './jianshu'

export const CATEGORY_IDS = {
  APP_STORE: 'app_store',
  XIAOHONGSHU: 'xiaohongshu',
  WECHAT: 'wechat',
  WXWORK: 'wxwork',
  ALIPAY: 'alipay',
  ZHIHU: 'zhihu',
  XITU: 'xitu',
  JIANSHU: 'jianshu',
} as const

export type CategoryId = (typeof CATEGORY_IDS)[keyof typeof CATEGORY_IDS]

export const CATEGORIES: Category[] = [
  {
    id: CATEGORY_IDS.APP_STORE,
    name: '应用商店',
    description: '唤起 App Store 和 Android 各应用商店的应用。',
  },
  {
    id: CATEGORY_IDS.XIAOHONGSHU,
    name: '小红书',
    description:
      '小红书相关 URL Scheme。注意，iOS 和 Android 的部分 URL Scheme 前缀可能不同，iOS 为 xhsdiscover://，Android 为 xhsdiscovery://。',
  },
  {
    id: CATEGORY_IDS.WECHAT,
    name: '微信',
    description: '类似 weixin://dl/moments、weixin://dl/profile 等一系列 URL Scheme 已失效。',
  },
  {
    id: CATEGORY_IDS.WXWORK,
    name: '企业微信',
    description: '企业微信相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.ALIPAY,
    name: '支付宝',
    description: '支付宝相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.ZHIHU,
    name: '知乎',
    description: '知乎相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.XITU,
    name: '稀土掘金',
    description: '稀土掘金相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.JIANSHU,
    name: '简书',
    description: '简书相关 URL Scheme。',
  },
] as const

export const CATEGORY_SCHEMES_MAP: Record<CategoryId, UrlSchemeWithoutCategory[]> = {
  [CATEGORY_IDS.APP_STORE]: APP_STORE,
  [CATEGORY_IDS.XIAOHONGSHU]: XIAOHONGSHU,
  [CATEGORY_IDS.WECHAT]: WECHAT,
  [CATEGORY_IDS.WXWORK]: WXWORK,
  [CATEGORY_IDS.ALIPAY]: ALIPAY,
  [CATEGORY_IDS.ZHIHU]: ZHIHU,
  [CATEGORY_IDS.XITU]: XITU,
  [CATEGORY_IDS.JIANSHU]: JIANSHU,
} as const

export const URL_SCHEMES: UrlScheme[] = Object.entries(CATEGORY_SCHEMES_MAP).flatMap(([categoryId, schemes]) =>
  schemes.map(scheme => ({
    ...scheme,
    category: categoryId as CategoryId,
  }))
)
