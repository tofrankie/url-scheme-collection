import type { UrlSchemeWithoutCategory } from '@/types'

const RAYCAST: UrlSchemeWithoutCategory[] = [
  {
    id: 'raycast-confetti',
    name: '撒花 🎉',
    description: '满屏的五彩纸屑，庆祝一下吧 🎉 🎉 🎉',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-22T00:00:00Z',
    urlSchemeTemplate: 'raycast://confetti',
    examples: ['raycast://confetti'],
  },
  {
    id: 'raycast-install-extension',
    name: '安装扩展',
    description: '在 Raycast 安装指定扩展',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-22T00:00:00Z',
    urlSchemeTemplate: 'raycast://extensions/{author_or_owner_id}/{extension_name}',
    slots: [
      {
        name: 'author_or_owner_id',
        description:
          '扩展作者或拥有者 ID，即 package.json author/owner 字段值。可在 https://www.raycast.com/store 搜索扩展，从结果页 URL 即可获取作者或拥有者 ID 和扩展名称',
        placeholder: 'tofrankie',
      },
      {
        name: 'extension_name',
        description: '扩展名称。即 package.json name 字段值',
        placeholder: 'wechat-devtool',
      },
    ],
    examples: ['raycast://extensions/tofrankie/wechat-devtool'],
  },
  {
    id: 'raycast-run-extension-command',
    name: '执行扩展命令',
    description:
      '在 Raycast 执行指定扩展的指定命令。可在指定命令的 Action Panel 选择 Copy Deeplink 获取。',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-22T00:00:00Z',
    urlSchemeTemplate: 'raycast://extensions/{author_or_owner_id}/{extension_name}/{command_name}',
    slots: [
      {
        name: 'author_or_owner_id',
        description:
          '扩展作者或拥有者 ID，即 package.json author/owner 字段值。可在 https://www.raycast.com/store 搜索扩展，从结果页 URL 即可获取作者或拥有者 ID 和扩展名称',
        placeholder: 'tofrankie',
      },
      {
        name: 'extension_name',
        description: '扩展名称。即 package.json name 字段值',
        placeholder: 'wechat-devtool',
      },
      {
        name: 'command_name',
        description: '命令名称。即 package.json commands[].name 字段值',
        placeholder: 'configure-projects',
      },
    ],
    examples: [
      'raycast://extensions/tofrankie/wechat-devtool/configure-projects',
      'raycast://extensions/raycast/clipboard-history/clipboard-history',
      'raycast://extensions/raycast/raycast/create-quicklinkraycast://extensions/raycast=https://raycast.com',
    ],
  },
]

export default RAYCAST
