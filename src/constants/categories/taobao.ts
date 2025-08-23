import type { UrlSchemeWithoutCategory } from '@/types'

const TAOBAO: UrlSchemeWithoutCategory[] = [
  {
    id: 'taobao-favor',
    name: '我的-收藏',
    description: '打开淘宝我的收藏',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fweb.m.taobao.com%2Fapp%2Fmessage-social-front%2Fitao-favor-weex2%2Findex%3Fwh_weex%3Dtrue%26weex_mode%3Ddom%26wx_navbar_hidden%3Dtrue%26wx_statusbar_hidden%3Dtrue%26collection_source%3Dtool',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fweb.m.taobao.com%2Fapp%2Fmessage-social-front%2Fitao-favor-weex2%2Findex%3Fwh_weex%3Dtrue%26weex_mode%3Ddom%26wx_navbar_hidden%3Dtrue%26wx_statusbar_hidden%3Dtrue%26collection_source%3Dtool',
    ],
  },
  {
    id: 'taobao-follow-shop',
    name: '我的-关注',
    description: '打开淘宝我的关注（店铺）',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fweb.m.taobao.com%2Fapp%2Fsubscription-client-side%2Ffollow-shop-list%2Fshop-list%3Fwh_weex%3Dtrue%26weex_mode%3Ddom%26wx_navbar_hidden%3Dtrue%26wx_navbar_transparent%3Dtrue%26_wx_statusbar_hidden%3Dtrue%26is_loading%3D0%26disableNav%3DYES%26source%3DmyTaoBaoNew',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fweb.m.taobao.com%2Fapp%2Fsubscription-client-side%2Ffollow-shop-list%2Fshop-list%3Fwh_weex%3Dtrue%26weex_mode%3Ddom%26wx_navbar_hidden%3Dtrue%26wx_navbar_transparent%3Dtrue%26_wx_statusbar_hidden%3Dtrue%26is_loading%3D0%26disableNav%3DYES%26source%3DmyTaoBaoNew',
    ],
  },
  {
    id: 'taobao-red-envelope',
    name: '我的-红包',
    description: '打开淘宝我的红包',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fbz%2Fjingmi%2F1592%3FdisableNav%3DYES%26tabType%3DredEnvelope',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fbz%2Fjingmi%2F1592%3FdisableNav%3DYES%26tabType%3DredEnvelope',
    ],
  },
  {
    id: 'taobao-footprint',
    name: '我的-足迹',
    description: '打开淘宝我的足迹',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fweb.m.taobao.com%2Fapp%2Fmessage-social-front%2Ffootprint%2Fhome%3Fwh_weex%3Dtrue%26weex_mode%3Ddom%26wx_navbar_hidden%3Dtrue%26wx_statusbar_hidden%3Dtrue%26myTaobao24Ver%3D5',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fweb.m.taobao.com%2Fapp%2Fmessage-social-front%2Ffootprint%2Fhome%3Fwh_weex%3Dtrue%26weex_mode%3Ddom%26wx_navbar_hidden%3Dtrue%26wx_statusbar_hidden%3Dtrue%26myTaobao24Ver%3D5',
    ],
  },
  {
    id: 'taobao-dailygroup',
    name: '我的-优惠券',
    description: '打开淘宝我的优惠券',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fbz%2Fjingmi%2F1592%3FdisableNav%3DYES%26tabType%3Dcoupon',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fbz%2Fjingmi%2F1592%3FdisableNav%3DYES%26tabType%3Dcoupon',
    ],
  },
  {
    id: 'taobao-jinbi',
    name: '我的-淘金币',
    description: '打开淘宝我的淘金币（可快速签到）',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Ftmtjb%2Ftown%2Fhome%3FdisableNav%3DYES',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Ftmtjb%2Ftown%2Fhome%3FdisableNav%3DYES',
    ],
  },
  {
    id: 'taobao-blackvip-point-super',
    name: '我的-天猫积分',
    description: '打开淘宝我的天猫积分',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fblackvip%2Fpoint%2Fsuper%3FdisableNav%3DYES',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fblackvip%2Fpoint%2Fsuper%3FdisableNav%3DYES',
    ],
  },
  {
    id: 'taobao-daily-red-packet',
    name: '天天领红包',
    description: '打开淘宝天天领红包',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fbz%2Fjingmi%2F1592%3FdisableNav%3DYES%26tabType%3DredEnvelope%26dailyRedPacket%3Dtrue%26dailyRedPacketAnchor%3Dtrue',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fbz%2Fjingmi%2F1592%3FdisableNav%3DYES%26tabType%3DredEnvelope%26dailyRedPacket%3Dtrue%26dailyRedPacketAnchor%3Dtrue',
    ],
  },
  {
    id: 'taobao-hbqd5',
    name: '红包签到',
    description: '打开淘宝红包签到',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fvip%2Fhbqd5%2Fhbqd5.0%3FdisableNav%3DYES',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fvip%2Fhbqd5%2Fhbqd5.0%3FdisableNav%3DYES',
    ],
  },
  {
    id: 'taobao-item',
    name: '商品详情',
    description: '打开淘宝指定商品详情',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'taobao://item.taobao.com/item.htm?id={item_id}',
    slots: [
      {
        name: 'item_id',
        description: '商品 ID',
        placeholder: '894938883251',
      },
    ],
    examples: ['taobao://item.taobao.com/item.htm?id=894938883251'],
  },
  {
    id: 'taobao-search',
    name: '搜索',
    description: '打开淘宝搜索（搜宝贝）',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'taobao://s.taobao.com/search?q={keyword}',
    slots: [
      {
        name: 'keyword',
        description: '搜索关键词',
        placeholder: 'adererror',
      },
    ],
    examples: ['taobao://s.taobao.com/search?q=adererror', 'taobao://s.m.taobao.com/search.htm?q=adererror'],
  },
  {
    id: 'taobao-tusou-capture',
    name: '拍照搜索',
    description: '打开淘宝并拍照搜索',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'taobao://h5.m.taobao.com/tusou/capture.html',
    examples: ['taobao://h5.m.taobao.com/tusou/capture.html'],
  },
  {
    id: 'taobao-cart',
    name: '购物车',
    description: '打开淘宝购物车',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'taobao://cart.taobao.com/my_cart.htm',
    examples: ['taobao://cart.taobao.com/my_cart.htm'],
  },
  {
    id: 'taobao-my-taobao',
    name: '我的淘宝',
    description: '打开淘宝-我的淘宝',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'taobao://my.m.taobao.com/myTaobao.htm',
    examples: ['taobao://my.m.taobao.com/myTaobao.htm'],
  },
  {
    id: 'taobao-my-orders',
    name: '我的订单',
    description: '打开淘宝我的订单',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'taobao://go/my_orders',
    examples: ['taobao://go/my_orders', 'taobao://go/goOrderlist'],
  },
  {
    id: 'taobao-order-detail',
    name: '订单详情',
    description: '打开淘宝指定订单详情',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'taobao://go/order_detail?orderId={order_id}',
    slots: [
      {
        name: 'order_id',
        description: '订单 ID',
        placeholder: 'xxx',
      },
    ],
    examples: ['taobao://go/order_detail?orderId=xxx'],
  },
  {
    id: 'taobao-message-root',
    name: '消息',
    description: '打开淘宝消息（列表）',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'taobao://message/root',
    examples: ['taobao://message/root'],
  },
  {
    id: 'taobao-month-card',
    name: '淘宝省钱卡',
    description: '打开淘宝省钱卡',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fapp%2Ftb-vip%2Fmonth-card-v2%2Fhome%3FdisableNav%3DYES',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fapp%2Ftb-vip%2Fmonth-card-v2%2Fhome%3FdisableNav%3DYES',
    ],
  },
  {
    id: 'taobao-tmallfarm',
    name: '芭芭农场',
    description: '打开淘宝芭芭农场',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fmarket.m.taobao.com%2Fapp%2Ftmall-wireless%2Ftmallfarm%2Findex.html%3FdisableNav%3DYES',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fmarket.m.taobao.com%2Fapp%2Ftmall-wireless%2Ftmallfarm%2Findex.html%3FdisableNav%3DYES',
    ],
  },
  {
    id: 'taobao-xinpin',
    name: '上新',
    description: '打开淘宝新品（上新）',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fheihe%2Fxinpin-tab%2Fshangxin%3FdisableNav%3DYES%26skeleton%3Dtrue',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fheihe%2Fxinpin-tab%2Fshangxin%3FdisableNav%3DYES%26skeleton%3Dtrue',
    ],
  },
  {
    id: 'taobao-bbyt',
    name: '百亿补贴',
    description: '打开淘宝百亿补贴',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fbz%2Fjingmi%2F600%3FdisableNav%3DYES',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fbz%2Fjingmi%2F600%3FdisableNav%3DYES',
    ],
  },
  {
    id: 'taobao-tmall-international',
    name: '天猫国际',
    description: '打开天猫国际',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate:
      'tbopen://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fimport%2Ftmg-ice-home%2Findex%3Fx-ssr%3Dtrue%26disableNav%3DYES%26status_bar_transparent%3Dtrue%26slk_gid%3Dgid_er_sidebar_1&action=ali.open.nav&module=h5&bootImage=0&slk_sid=rnd85521f_1755963565776&slk_t=1755963566011&slk_gid=gid_er_sidebar_1&afcPromotionOpen=false&bc_fl_src=h5_huanduan&source=slk_dp',
    examples: [
      'taobao://m.taobao.com/tbopen/index.html?h5Url=https://pages.tmall.com/wow/z/import/pha/pha-index?disableNav=YES',
    ],
  },
]

export default TAOBAO
