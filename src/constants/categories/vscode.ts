import type { UrlSchemeWithoutCategory } from '@/types'

const VSCODE: UrlSchemeWithoutCategory[] = [
  {
    id: 'vscode-open-file-or-folder',
    name: '打开文件（夹）',
    description: '用 VS Code 打开指定文件（夹）',
    contributors: ['tofrankie'],
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
      'vscode://file/Users/frankie/my-project/?windowId=_blank',
      'vscode://file/Users/frankie/my-project/package.json',
      'vscode://file/c:/my-project/',
    ],
  },
  {
    id: 'vscode-open-file-line-column',
    name: '打开文件行列',
    description: '用 VS Code 打开指定文件行列',
    contributors: ['tofrankie'],
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
    contributors: ['tofrankie'],
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
    contributors: ['tofrankie'],
    updatedAt: '2025-08-21T00:00:00Z',
    urlSchemeTemplate: 'vscode:extension/{extension_id}',
    slots: [
      {
        name: 'extension_id',
        description: '扩展 ID',
        placeholder: 'frankie.github-blogger',
      },
    ],
    examples: ['vscode:extension/frankie.github-blogger'],
  },
  {
    id: 'vscode-install-mcp-by-name',
    name: '安装 MCP',
    description: '用 VS Code 安装指定 MCP（通过 MCP 服务名称）',
    contributors: ['tofrankie'],
    updatedAt: '2026-04-19T00:00:00Z',
    urlSchemeTemplate: 'vscode:mcp/by-name/{server_name}',
    slots: [
      {
        name: 'server_name',
        description:
          'MCP 服务器名称，可以在 https://github.com/mcp 搜索指定 MCP 通过控制台获取其 MCP ID',
        placeholder: 'microsoft/markitdown',
      },
    ],
    examples: ['vscode:mcp/by-name/microsoft/markitdown'],
  },
  {
    id: 'vscode-install-mcp-by-config',
    name: '安装 MCP',
    description: '用 VS Code 安装指定 MCP（通过配置）',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-21T00:00:00Z',
    urlSchemeTemplate: 'vscode:mcp/install?{mcp_config}',
    slots: [
      {
        name: 'mcp_config',
        description:
          'MCP 配置。可以直接输入 JSON 字符串，也可以输入经过 JSON.stringify() 处理后再用 base64 编码后的字符串。',
        placeholder: '{"name":"Raycast API","url":"https://developers.raycast.com/~gitbook/mcp"}',
        transform: (inputValue: string) => {
          try {
            const json = JSON.parse(inputValue)
            const jsonStr = JSON.stringify(json)
            return encodeURIComponent(jsonStr)
          } catch {
            return inputValue
          }
        },
      },
    ],
    examples: [
      'vscode:mcp/install?%7B%22name%22%3A%22Raycast%20API%22%2C%22url%22%3A%22https%3A%2F%2Fdevelopers.raycast.com%2F~gitbook%2Fmcp%22%7D',
    ],
  },
]

export default VSCODE
