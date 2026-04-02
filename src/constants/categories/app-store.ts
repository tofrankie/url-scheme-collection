import type { UrlSchemeWithoutCategory } from '@/types'

const APP_STORE: UrlSchemeWithoutCategory[] = [
  {
    id: 'app-store-ios',
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
  },
  {
    id: 'app-store-xiaomi',
    name: '小米应用商店',
    description:
      '打开小米应用商店指定应用。原来的 mimarket://details?id={package_name} 已失效，现在可通过直投 2.0 https://dev.mi.com/xiaomihyperos/documentation/detail?pId=1729 方式唤起，但这种方式需要技术接入。除此之外，也可以通过浏览器打开 https://app.mi.com/details?id={package_name} 再唤起应用商店，但仅限小米系统浏览器，第三方浏览器可能会打开 Web 版的小米应用商店。',
    contributors: ['tofrankie'],
    updatedAt: '2025-12-12T00:00:00Z',
    urlSchemeTemplate: 'https://app.mi.com/details?id={package_name}',
    slots: [
      {
        name: 'package_name',
        description: '应用包名',
        placeholder: 'com.tencent.mm',
      },
    ],
    examples: ['https://app.mi.com/details?id=com.tencent.mm', 'mimarket://details?id=com.tencent.mm'],
    deprecated: true,
  },
  {
    id: 'app-store-meizu',
    name: '魅族应用商店',
    description: '打开魅族应用商店指定应用',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlSchemeTemplate: 'market://details?id={package_name}',
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
    description: '打开 OPPO 应用商店指定应用',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlSchemeTemplate: 'market://details?id={package_name}',
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
    description: '打开 vivo 应用商店指定应用',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlSchemeTemplate: 'vivomarket://details?id={package_name}',
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
    description: '打开华为应用商店指定应用（Android）',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlSchemeTemplate: 'appmarket://details?pkgname={package_name}',
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
    id: 'app-store-harmonyos',
    name: 'HarmonyOS 应用市场',
    description:
      '打开 HarmonyOS 应用市场指定应用，更多：https://developer.huawei.com/consumer/cn/forum/topic/0201448086867860655',
    contributors: ['tofrankie'],
    updatedAt: '2025-12-12T00:00:00Z',
    urlSchemeTemplate: 'hiapplink://com.huawei.appmarket?appId={app_id}',
    slots: [
      {
        name: 'app_id',
        description: '应用的 ID。在 AppGallery Connect - 我的应用 - 应用信息处获取。',
        placeholder: 'C100170981',
      },
    ],
    examples: ['hiapplink://com.huawei.appmarket?appId=C100170981'],
  },
  {
    id: 'app-store-honor',
    name: '荣耀应用商店',
    description: '打开荣耀应用商店指定应用',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlSchemeTemplate: 'market://details?id={package_name}',
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
    description: '打开三星应用商店指定应用',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlSchemeTemplate: 'samsungapps://ProductDetail/{package_name}',
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
    description: '打开应用宝应用商店指定应用',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlSchemeTemplate: 'tmast://appdetails?pname={package_name}',
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
    description: '打开酷安应用商店指定应用',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlSchemeTemplate: 'coolmarket://com.coolapk.market/apk/{package_name}',
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
