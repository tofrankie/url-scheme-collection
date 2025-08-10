import type { UrlSchemeWithoutCategory } from '@/types'

const WEIBO: UrlSchemeWithoutCategory[] = [
  // TODO:
  // sinaweibo://browser?url=https%3A%2F%2Fweibo.com%2Fl%2Fwblive%2Fm%2Fshow%2F1022%3A2321325198232287838518
  // sinaweibo://comment?id=JgxnUsvvn&uid=5832213055
  {
    id: 'weibo-qrcode',
    name: '扫一扫',
    description: '打开微博扫一扫',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://qrcode',
    examples: ['sinaweibo://qrcode'],
  },
  {
    id: 'weibo-searchall',
    name: '搜索',
    description: '打开微博并搜索指定内容',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://searchall?q=<content>',
    slots: [
      {
        name: 'content',
        description: '搜索内容',
        placeholder: '平潭',
      },
    ],
    examples: ['sinaweibo://searchall', 'sinaweibo://searchall?q=平潭'],
  },
  {
    id: 'weibo-sendweibo',
    name: '发微博',
    description: '发微博',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://sendweibo?content=<content>',
    slots: [
      {
        name: 'content',
        description: '微博内容',
        placeholder: 'Hello World!',
      },
    ],
    examples: [
      'sinaweibo://sendweibo',
      'sinaweibo://sendweibo?content=Hello World!',
      'sinaweibo://compose',
      'sinaweibo://compose?content=Hello World!',
    ],
  },
  {
    id: 'weibo-draftbox',
    name: '草稿箱',
    description: '打开微博草稿箱（不起作用？）',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://draftbox',
    examples: ['sinaweibo://draftbox'],
    deprecated: true, // TODO: 似乎不起作用
  },
  {
    id: 'weibo-gotohome',
    name: '首页',
    description: '打开微博首页',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://gotohome',
    examples: ['sinaweibo://gotohome'],
  },
  {
    id: 'weibo-gotovideo',
    name: '视频',
    description: '打开微博视频 Tab',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://gotovideo',
    examples: ['sinaweibo://gotovideo'],
  },
  {
    id: 'weibo-discover',
    name: '发现',
    description: '打开微博发现 Tab',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://discover',
    examples: ['sinaweibo://discover'],
  },
  {
    id: 'weibo-message',
    name: '消息',
    description: '打开微博消息 Tab',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://message',
    examples: ['sinaweibo://message'],
  },
  {
    id: 'weibo-myprofile',
    name: '我的',
    description: '打开微博我的 Tab',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://myprofile',
    examples: ['sinaweibo://myprofile'],
  },
  {
    id: 'weibo-userinfo',
    name: '用户主页',
    description: '打开微博指定用户主页',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://userinfo?uid=<uid>',
    slots: [
      {
        name: 'uid',
        description: '用户 ID',
        placeholder: '2656274875',
      },
    ],
    examples: ['sinaweibo://userinfo?uid=2656274875'],
  },
  {
    id: 'weibo-messagelist',
    name: '私信',
    description: '与指定用户私信对话',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://messagelist?uid=<uid>&content=<content>',
    slots: [
      {
        name: 'uid',
        description: '用户 ID',
        placeholder: '2759906397',
      },
      {
        name: 'content',
        description: '私信内容（可选）',
        placeholder: 'Hi~',
      },
    ],
    examples: ['sinaweibo://messagelist?uid=2759906397', 'sinaweibo://messagelist?uid=2759906397&content=Hi~'],
  },
  {
    id: 'weibo-groupchat',
    name: '群聊',
    description: '打开微博指定群聊',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://groupchat?id=<group_id>',
    slots: [
      {
        name: 'group_id',
        description:
          '群聊 ID。可以在浏览器打开 https://api.weibo.com/chat，在控制台 Network 中搜索 gid 关键词获取群聊 ID',
        placeholder: '4492205806407921',
      },
    ],
    examples: ['sinaweibo://groupchat?id=4492205806407921'],
  },
  {
    id: 'weibo-wblive',
    name: '微博直播',
    description: '打开微博直播（包括历史直播）',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://wblive?live_id=<live_id>',
    slots: [
      {
        name: 'live_id',
        description:
          '微博直播 ID。可以在浏览器打开相关博文，唤起控制台，搜索类似 https://weibo.com/l/wblive/p/show/1022:2321325181538798534712 的链接，末尾那个便是直播 ID。',
        placeholder: '1022:2321325181538798534712',
      },
    ],
    examples: ['sinaweibo://wblive?live_id=1022:2321325181538798534712'],
  },
  {
    id: 'weibo-wbshop',
    name: '微博小店',
    description: '打开微博小店',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://wbshop',
    examples: ['sinaweibo://wbshop'],
  },
  // TODO: 似乎跟主页打开的设置稍稍不同
  {
    id: 'weibo-setupoptions',
    name: '设置',
    description: '打开微博设置',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://setupoptions',
    examples: ['sinaweibo://setupoptions'],
  },
  {
    id: 'weibo-login',
    name: '登录',
    description: '打开微博登录页',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-10T00:00:00Z',
    urlTemplate: 'sinaweibo://login', // register 注册
    examples: ['sinaweibo://login'],
  },
]

export default WEIBO
