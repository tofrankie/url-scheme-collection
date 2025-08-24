import type { UrlSchemeWithoutCategory } from '@/types'

const CLASHX: UrlSchemeWithoutCategory[] = [
  {
    id: 'clashx-install-config',
    name: '添加配置文件',
    description: '添加 ClashX 配置文件',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'clash://install-config?url={config_url}&name={config_name}',
    slots: [
      {
        name: 'config_url',
        description: '配置链接',
        placeholder: 'https://s.youyun666.site/link/xxx?clash=1',
      },
      {
        name: 'config_name',
        description: '配置文件名称',
        placeholder: '优云666',
      },
    ],
    examples: ['clash://install-config?url=https://s.youyun666.site/link/xxx?clash=1&name=优云666'],
  },
  {
    id: 'clashx-update-config',
    name: '更新配置文件',
    description: '更新 ClashX 配置文件',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'clash://update-config',
    examples: ['clash://update-config'],
    deprecated: true,
  },
  {
    id: 'clashx-toggle',
    name: '切换状态',
    description: '切换 ClashX 状态',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-23T00:00:00Z',
    urlSchemeTemplate: 'clash://toggle',
    examples: ['clash://toggle'],
    deprecated: true,
  },
]

export default CLASHX
