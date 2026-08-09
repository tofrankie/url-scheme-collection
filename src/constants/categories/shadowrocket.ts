import type { UrlSchemeWithoutCategory } from '@/types'
import { encode } from 'js-base64'

// TODO: 更新订阅、连通性测试、切换全局路由似乎不起作用（iOS 26）
// https://github.com/LOWERTOP/Shadowrocket#url-schemes
const SHADOWROCKET: UrlSchemeWithoutCategory[] = [
  {
    id: 'shadowrocket-connect',
    name: '打开 VPN 开关',
    description: '打开 Shadowrocket 并启动 VPN 隧道',
    contributors: ['tofrankie'],
    updatedAt: '2026-08-09T00:00:00Z',
    urlSchemeTemplate: 'shadowrocket://connect',
    examples: ['shadowrocket://connect', 'shadowrocket://open'],
  },
  {
    id: 'shadowrocket-disconnect',
    name: '关闭 VPN 开关',
    description: '打开 Shadowrocket 并关闭 VPN 隧道',
    contributors: ['tofrankie'],
    updatedAt: '2026-08-09T00:00:00Z',
    urlSchemeTemplate: 'shadowrocket://disconnect',
    examples: ['shadowrocket://disconnect', 'shadowrocket://close'],
  },
  {
    id: 'shadowrocket-toggle',
    name: '切换 VPN 开关',
    description: '打开 Shadowrocket 并切换 VPN 开关',
    contributors: ['tofrankie'],
    updatedAt: '2026-08-09T00:00:00Z',
    urlSchemeTemplate: 'shadowrocket://toggle',
    examples: ['shadowrocket://toggle'],
  },
  {
    id: 'shadowrocket-connectivity-test',
    name: '连通性测试',
    description: '打开 Shadowrocket 并进行连通性测试',
    contributors: ['tofrankie'],
    updatedAt: '2026-08-09T00:00:00Z',
    urlSchemeTemplate: 'shadowrocket://connectivity-test',
    examples: ['shadowrocket://connectivity-test'],
  },
  {
    id: 'shadowrocket-add-subscribe',
    name: '添加订阅节点',
    description: '打开 Shadowrocket 并添加订阅节点',
    contributors: ['tofrankie'],
    updatedAt: '2026-08-09T00:00:00Z',
    urlSchemeTemplate: 'shadowrocket://add/sub://{url}?remark={remark}',
    slots: [
      {
        name: 'url',
        description:
          '订阅链接。打个小广，如果你想尝试「优云 666」可以使用作者的邀请注册链接，注册可以返利哦：https://youyun70.xyz/auth/register?code=PelD',
        placeholder: 'https://s.youyun666.site/link/xxx?list=shadowrocket',
        transform: (inputValue: string) => {
          try {
            // 需要转为 base64，若不以 http 开头则当作是 base64
            if (!inputValue.startsWith('http')) return inputValue
            return encode(inputValue)
          } catch {
            return inputValue
          }
        },
      },
      {
        name: 'remark',
        description: '备注（订阅名称）',
        placeholder: '优云666',
        transform: (inputValue: string) => {
          try {
            return encodeURIComponent(inputValue)
          } catch {
            return inputValue
          }
        },
      },
    ],
    examples: [
      'shadowrocket://add/sub://aHR0cHM6Ly9zLnlvdXl1bjY2Ni5zaXRlL2xpbmsveHh4P2xpc3Q9c2hhZG93cm9ja2V0?remark=%E4%BC%98%E4%BA%91666',
    ],
  },
  {
    id: 'shadowrocket-update-subscribe',
    name: '更新订阅',
    description: '打开 Shadowrocket 并更新订阅',
    contributors: ['tofrankie'],
    updatedAt: '2026-08-09T00:00:00Z',
    urlSchemeTemplate: 'shadowrocket://update-subs',
    examples: ['shadowrocket://update-subs'],
  },
  {
    id: 'shadowrocket-route-enable-proxy',
    name: '切换全局路由 - 代理',
    description: '打开 Shadowrocket 并切换全局路由至代理',
    contributors: ['tofrankie'],
    updatedAt: '2026-08-09T00:00:00Z',
    urlSchemeTemplate: 'shadowrocket://route/proxy',
    examples: ['shadowrocket://route/proxy'],
  },
  {
    id: 'shadowrocket-route-enable-config',
    name: '切换全局路由 - 配置',
    description: '打开 Shadowrocket 并切换全局路由至配置',
    contributors: ['tofrankie'],
    updatedAt: '2026-08-09T00:00:00Z',
    urlSchemeTemplate: 'shadowrocket://route/config',
    examples: ['shadowrocket://route/config'],
  },
  {
    id: 'shadowrocket-route-enable-direct',
    name: '切换全局路由 - 直连',
    description: '打开 Shadowrocket 并切换全局路由至直连',
    contributors: ['tofrankie'],
    updatedAt: '2026-08-09T00:00:00Z',
    urlSchemeTemplate: 'shadowrocket://route/direct',
    examples: ['shadowrocket://route/direct'],
  },
  {
    id: 'shadowrocket-route-enable-scene',
    name: '切换全局路由 - 场景',
    description: '打开 Shadowrocket 并切换全局路由至场景',
    contributors: ['tofrankie'],
    updatedAt: '2026-08-09T00:00:00Z',
    urlSchemeTemplate: 'shadowrocket://route/scene',
    examples: ['shadowrocket://route/scene'],
  },
]

export default SHADOWROCKET
