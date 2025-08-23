import type { UrlSchemeWithoutCategory } from '@/types'

const MIHOME: UrlSchemeWithoutCategory[] = [
  // TODO: mihome://openCamera?did=%@&time=%@
  {
    id: 'mihome-specific-device',
    name: '设备主页',
    description: '打开米家指定设备主页',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'mihome://device?uid={xiaomi_id}&did={device_id}',
    slots: [
      {
        name: 'xiaomi_id',
        description: '小米 ID',
        placeholder: '123',
      },
      {
        name: 'device_id',
        description: '设备 ID，在更多设备信息处可以找到',
        placeholder: '456',
      },
    ],
    examples: ['mihome://device?uid=123&did=456'],
  },
  {
    id: 'mihome-search-store',
    name: '搜索商品',
    description: '打开米家并在商城搜索商品',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'mihome://searchstore?keyword={keyword}',
    slots: [
      {
        name: 'keyword',
        description: '搜索关键词',
        placeholder: '小米电视',
      },
    ],
    examples: ['mihome://searchstore?keyword=router'],
  },
]

export default MIHOME
