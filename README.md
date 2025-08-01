# 收录 URL Schema

欢迎 PR 补充！

## 应用商店

旨在唤起应用商店的应用详情页，以微信为例。

- iOS：`itms-apps://itunes.apple.com/cn/app/wechat/id414478124`
  - `cn` 为国区，`us` 为美区，其他欢迎补充
  - `wechat` 为应用 Bundle ID，id 后面的数字为该应用第一次上架时 App Store 分配的 Apple ID，这些信息在 [App Store Connect](https://appstoreconnect.apple.com) 查阅。
  - 以上信息也可以在手机应用商店里分享拷贝链接获取。
- OPPO：`market://details?id=com.tencent.mm`
  - 包括真我和一加
- vivo：`vivomarket://details?id=com.tencent.mm`
  - 包括 iQOO
- 小米：`https://app.mi.com/details?id=com.tencent.mm`
  - 先打开浏览器再唤起应用商店
  - ~~原先 `mimarket://details?id=com.tencent.mm` 或 `mimarket://details?appId=1122` 已失效，可以跳转到应用商店，但会提示「因服务升级，旧版应用详情页已停止使用，您可尝试搜索并安装此应用」~~
  - [直投 2.0 介绍](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=1350)
