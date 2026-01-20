import type { UrlSchemeWithoutCategory } from '@/types'

const CURSOR: UrlSchemeWithoutCategory[] = [
  {
    id: 'cursor-open-file-or-folder',
    name: '打开文件（夹）',
    description: '用 Cursor 打开指定文件（夹）',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'cursor://file/{file_or_folder_path}',
    slots: [
      {
        name: 'file_or_folder_path',
        description: '文件或文件夹绝对路径',
        placeholder: '/Users/frankie/my-project/',
      },
    ],
    examples: [
      'cursor://file/Users/frankie/my-project/',
      'cursor://file/Users/frankie/my-project/?windowId=_blank',
      'cursor://file/Users/frankie/my-project/package.json',
      'cursor://file/c:/my-project/',
    ],
  },
  {
    id: 'cursor-open-file-line-column',
    name: '打开文件行列',
    description: '用 Cursor 打开指定文件行列',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'cursor://file/{file_path}:{line}:{column}',
    slots: [
      {
        name: 'file_path',
        description: '文件路径',
        placeholder: '/Users/frankie/my-project/package.json',
      },
      {
        name: 'line',
        description: '行号',
        placeholder: '1',
      },
      {
        name: 'column',
        description: '列号',
        placeholder: '1',
      },
    ],
    examples: ['cursor://file/Users/frankie/my-project/package.json:1:1'],
  },
  {
    id: 'cursor-settings',
    name: '设置',
    description: '打开 Cursor 设置',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'cursor://settings/{setting_id}',
    slots: [
      {
        name: 'setting_id',
        description: '设置 ID。可选',
        placeholder: 'workbench.iconTheme',
      },
    ],
    examples: ['cursor://settings/workbench.iconTheme'],
  },
  {
    id: 'cursor-open-extension',
    name: '扩展',
    description: '用 Cursor 打开指定扩展',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'cursor:extension/{extension_id}',
    slots: [
      {
        name: 'extension_id',
        description: '扩展 ID',
        placeholder: 'Frankie.github-blogger',
      },
    ],
    examples: ['cursor:extension/frankie.github-blogger'],
  },
  {
    id: 'cursor-settings-ai-settings',
    name: 'Cursor AI 设置',
    description: '用 Cursor 打开 AI 设置。可以在命令面板输入 Cursor Settings 进入 Cursor Full Settings 页面。',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'cursor://settings/aisettings',
    examples: ['cursor://settings/aisettings'],
  },
  {
    id: 'cursor-create-chat-with-prompt',
    name: '使用 Prompt 创建 Chat',
    description: '使用指定 Prompt 创建 Chat。',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'cursor://anysphere.cursor-deeplink/prompt?text={prompt}',
    slots: [
      {
        name: 'prompt',
        description: 'prompt text',
        placeholder: 'Research+and+find+one+bug+in+this+codebase',
      },
    ],
    examples: ['cursor://anysphere.cursor-deeplink/prompt?text=Research+and+find+one+bug+in+this+codebase'],
  },
]

export default CURSOR
