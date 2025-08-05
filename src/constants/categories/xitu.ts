import type { UrlSchemeWithoutCategory } from '@/types'

const XITU: UrlSchemeWithoutCategory[] = [
  {
    id: 'xitu-post',
    name: '文章',
    description: '打开稀土掘金文章',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-06T00:00:00Z',
    urlTemplate: 'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fpost%2F<post_id>%22%7D',
    slots: [
      {
        name: 'post_id',
        description: '文章 ID',
        placeholder: '7339357105144135734',
      },
    ],
    examples: [
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fpost%2F6931597891182002183%22%7D',
    ],
  },
]

export default XITU
