import type { UrlSchemeWithoutCategory } from '@/types'

const WXWORK: UrlSchemeWithoutCategory[] = [
  {
    id: 'wxwork-scan',
    name: '扫一扫',
    description: '打开企业微信扫一扫',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-05T00:00:00Z',
    urlSchemeTemplate: 'wxwork://platformId=wechat&wwact=qrcode',
    examples: ['wxwork://platformId=wechat&wwact=qrcode'],
  },
]

export default WXWORK
