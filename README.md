# 📱 URL Scheme Collection

> [!IMPORTANT]
> 仓库内容源自公开途径，非法使用后果自负！

主流应用的 URL Scheme 虽然网上不难找到，但总是零零散散的。本项目旨在将它们尽可能地聚合在一起，方便查找和使用。

在线预览：[https://url-scheme-collection.vercel.app](https://url-scheme-collection.vercel.app)

欢迎 Star ⭐ 和 PR 📢 [贡献指南](./CONTRIBUTING.md)

## 📚 Lists

详细参数说明和在线演示请访问[在线预览](https://url-scheme-collection.vercel.app)。

### 应用商店

- App Store：`itms-apps://itunes.apple.com/{region}/app/{bundle_id}/id{apple_id}`
- ~~小米应用商店~~：`https://app.mi.com/details?id={package_name}`（已失效）
- 魅族应用商店：`market://details?id={package_name}`
- OPPO 应用商店：`market://details?id={package_name}`
- vivo 应用商店：`vivomarket://details?id={package_name}`
- 华为应用市场：`appmarket://details?pkgname={package_name}`
- HarmonyOS 应用市场：`hiapplink://com.huawei.appmarket?appId={app_id}`
- 荣耀应用商店：`market://details?id={package_name}`
- 三星应用商店：`samsungapps://ProductDetail/{package_name}`
- 应用宝：`tmast://appdetails?pname={package_name}`
- 酷安：`coolmarket://com.coolapk.market/apk/{package_name}`

### iOS

- 相册：`photos-redirect://`
- 短信-发送短信：`sms://{tel_number}?body={body}`
- ~~通讯录~~：`people://`（已失效）
- Apple 地图：`map://`
- Apple 邮箱：`message://`
- Apple Music 兑换：`music://music.apple.com/WebObjects/MZFinance.woa/wa/redeemLandingPage`
- Apple Music 播放页：`music://shownowplaying`
- Apple Music 主页：`music://music.apple.com/home`
- Apple Music 新发现：`music://music.apple.com/browse`
- Apple Music 广播：`music://music.apple.com/radio`
- Apple Music 搜索：`music://music.apple.com/search`
- Apple Music 搜索内容：`music://music.apple.com/search?term={keyword}`
- Apple Music 播放列表：`music://music.apple.com/library/all-playlists`
- Apple Music 指定播放列表：`music://music.apple.com/library/playlist/pl.{playlist_id}`
- Apple Music 指定歌曲：`music://music.apple.com/song/{song_id}`
- Apple Music 指定专辑：`music://music.apple.com/library/album/{album_id}`
- Apple Music 指定艺人：`music://music.apple.com/library/artist/{artist_id}`
- Apple Music 个人订阅：`music://music.apple.com/subscribe/individual`
- Apple Music 学生订阅：`music://music.apple.com/subscribe/student`
- Apple Music 家庭订阅：`music://music.apple.com/subscribe/family`
- Apple Music 续费：`music://music.apple.com/musicrenew`
- Apple Music 账户设置：`music://music.apple.com/account/settings`
- ~~App Store~~：`itms-apps://itunes.apple.com`（已失效）
- App Store Today：`itms-apps://itunes.apple.com/today`
- App Store 游戏：`itms-apps://itunes.apple.com/games`
- App Store Apps：`itms-apps://itunes.apple.com/apps`
- App Store Arcade：`itms-apps://itunes.apple.com/arcade`
- App Store 搜索：`itms-apps://itunes.apple.com/search`
- App Store 搜索内容：`itms-apps://itunes.apple.com/search?term={keyword}`
- App Store 指定应用：`itms-apps://itunes.apple.com/{region}/app/{bundle_id}/id{apple_id}`
- App Store 更新：`itms-apps://itunes.apple.com/updates`
- App Store 账户设置：`itms-ui://`
- Apple Store：`applestore://`

### macOS

- Mac App Store 探索：`macappstore://itunes.apple.com/discover`
- Mac App Store 创作：`macappstore://itunes.apple.com/create`
- Mac App Store 工作：`macappstore://itunes.apple.com/work`
- Mac App Store 游戏：`macappstore://itunes.apple.com/play`
- Mac App Store Arcade：`macappstore://itunes.apple.com/arcade`
- Mac App Store 开发：`macappstore://itunes.apple.com/develop`
- Mac App Store 类别：`macappstore://itunes.apple.com/categories`
- Mac App Store 更新：`macappstore://itunes.apple.com/updates`

### 米家

- 设备主页：`mihome://device?uid={xiaomi_id}&did={device_id}`
- 搜索商品：`mihome://searchstore?keyword={keyword}`

### 小红书

- 扫一扫：`xhsdiscover://scan`
- 图文笔记：`xhsdiscover://item/{note_id}`
- 视频笔记：`xhsdiscover://video_feed/{note_id}`
- 首页-发现：`xhsdiscover://home/explore`
- 首页-关注：`xhsdiscover://home/follow`
- 首页-同城：`xhsdiscover://home/localfeed`
- 用户主页：`xhsdiscover://user/{user_id}`
- 用户主页-Tab：`xhsdiscover://user/{user_id}?tab={tab}`
- 用户-粉丝列表：`xhsdiscover://user/{user_id}/followers`
- 我的草稿：`xhsdiscover://draft_list`
- 我的评论：`xhsdiscover://history_comment/posted`
- 浏览记录：`xhsdiscover://browsinghistory`
- 我的钱包：`xhsdiscover://rn/wallet-rn/user/wallet`
- 发布作品：`xhsdiscover://post`
- 日常：`xhsdiscover://hey_home_feed`
- 发布日常（Hey）：`xhsdiscover://hey_post`
- 搜索：`xhsdiscover://search/recommend`
- 搜索结果：`xhsdiscover://search/result?keyword={keyword}`
- 话题：`xhsdiscover://topic/{topic_id}`
- 专辑页：`xhsdiscover://board/{board_id}`
- 消息：`xhsdiscover://message/notification`
- 消息-赞和收藏：`xhsdiscover://message/collections`
- 消息-新增关注：`xhsdiscover://message/followers`
- 消息-评论和 @：`xhsdiscover://message/comments`
- 消息-陌生人消息：`xhsdiscover://message/strangers`
- 发现好友：`xhsdiscover://recommend/user`
- 通讯录好友：`xhsdiscover://recommend/contacts`
- 微博好友：`xhsdiscover://recommend/weibo`
- 直播间：`xhsdiscover://live_audience?room_id={room_id}`
- 直播广场：`xhsdiscover://live_square`
- 购物车：`xhsdiscover://rn/lancer-slim/user/shopping_cart`
- 友好市集：`xhsdiscover://home/store`
- ~~商城（旧版）~~：`xhsdiscover://mall`（已失效）
- 商品详情：`xhsdiscover://goods_detail/{goods_id}`
- 设置：`xhsdiscover://settings`
- 设置-通用：`xhsdiscover://general_setting`
- 系统设置：`xhsdiscover://system_settings`
- 账号与安全：`xhsdiscover://account/bind`
- 绑定手机号：`xhsdiscover://account/bind/phone`
- 设置-帮助与客服：`xhsdiscover://rn/eva-seraph/customHelpCenter/home`

### 微信

- 扫一扫：`weixin://scanqrcode`
- 收付款：`weixin://widget/pay`
- ~~朋友圈~~：`weixin://dl/moments`（已失效）
- ~~公众号~~：`weixin://dl/officialaccounts`（已失效）
- ~~游戏~~：`weixin://dl/games`（已失效）
- ~~个人资料~~：`weixin://dl/profile`（已失效）
- ~~设置~~：`weixin://dl/settings`（已失效）
- ~~设置-通用~~：`weixin://dl/general`（已失效）
- ~~设置-通知~~：`weixin://dl/notifications`（已失效）
- ~~聊天设置~~：`weixin://dl/chat`（已失效）
- ~~功能插件~~：`weixin://dl/features`（已失效）
- ~~反馈~~：`weixin://dl/feedback`（已失效）
- ~~帮助~~：`weixin://dl/help`（已失效）

### 企业微信

- 扫一扫：`wxwork://platformId=wechat&wwact=qrcode`
- 发起群聊：`wxwork://createconversation`
- 会话：`wxwork://message/?username={username}`
- 会话：`wxwork://launch?launch_code={code}`
- 消息：`wxwork://message`
- 文档：`wxwork://jump?target=doc_tab`
- 第三方应用：`wxwork://jump?target=jump_to_third_app&businessid={businessid}`
- 个人信息：`wxwork://jump?target=my_profile`
- 绑定微信：`wxwork://jump?target=rebindwx`

### 微博

- 扫一扫：`sinaweibo://qrcode`
- 微博详情：`sinaweibo://detail?mblogid={mblogid}`
- 搜索：`sinaweibo://searchall?q={content}`
- 发微博：`sinaweibo://sendweibo?content={content}`
- ~~草稿箱~~：`sinaweibo://draftbox`（已失效）
- 首页：`sinaweibo://gotohome`
- 视频：`sinaweibo://gotovideo`
- 发现：`sinaweibo://discover`
- 消息：`sinaweibo://message`
- 消息-@我的：`sinaweibo://atlist`
- 消息-评论：`sinaweibo://commentlist`
- 消息-赞：`sinaweibo://likelist`
- 我的：`sinaweibo://myprofile`
- 用户主页：`sinaweibo://userinfo?uid={uid}`
- 我的二维码：`sinaweibo://myqrcode`
- 关注的人：`sinaweibo://followerslist`
- 粉丝群：`sinaweibo://fansgroup`
- 私信：`sinaweibo://messagelist?uid={uid}&content={content}`
- 群聊：`sinaweibo://groupchat?id={group_id}`
- 超话社区：`sinaweibo://sgdiscovery`
- 超话：`sinaweibo://pageinfo?containerid={containerid}`
- 微博直播：`sinaweibo://wblive?live_id={live_id}`
- 微博小店：`sinaweibo://wbshop`
- 设置：`sinaweibo://setupoptions`
- 登录：`sinaweibo://login`

### 知乎

- 首页推荐流：`zhihu://feed/item/recommend`
- 用户主页：`zhihu://people/{user_id}`
- 文章：`zhihu://articles/{article_id}`
- 问题：`zhihu://questions/{question_id}`
- 回答：`zhihu://answers/{answer_id}`
- 写回答：`zhihu://answer/editor/{question_id}`
- 专栏：`zhihu://columns/{column_id}`
- 收藏夹：`zhihu://collection/{collection_id}`
- 视频：`zhihu://zvideo/{video_id}`
- 提问：`zhihu://ask`
- 想法：`zhihu://pin/{pin_id}`
- 话题：`zhihu://topics/{topic_id}`
- 搜索：`zhihu://search`
- 搜索内容：`zhihu://search?q={keyword}`
- 盐选会员：`zhihu://vip/purchase`
- 设置：`zhihu://settings`
- 动态设置：`zhihu://dynamic/settings`
- 扫一扫：`zhihu://codereader`

### 支付宝

- 扫一扫：`alipay://platformapi/startapp?saId=10000007`
- 付款码：`alipay://platformapi/startapp?appId=20000056`
- 收款码：`alipay://platformapi/startapp?appId=20000123`
- 蚂蚁森林：`alipay://platformapi/startapp?appId=60000002`
- 蚂蚁庄园：`alipay://platformapi/startapp?appId=66666674`
- 我的快递：`alipay://platformapi/startapp?appId=20000754`
- 充值中心：`alipay://platformapi/startapp?saId=10000003`
- 生活缴费：`alipay://platformapi/startapp?appId=20000193`
- 总资产：`alipay://platformapi/startapp?appId=20000243`
- 余额：`alipay://platformapi/startapp?appId=20000019`
- 账单：`alipay://platformapi/startapp?appId=20000003`
- 转账：`alipay://platformapi/startapp?saId=20000116`
- 银行卡：`alipay://platformapi/startapp?appId=20000014`
- 余额宝：`alipay://platformapi/startapp?appId=20000032`
- 花呗/信用购：`alipay://platformapi/startapp?appId=20000199`
- 养老金：`alipay://platformapi/startapp?appId=68687131`
- 商家服务：`alipay://platformapi/startapp?appId=60000081`
- 记账本：`alipay://platformapi/startapp?appId=20000168`
- 会员：`alipay://platformapi/startapp?appId=20000160`
- 通讯录：`alipay://platformapi/startapp?appId=20000166`
- 饿了么小程序：`alipay://platformapi/startapp?appId=20000120`
- 滴滴出行小程序：`alipay://platformapi/startapp?appId=20000778`
- 共享单车：`alipay://platformapi/startapp?appId=60000155`
- 理财-基金：`alipay://platformapi/startapp?appId=20000793`
- 理财-股票：`alipay://platformapi/startapp?appId=20000134`
- 理财-定期：`alipay://platformapi/startapp?appId=20000165`
- 理财-黄金：`alipay://platformapi/startapp?appId=20000218`
- 搜索：`alipay://platformapi/startapp?appId=20001003`

### 抖音

- 扫一扫：`snssdk1128://aweme/scan`
- 抖音热榜：`snssdk1128://search/trending`
- 直播人气榜：`snssdk1128://webcast_board/hot_live_rank`
- 首页：`snssdk1128://land_tab?tabid={tabid}`
- 搜索：`snssdk1128://search?keyword={keyword}`
- AI 搜索：`snssdk1128://search/aigc?search_keyword={keyword}`
- 用户主页：`snssdk1128://user/profile/{uid}`
- 视频创作：`snssdk1128://aweme/create`
- 日常创作：`snssdk1128://aweme/closefriends/moments`
- 音乐详情（拍同款）：`snssdk1128://music/detail/{id}`
- 我的：`snssdk1128://user/homepage`
- 我的-编辑主页：`snssdk1128://profile_edit`
- 我的钱包：`snssdk1128://wallet`
- 粉丝求更新：`snssdk1128://im/fansPush`
- 稍后再看：`snssdk1128://aweme/watch_later_list`
- 视频作品：`snssdk1128://aweme/detail/{aweme_id}`
- 直播广场：`snssdk1128://webcast_feed`
- 直播间：`snssdk1128://webcast_room?id={room_id}`
- 开直播：`snssdk1128://webcast_open_live`
- 商城-我的订单：`snssdk1128://ecom_order_list`
- 商城-搜索：`snssdk1128://ec_search`
- 小程序：`snssdk1128://microapp?app_id={app_id}&version=v2`
- 小游戏：`snssdk1128://microgame?app_id={app_id}&version=v2`
- 消息：`snssdk1128://land_tab?tabid=homepage_notification`
- 设置：`snssdk1128://setting`
- 设置-通用设置：`snssdk1128://setting/common`
- 设置-隐私设置：`snssdk1128://privacy/setting`
- 设置-浏览和访客：`snssdk1128://setting/viewer_and_visitor`
- 未成年人模式：`snssdk1128://teenage/setting`

### 淘宝

- 我的-收藏：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fweb.m.taobao.com%2Fapp%2Fmessage-social-front%2Fitao-favor-weex2%2Findex%3Fwh_weex%3Dtrue%26weex_mode%3Ddom%26wx_navbar_hidden%3Dtrue%26wx_statusbar_hidden%3Dtrue%26collection_source%3Dtool`
- 我的-关注：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fweb.m.taobao.com%2Fapp%2Fsubscription-client-side%2Ffollow-shop-list%2Fshop-list%3Fwh_weex%3Dtrue%26weex_mode%3Ddom%26wx_navbar_hidden%3Dtrue%26wx_navbar_transparent%3Dtrue%26_wx_statusbar_hidden%3Dtrue%26is_loading%3D0%26disableNav%3DYES%26source%3DmyTaoBaoNew`
- 我的-红包：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fbz%2Fjingmi%2F1592%3FdisableNav%3DYES%26tabType%3DredEnvelope`
- 我的-足迹：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fweb.m.taobao.com%2Fapp%2Fmessage-social-front%2Ffootprint%2Fhome%3Fwh_weex%3Dtrue%26weex_mode%3Ddom%26wx_navbar_hidden%3Dtrue%26wx_statusbar_hidden%3Dtrue%26myTaobao24Ver%3D5`
- 我的-优惠券：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fbz%2Fjingmi%2F1592%3FdisableNav%3DYES%26tabType%3Dcoupon`
- 我的-淘金币：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Ftmtjb%2Ftown%2Fhome%3FdisableNav%3DYES`
- 我的-天猫积分：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fblackvip%2Fpoint%2Fsuper%3FdisableNav%3DYES`
- 天天领红包：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fbz%2Fjingmi%2F1592%3FdisableNav%3DYES%26tabType%3DredEnvelope%26dailyRedPacket%3Dtrue%26dailyRedPacketAnchor%3Dtrue`
- 红包签到：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fvip%2Fhbqd5%2Fhbqd5.0%3FdisableNav%3DYES`
- 商品详情：`taobao://item.taobao.com/item.htm?id={item_id}`
- 搜索：`taobao://s.taobao.com/search?q={keyword}`
- 拍照搜索：`taobao://h5.m.taobao.com/tusou/capture.html`
- 购物车：`taobao://cart.taobao.com/my_cart.htm`
- 我的淘宝：`taobao://my.m.taobao.com/myTaobao.htm`
- 我的订单：`taobao://go/my_orders`
- 订单详情：`taobao://go/order_detail?orderId={order_id}`
- 消息：`taobao://message/root`
- 淘宝省钱卡：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fapp%2Ftb-vip%2Fmonth-card-v2%2Fhome%3FdisableNav%3DYES`
- 芭芭农场：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fmarket.m.taobao.com%2Fapp%2Ftmall-wireless%2Ftmallfarm%2Findex.html%3FdisableNav%3DYES`
- 上新：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fheihe%2Fxinpin-tab%2Fshangxin%3FdisableNav%3DYES%26skeleton%3Dtrue`
- 百亿补贴：`taobao://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fbz%2Fjingmi%2F600%3FdisableNav%3DYES`
- 天猫国际：`tbopen://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fpages-fast.m.taobao.com%2Fwow%2Fz%2Fimport%2Ftmg-ice-home%2Findex%3Fx-ssr%3Dtrue%26disableNav%3DYES%26status_bar_transparent%3Dtrue%26slk_gid%3Dgid_er_sidebar_1&action=ali.open.nav&module=h5&bootImage=0&slk_sid=rnd85521f_1755963565776&slk_t=1755963566011&slk_gid=gid_er_sidebar_1&afcPromotionOpen=false&bc_fl_src=h5_huanduan&source=slk_dp`

### 美团

- 首页：`imeituan://www.meituan.com/home`
- 消息：`imeituan://www.meituan.com/messagecenter`
- 购物车：`imeituan://www.meituan.com/tabshoppingcart`
- 我的：`imeituan://www.meituan.com/user`
- 更多服务：`imeituan://www.meituan.com/morecates`
- 酒店民宿：`imeituan://www.meituan.com/hotel/homepage`
- 搜索酒店民宿：`imeituan://www.meituan.com/hotel/search/input`
- 搜索酒店民宿（海外）：`imeituan://www.meituan.com/overseahotel/search`
- 预订酒店民宿：`imeituan://www.meituan.com/mrn?productId={product_id}&startDate={startDate}&endDate={endDate}&bizType=0&mrn_biz=zhenguo&mrn_entry=product&mrn_component=zhenguo-product`
- 美食：`imeituan://www.meituan.com/food/homepage`
- 美食店铺：`imeituan://www.meituan.com/mrn?mrn_biz=meishi&mrn_entry=food-poi&mrn_component=food-poi&poiId={poi_id}`
- 景点详情：`imeituan://www.meituan.com/travel/poi?id={poi_id}`
- 美团钱包：`imeituan://wallet/launch`

### QQ 音乐

- 听歌识曲：`qqmusic://qq.com/ui/recognize`
- 播放歌曲：`qqmusic://qq.com/media/playSonglist?p=%7B%22action%22%3A%22play%22%2C%22song%22%3A%5B%7B%22songmid%22%3A%22{song_mid}%22%7D%5D%7D`
- 恢复播放：`qqmusic://qq.com/media/resumeSong`
- 最近播放：`qqmusic://today?mid=31&k1=2&k4=0`
- 猜你喜欢：`qqmusic://qq.com/media/playRadio?p=%7B%22radioId%22%3A%2299%22%7D`
- 本地音乐：`qqmusic://today?mid=31&k1=3&k4=0`
- 我的收藏：`qqmusic://qq.com/ui/myTab?p=%7B%22tab%22%3A%22fav%22%7D`
- 歌单：`qqmusic://qq.com/ui/gedan?p=%7B%22id%22%3A%22{gedan_id}%22%7D`
- 个人主页：`qqmusic://qq.com/ui/profile`

### 稀土掘金

- 签到：`snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fuser%2Fcenter%2Fsignin%22%7D`
- 用户主页：`snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fuser%2F{user_id}%22%7D`
- 文章：`snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fpost%2F{post_id}%22%7D`
- 专栏：`snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fcolumn%2F{column_id}%22%7D`
- 收藏集：`snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fcollection%2F{collection_id}%22%7D`
- 课程：`snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fcourse%22%7D`
- 掘金小册：`snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fbook%2F{book_id}%22%7D`
- 字节内部课：`snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fcourse%2Fbytetech%2F{course_id}%22%7D`
- 沸点：`snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fpins%22%7D`
- 沸点详情：`snssdk2606://?zlink_data=%7B%22redirecturl%22%3A%22https%3A%2F%2Fjuejin.cn%2Fpin%2F{pin_id}%22%7D`

### 简书

- 文章：`jianshu://notes/{article_id}`
- 专题：`jianshu://collections/{collection_id}`
- 文集：`jianshu://notebooks/{notebook_id}`
- 用户主页：`jianshu://users/{user_id}`

### VS Code

- 打开文件（夹）：`vscode://file/{file_or_folder_path}`
- 打开文件行列：`vscode://file/{file_path}:{line}:{column}`
- 设置：`vscode://settings/{setting_id}`
- 扩展：`vscode:extension/{extension_id}`
- 安装 MCP：`vscode:mcp/by-name/{server_name}`
- 安装 MCP：`vscode:mcp/install?{mcp_config}`

### Cursor

- 打开文件（夹）：`cursor://file/{file_or_folder_path}`
- 打开文件行列：`cursor://file/{file_path}:{line}:{column}`
- 设置：`cursor://settings/{setting_id}`
- 扩展：`cursor:extension/{extension_id}`
- Cursor AI 设置：`cursor://settings/aisettings`
- 使用 Prompt 创建 Chat：`cursor://anysphere.cursor-deeplink/prompt?text={prompt}`
- 安装 MCP：`cursor://anysphere.cursor-deeplink/mcp/install?name={name}&config={config}`

### Raycast

- 撒花 🎉：`raycast://confetti`
- 安装扩展：`raycast://extensions/{author_or_owner_id}/{extension_name}`
- 执行扩展命令：`raycast://extensions/{author_or_owner_id}/{extension_name}/{command_name}`

### ClashX

- 添加配置文件：`clash://install-config?url={config_url}&name={config_name}`
- ~~更新配置文件~~：`clash://update-config`（已失效）
- ~~切换状态~~：`clash://toggle`（已失效）

### Chrome

- 可用列表：`chrome://chrome-urls`
- 新标签页：`chrome://newtab`
- 扩展程序：`chrome://extensions`
- 书签管理器：`chrome://bookmarks`
- 历史记录：`chrome://history`
- 下载记录：`chrome://downloads`
- 设置：`chrome://settings`
- 设置-关于 Chrome：`chrome://settings/help`
- Chrome Skills：`chrome://skills/browse`
- Web 应用：`chrome://apps`
- 调试：`chrome://inspect`
- 实验性功能：`chrome://flags`
- 版本信息：`chrome://version`
- 新变化：`chrome://whats-new`
- 崩溃报告：`chrome://crashes`
- 系统诊断：`chrome://system`
- 网络统计：`chrome://net-internals`
- GPU 信息：`chrome://gpu`

### Slack

- 打开 Slack：`slack://open`
- 打开 Slack 团队：`slack://open?team={team_id}`
- 打开 Slack 频道：`slack://channel?team={team_id}&id={channel_id}`
- 打开 Slack 对话：`slack://user?team={team_id}&id={user_id}`
- 打开 Slack 应用主页：`slack://app?team={team_id}&id={app_id}`
- 打开 Slack 文件：`slack://file?team={team_id}&id={file_id}`
- 分享 Slack 文件：`slack://share-file?team={team_id}&id={file_id}`

## 📝 License

[MIT](./LICENSE) License © [Frankie](https://github.com/tofrankie)
