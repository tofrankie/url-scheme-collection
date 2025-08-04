import type { UrlSchemeWithoutCategory } from '@/types'

const APP_STORE: UrlSchemeWithoutCategory[] = [
  {
    id: 'app-store-ios',
    name: 'App Store',
    description: '唤起 App Store 指定应用',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'itms-apps://itunes.apple.com/cn/app/<bundle_id>/id<apple_id>',
    slots: [
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
    examples: [
      'itms-apps://itunes.apple.com/cn/app/wechat/id414478124',
      'itms-apps://itunes.apple.com/cn/app/qq/id444934666',
    ],
  },
  {
    id: 'app-store-xiaomi',
    name: '小米应用商店',
    description: '唤起小米应用商店指定应用，原 mimarket://details?id=<package_name> 已失效，唯有先通过浏览器打开再唤起',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'https://app.mi.com/details?id=<package_name>',
    slots: [
      {
        name: 'package_name',
        description: '应用包名',
        placeholder: 'com.tencent.mm',
      },
    ],
    examples: ['https://app.mi.com/details?id=com.tencent.mm'],
  },
  {
    id: 'app-store-meizu',
    name: '魅族应用商店',
    description: '唤起魅族应用商店指定应用',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'market://details?id=<package_name>',
    slots: [
      {
        name: 'package_name',
        description: '应用的包名',
        placeholder: 'com.tencent.mm',
      },
    ],
    examples: ['market://details?id=com.tencent.mm'],
  },
  {
    id: 'app-store-oppo',
    name: 'OPPO 应用商店',
    description: '唤起 OPPO 应用商店指定应用',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'market://details?id=<package_name>',
    slots: [
      {
        name: 'package_name',
        description: '应用的包名',
        placeholder: 'com.tencent.mm',
      },
    ],
    examples: ['market://details?id=com.tencent.mm'],
  },
  {
    id: 'app-store-vivo',
    name: 'vivo 应用商店',
    description: '唤起 vivo 应用商店指定应用',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'vivomarket://details?id=<package_name>',
    slots: [
      {
        name: 'package_name',
        description: '应用的包名',
        placeholder: 'com.tencent.mm',
      },
    ],
    examples: ['vivomarket://details?id=com.tencent.mm'],
  },
  {
    id: 'app-store-huawei',
    name: '华为应用市场',
    description: '唤起华为应用商店指定应用',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'appmarket://details?pkgname=<package_name>',
    slots: [
      {
        name: 'package_name',
        description: '应用的包名',
        placeholder: 'com.tencent.mm',
      },
    ],
    examples: ['appmarket://details?pkgname=com.tencent.mm'],
  },
  {
    id: 'app-store-honor',
    name: '荣耀应用商店',
    description: '唤起荣耀应用商店指定应用',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'market://details?id=<package_name>',
    slots: [
      {
        name: 'package_name',
        description: '应用的包名',
        placeholder: 'com.tencent.mm',
      },
    ],
    examples: ['market://details?id=com.tencent.mm'],
  },
  {
    id: 'app-store-samsung',
    name: '三星应用商店',
    description: '唤起三星应用商店指定应用',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'samsungapps://ProductDetail/<package_name>',
    slots: [
      {
        name: 'package_name',
        description: '应用的包名',
        placeholder: 'com.tencent.mm',
      },
    ],
    examples: ['samsungapps://ProductDetail/com.tencent.mm'],
  },
  {
    id: 'app-store-tencent',
    name: '应用宝',
    description: '唤起应用宝应用商店指定应用',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'tmast://appdetails?pname=<package_name>',
    slots: [
      {
        name: 'package_name',
        description: '应用的包名',
        placeholder: 'com.tencent.mm',
      },
    ],
    examples: ['tmast://appdetails?pname=com.tencent.mm'],
  },
  {
    id: 'app-store-coolapk',
    name: '酷安',
    description: '唤起酷安应用商店指定应用',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'coolmarket://com.coolapk.market/apk/<package_name>',
    slots: [
      {
        name: 'package_name',
        description: '应用的包名',
        placeholder: 'com.tencent.mm',
      },
    ],
    examples: ['coolmarket://com.coolapk.market/apk/com.tencent.mm'],
  },
] as const

export default APP_STORE
