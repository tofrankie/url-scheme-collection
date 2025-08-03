import type { UrlSchemeWithoutCategory } from '@/types'

export const WECHAT: UrlSchemeWithoutCategory[] = [
  {
    id: 'wechat_scan',
    name: '扫一扫',
    description: '打开微信扫一扫页面',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'weixin://scanqrcode',
    examples: ['weixin://scanqrcode'],
  },
  {
    id: 'wechat_pay_code',
    name: '收付款',
    description: '打开微信收付款页面',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'weixin://widget/pay',
    examples: ['weixin://widget/pay'],
  },
  {
    id: 'wechat_moments',
    name: '朋友圈',
    description: '打开朋友圈',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-03T00:00:00Z',
    urlTemplate: 'weixin://dl/moments',
    examples: ['weixin://dl/moments'],
    deprecated: true,
  },
] as const

export default WECHAT
