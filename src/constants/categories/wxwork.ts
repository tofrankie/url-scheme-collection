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
  {
    id: 'wxwork-my-profile',
    name: '个人信息',
    description: '打开企业微信个人信息',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'wxwork://jump?target=my_profile',
    examples: ['wxwork://jump?target=my_profile'],
  },
  {
    id: 'wxwork-create-conversation',
    name: '发起群聊',
    description: '打开企业微信并发起（创建）群聊',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'wxwork://createconversation',
    examples: ['wxwork://createconversation'],
  },
  {
    id: 'wxwork-message',
    name: '会话',
    description: '打开企业微信会话',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'wxwork://message/?username={username}',
    slots: [
      {
        name: 'username',
        description: '用户名',
        placeholder: 'xxx',
      },
    ],
    examples: ['wxwork://message/?username=xxx'],
  },
  {
    id: 'wxwork-launch',
    name: '会话',
    description: '打开企业微信会话（仅限企业内部用户）',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'wxwork://launch?launch_code={code}',
    slots: [
      {
        name: 'code',
        description: '可根据文档通过接口获取 https://developer.work.weixin.qq.com/document/path/94345',
        placeholder: 'xxx',
      },
    ],
    examples: ['wxwork://launch?launch_code=xxx'],
  },
  {
    id: 'wxwork-message-tab',
    name: '消息',
    description: '打开企业微信消息 Tab',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'wxwork://message',
    examples: ['wxwork://message'],
  },
  {
    id: 'wxwork-doc-tab',
    name: '文档',
    description: '打开企业微信文档 Tab',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'wxwork://jump?target=doc_tab',
    examples: ['wxwork://jump?target=doc_tab'],
  },
  {
    id: 'wxwork-jump-to-third-app',
    name: '跳转第三方应用',
    description: '打开企业微信并跳转第三方应用',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'wxwork://jump?target=jump_to_third_app&businessid={businessid}',
    slots: [
      {
        name: 'businessid',
        description: '应用 ID',
        placeholder: '10081',
      },
    ],
    examples: ['wxwork://jump?target=jump_to_third_app&businessid=10081'],
  },
  {
    id: 'wxwork-rebindwx',
    name: '重新绑定微信',
    description: '打开企业微信重新绑定微信',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'wxwork://jump?target=rebindwx',
    examples: ['wxwork://jump?target=rebindwx'],
  },
]

export default WXWORK
