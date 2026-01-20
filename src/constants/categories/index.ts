import type { UrlScheme, UrlSchemeWithoutCategory, Category } from '@/types'
import APP_STORE from './app-store'
import IOS from './ios'
import MACOS from './macos'
import MIHOME from './mihome'
import XIAOHONGSHU from './xiaohongshu'
import WECHAT from './wechat'
import WXWORK from './wxwork'
import WEIBO from './weibo'
import ZHIHU from './zhihu'
import ALIPAY from './alipay'
import DOUYIN from './douyin'
import TAOBAO from './taobao'
import MEITUAN from './meituan'
import QQMUSIC from './qqmusic'
import XITU from './xitu'
import JIANSHU from './jianshu'
import VSCODE from './vscode'
import CURSOR from './cursor'
import RAYCAST from './raycast'
import CLASHX from './clashx'
import CHROME from './chrome'
import SLACK from './slack'

export const CATEGORY_IDS = {
  APP_STORE: 'app_store',
  IOS: 'ios',
  MACOS: 'macos',
  MIHOME: 'mihome',
  XIAOHONGSHU: 'xiaohongshu',
  WECHAT: 'wechat',
  WXWORK: 'wxwork',
  WEIBO: 'weibo',
  ZHIHU: 'zhihu',
  ALIPAY: 'alipay',
  DOUYIN: 'douyin',
  TAOBAO: 'taobao',
  MEITUAN: 'meituan',
  QQMUSIC: 'qqmusic',
  XITU: 'xitu',
  JIANSHU: 'jianshu',
  VSCODE: 'vscode',
  CURSOR: 'cursor',
  RAYCAST: 'raycast',
  CLASHX: 'clashx',
  CHROME: 'chrome',
  SLACK: 'slack',
} as const

export type CategoryId = (typeof CATEGORY_IDS)[keyof typeof CATEGORY_IDS]

export const CATEGORIES: Category[] = [
  {
    id: CATEGORY_IDS.APP_STORE,
    name: '应用商店',
    description: '唤起 App Store 和 Android 各应用商店的应用。',
  },
  {
    id: CATEGORY_IDS.IOS,
    name: 'iOS',
    description:
      'iOS 18.5+ 后 Apple 似乎严格限制偏好设置访问，类似 Prefs:root=General、App-prefs://、settings-navigation://com.apple.Settings.Apps 等已失效。',
  },
  {
    id: CATEGORY_IDS.MACOS,
    name: 'macOS',
    description: 'macOS 相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.MIHOME,
    name: '米家',
    description: '米家相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.XIAOHONGSHU,
    name: '小红书',
    description:
      '小红书相关 URL Scheme。注意，iOS 和 Android 的部分 URL Scheme 前缀可能不同，iOS 为 xhsdiscover://，Android 为 xhsdiscovery://。',
  },
  {
    id: CATEGORY_IDS.WECHAT,
    name: '微信',
    description: '类似 weixin://dl/moments、weixin://dl/profile 等一系列 URL Scheme 已失效。',
  },
  {
    id: CATEGORY_IDS.WXWORK,
    name: '企业微信',
    description: '企业微信相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.WEIBO,
    name: '微博',
    description: '微博相关 URL Scheme。国际版以 weibointernational:// 开头。',
  },
  {
    id: CATEGORY_IDS.ZHIHU,
    name: '知乎',
    description: '知乎相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.ALIPAY,
    name: '支付宝',
    description: '支付宝相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.DOUYIN,
    name: '抖音',
    description: '抖音以 snssdk1128:// 开头，抖音极速版以 snssdk2329:// 开头，TikTok 以 snssdk1233:// 开头。',
  },
  {
    id: CATEGORY_IDS.TAOBAO,
    name: '淘宝',
    description: '淘宝相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.MEITUAN,
    name: '美团',
    description: '美团相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.QQMUSIC,
    name: 'QQ 音乐',
    description: 'QQ 音乐相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.XITU,
    name: '稀土掘金',
    description: '稀土掘金相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.JIANSHU,
    name: '简书',
    description: '简书相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.VSCODE,
    name: 'VS Code',
    description: '稳定版以 vscode:// 开头，预览版以 vscode-insiders:// 开头。',
  },
  {
    id: CATEGORY_IDS.CURSOR,
    name: 'Cursor',
    description: '基本与 VS Code 相同，不同在于前缀是 cursor://。',
  },
  {
    id: CATEGORY_IDS.RAYCAST,
    name: 'Raycast',
    description: 'Raycast 相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.CLASHX,
    name: 'ClashX',
    description: 'ClashX 相关 URL Scheme。',
  },
  {
    id: CATEGORY_IDS.CHROME,
    name: 'Chrome',
    description:
      '出于安全考虑，普通网页无法通过脚本访问 chrome:// 页面，只能在地址栏输入。开发 Chrome Extension 时可以使用 API chrome.runtime.openOptionsPage() 唤起。',
  },
  {
    id: CATEGORY_IDS.SLACK,
    name: 'Slack',
    description: 'Slack 相关 URL Scheme。',
  },
] as const

export const CATEGORY_SCHEMES_MAP: Record<CategoryId, UrlSchemeWithoutCategory[]> = {
  [CATEGORY_IDS.APP_STORE]: APP_STORE,
  [CATEGORY_IDS.IOS]: IOS,
  [CATEGORY_IDS.MACOS]: MACOS,
  [CATEGORY_IDS.MIHOME]: MIHOME,
  [CATEGORY_IDS.XIAOHONGSHU]: XIAOHONGSHU,
  [CATEGORY_IDS.WECHAT]: WECHAT,
  [CATEGORY_IDS.WXWORK]: WXWORK,
  [CATEGORY_IDS.WEIBO]: WEIBO,
  [CATEGORY_IDS.ZHIHU]: ZHIHU,
  [CATEGORY_IDS.ALIPAY]: ALIPAY,
  [CATEGORY_IDS.DOUYIN]: DOUYIN,
  [CATEGORY_IDS.TAOBAO]: TAOBAO,
  [CATEGORY_IDS.MEITUAN]: MEITUAN,
  [CATEGORY_IDS.QQMUSIC]: QQMUSIC,
  [CATEGORY_IDS.XITU]: XITU,
  [CATEGORY_IDS.JIANSHU]: JIANSHU,
  [CATEGORY_IDS.VSCODE]: VSCODE,
  [CATEGORY_IDS.CURSOR]: CURSOR,
  [CATEGORY_IDS.RAYCAST]: RAYCAST,
  [CATEGORY_IDS.CLASHX]: CLASHX,
  [CATEGORY_IDS.CHROME]: CHROME,
  [CATEGORY_IDS.SLACK]: SLACK,
} as const

export const URL_SCHEMES: UrlScheme[] = Object.entries(CATEGORY_SCHEMES_MAP).flatMap(([categoryId, schemes]) =>
  schemes.map(scheme => ({
    ...scheme,
    category: categoryId as CategoryId,
  }))
)
