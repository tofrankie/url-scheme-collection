import type { URLScheme, Category } from '@/types'

// 示例分类数据
export const sampleCategories: Category[] = [
  {
    id: 'app-store',
    name: '应用商店',
    description: 'iOS App Store 和 Android 应用商店相关',
    count: 3,
    icon: 'package',
  },
  {
    id: 'social',
    name: '社交应用',
    description: '微信、QQ、微博等社交应用',
    count: 2,
    icon: 'people',
  },
  {
    id: 'payment',
    name: '支付应用',
    description: '支付宝、微信支付等支付应用',
    count: 2,
    icon: 'credit-card',
  },
]

// 示例 URL Scheme 数据
export const sampleURLSchemes: URLScheme[] = [
  {
    id: 'app-store-ios',
    name: 'iOS App Store 应用详情',
    category: 'app-store',
    urlTemplate: 'itms-apps://itunes.apple.com/cn/app/<bundle_id>/id<apple_id>',
    slots: [
      {
        name: 'bundle_id',
        description: '应用的 Bundle ID',
        placeholder: '例如：wechat',
        required: true,
      },
      {
        name: 'apple_id',
        description: 'Apple 分配的应用 ID',
        placeholder: '例如：414478124',
        required: true,
      },
    ],
    lastUpdated: '2024-01-01',
    updatedBy: 'frankie',
    description: '打开 iOS App Store 中指定应用的详情页面',
    examples: [
      'itms-apps://itunes.apple.com/cn/app/wechat/id414478124',
      'itms-apps://itunes.apple.com/cn/app/qq/id444934666',
    ],
  },
  {
    id: 'app-store-android',
    name: 'Android 应用商店详情',
    category: 'app-store',
    urlTemplate: 'market://details?id=<package_name>',
    slots: [
      {
        name: 'package_name',
        description: 'Android 应用的包名',
        placeholder: '例如：com.tencent.mm',
        required: true,
      },
    ],
    lastUpdated: '2024-01-01',
    updatedBy: 'frankie',
    description: '打开 Android 应用商店中指定应用的详情页面',
    examples: [
      'market://details?id=com.tencent.mm',
      'market://details?id=com.tencent.mobileqq',
    ],
  },
  {
    id: 'wechat',
    name: '微信',
    category: 'social',
    urlTemplate: 'weixin://',
    lastUpdated: '2024-01-01',
    updatedBy: 'frankie',
    description: '打开微信应用',
    examples: ['weixin://'],
  },
  {
    id: 'wechat-pay',
    name: '微信支付',
    category: 'payment',
    urlTemplate: 'weixin://app/<app_id>/',
    slots: [
      {
        name: 'app_id',
        description: '微信小程序的 App ID',
        placeholder: '例如：wx1234567890',
        required: true,
      },
    ],
    lastUpdated: '2024-01-01',
    updatedBy: 'frankie',
    description: '打开微信小程序或微信支付',
    examples: ['weixin://app/wx1234567890/'],
  },
  {
    id: 'alipay',
    name: '支付宝',
    category: 'payment',
    urlTemplate: 'alipay://',
    lastUpdated: '2024-01-01',
    updatedBy: 'frankie',
    description: '打开支付宝应用',
    examples: ['alipay://'],
  },
  {
    id: 'deprecated-example',
    name: '已废弃的示例',
    category: 'app-store',
    urlTemplate: 'old-scheme://example',
    deprecated: true,
    lastUpdated: '2023-12-01',
    updatedBy: 'frankie',
    description: '这是一个已废弃的 URL Scheme 示例',
    examples: ['old-scheme://example'],
  },
]
