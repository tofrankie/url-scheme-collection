import type { UrlSchemeWithoutCategory } from '@/types'

const JIANSHU: UrlSchemeWithoutCategory[] = [
  {
    id: 'jianshu_note',
    name: '文章',
    description: '打开简书文章',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-07T00:00:00Z',
    urlTemplate: 'jianshu://notes/<article_id>',
    slots: [
      {
        name: 'article_id',
        description: '文章 ID',
        placeholder: '6709246f1e81',
      },
    ],
    examples: ['jianshu://notes/6709246f1e81'],
  },
  {
    id: 'jianshu_collection',
    name: '专题',
    description: '打开简书专题',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-07T00:00:00Z',
    urlTemplate: 'jianshu://collections/<collection_id>',
    slots: [
      {
        name: 'collection_id',
        description: '专题 ID',
        placeholder: 'eed6782504d5',
      },
    ],
    examples: ['jianshu://collections/eed6782504d5'],
  },
  {
    id: 'jianshu_notebook',
    name: '文集',
    description: '打开简书文集',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-07T00:00:00Z',
    urlTemplate: 'jianshu://notebooks/45333472',
    slots: [
      {
        name: 'notebook_id',
        description: '文集 ID',
        placeholder: '45333472',
      },
    ],
    examples: ['jianshu://notebooks/45333472'],
  },
  {
    id: 'jianshu_user',
    name: '用户主页',
    description: '打开简书用户主页',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-07T00:00:00Z',
    urlTemplate: 'jianshu://users/<user_id>',
    slots: [
      {
        name: 'user_id',
        description: '用户 ID',
        placeholder: 'f4dac74bd955',
      },
    ],
    examples: ['jianshu://users/f4dac74bd955'],
  },
]

export default JIANSHU
