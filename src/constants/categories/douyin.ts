import type { UrlSchemeWithoutCategory } from '@/types'

const DOUYIN: UrlSchemeWithoutCategory[] = [
  {
    id: 'douyin-scan',
    name: '扫一扫',
    description: '打开抖音扫一扫',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-12T00:00:00Z',
    urlSchemeTemplate: 'snssdk1128://aweme/scan',
    examples: ['snssdk1128://aweme/scan'],
  },
  {
    id: 'douyin-hotlist',
    name: '抖音热榜',
    description: '打开抖音热榜',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-12T00:00:00Z',
    urlSchemeTemplate: 'snssdk1128://search/trending',
    examples: ['snssdk1128://search/trending'],
  },
  {
    id: 'douyin-user-profile',
    name: '用户主页',
    description: '打开抖音用户主页',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-12T00:00:00Z',
    urlSchemeTemplate: 'snssdk1128://user/profile/{uid}',
    slots: [
      {
        name: 'uid',
        description:
          '用户 ID。在浏览器打开用户主页，在控制台搜索 https://www.douyin.com/aweme/v1/web/aweme/post/，从 aweme_list 其中一条作品里找到 author.uid。',
        placeholder: '3439720764022429',
      },
    ],
    examples: ['snssdk1128://user/profile/3439720764022429'],
  },
  {
    id: 'douyin-aweme-detail',
    name: '视频作品',
    description: '打开抖音指定视频作品',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-12T00:00:00Z',
    urlSchemeTemplate: 'snssdk1128://aweme/detail/{aweme_id}',
    slots: [
      {
        name: 'aweme_id',
        description: '视频作品 ID',
        placeholder: '7527640622661209371',
      },
    ],
    examples: ['snssdk1128://aweme/detail/7527640622661209371'],
  },
]

export default DOUYIN
