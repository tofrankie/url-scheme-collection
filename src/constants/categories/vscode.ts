import type { UrlSchemeWithoutCategory } from '@/types'

const VSCODE: UrlSchemeWithoutCategory[] = [
  {
    id: 'vscode-open-file-or-folder',
    name: '打开文件（夹）',
    description: '用 VS Code 打开指定文件（夹）',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-21T00:00:00Z',
    urlSchemeTemplate: 'vscode://file/{file_or_folder_path}',
    slots: [
      {
        name: 'file_or_folder_path',
        description: '文件或文件夹绝对路径',
        placeholder: '/Users/frankie/my-project/',
      },
    ],
    examples: [
      'vscode://file/Users/frankie/my-project/',
      'vscode://file/Users/frankie/my-project/package.json',
      'vscode://file/c:/my-project/',
    ],
  },
  {
    id: 'vscode-open-file-line-column',
    name: '打开文件行列',
    description: '用 VS Code 打开指定文件行列',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-21T00:00:00Z',
    urlSchemeTemplate: 'vscode://file/{file_path}:{line}:{column}',
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
    examples: ['vscode://file/Users/frankie/my-project/package.json:1:1'],
  },
  {
    id: 'vscode-settings',
    name: '设置',
    description: '打开 VS Code 设置',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-21T00:00:00Z',
    urlSchemeTemplate: 'vscode://settings/{setting_id}',
    slots: [
      {
        name: 'setting_id',
        description: '设置 ID。可选',
        placeholder: 'workbench.iconTheme',
      },
    ],
    examples: ['vscode://settings/workbench.iconTheme'],
  },
  {
    id: 'vscode-open-extension',
    name: '扩展',
    description: '用 VS Code 打开指定扩展',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-21T00:00:00Z',
    urlSchemeTemplate: 'vscode:extension/{extension_id}',
    slots: [
      {
        name: 'extension_id',
        description: '扩展 ID',
        placeholder: 'PKief.material-icon-theme',
      },
    ],
    examples: ['vscode://extension/PKief.material-icon-theme'],
  },
]

export default VSCODE
