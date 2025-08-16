import type { UrlSchemeWithoutCategory } from '@/types'

const XITU: UrlSchemeWithoutCategory[] = [
  {
    id: 'xitu-signin',
    name: '签到',
    description: '打开稀土掘金签到页',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-08T00:00:00Z',
    urlSchemeTemplate:
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fuser%2Fcenter%2Fsignin%22%7D',
    examples: [
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fuser%2Fcenter%2Fsignin%22%7D',
    ],
  },
  {
    id: 'xitu-user',
    name: '用户主页',
    description: '打开稀土掘金用户主页',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-08T00:00:00Z',
    urlSchemeTemplate:
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fuser%2F{user_id}%22%7D',
    slots: [
      {
        name: 'user_id',
        description: '用户 ID',
        placeholder: '1398234520227224',
      },
    ],
    examples: [
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fpost%2F1398234520227224%22%7D',
    ],
  },
  {
    id: 'xitu-post',
    name: '文章',
    description: '打开稀土掘金文章',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-06T00:00:00Z',
    urlSchemeTemplate:
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fpost%2F{post_id}%22%7D',
    slots: [
      {
        name: 'post_id',
        description: '文章 ID',
        placeholder: '7339357105144135734',
      },
    ],
    examples: [
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fpost%2F7339357105144135734%22%7D',
    ],
  },
  {
    id: 'xitu-column',
    name: '专栏',
    description: '打开稀土掘金专栏',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-06T00:00:00Z',
    urlSchemeTemplate:
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fcolumn%2F{column_id}%22%7D',
    slots: [
      {
        name: 'column_id',
        description: '专栏 ID',
        placeholder: '7044742867306151967',
      },
    ],
    examples: [
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fcolumn%2F7044742867306151967%22%7D',
    ],
  },
  {
    id: 'xitu-collection',
    name: '收藏集',
    description: '打开稀土掘金收藏集',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-06T00:00:00Z',
    urlSchemeTemplate:
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fcollection%2F{collection_id}%22%7D',
    slots: [
      {
        name: 'collection_id',
        description: '收藏集 ID',
        placeholder: '7008703198215012389',
      },
    ],
    examples: [
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fcollection%2F7008703198215012389%22%7D',
    ],
  },
  {
    id: 'xitu-course',
    name: '课程',
    description: '打开稀土掘金课程 Tab',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-06T00:00:00Z',
    urlSchemeTemplate: 'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fcourse%22%7D',
    examples: ['snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fcourse%22%7D'],
  },
  {
    id: 'xitu-book',
    name: '掘金小册',
    description: '打开稀土掘金小册详情',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-06T00:00:00Z',
    urlSchemeTemplate:
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fbook%2F{book_id}%22%7D',
    slots: [
      {
        name: 'book_id',
        description: '小册 ID',
        placeholder: '7481132169944498226',
      },
    ],
    examples: [
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fbook%2F7481132169944498226%22%7D',
    ],
  },
  {
    id: 'xitu-bytetech',
    name: '字节内部课',
    description: '打开字节内部课详情',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-06T00:00:00Z',
    urlSchemeTemplate:
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fcourse%2Fbytetech%2F{course_id}%22%7D',
    slots: [
      {
        name: 'course_id',
        description: '课程 ID',
        placeholder: '7472685250229846067',
      },
    ],
    examples: [
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fcourse%2Fbytetech%2F7472685250229846067%22%7D',
    ],
  },
  {
    id: 'xitu-pins',
    name: '沸点',
    description: '打开稀土掘金沸点 Tab',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-08T00:00:00Z',
    urlSchemeTemplate: 'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fpins%22%7D',
    examples: ['snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fpins%22%7D'],
  },
  {
    id: 'xitu-pin',
    name: '沸点详情',
    description: '打开稀土掘金沸点详情',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-06T00:00:00Z',
    urlSchemeTemplate:
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fpin%2F{pin_id}%22%7D',
    slots: [
      {
        name: 'pin_id',
        description: '沸点 ID',
        placeholder: '7535120503363616803',
      },
    ],
    examples: [
      'snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fpin%2F7535120503363616803%22%7D',
    ],
  },
]

export default XITU
