import type { UrlSchemeWithoutCategory } from '@/types'
import path from 'path-browserify'

const OBSIDIAN: UrlSchemeWithoutCategory[] = [
  {
    id: 'obsidian_open_vault',
    name: '打开 Obsidian Vault',
    description: '打开指定的 Obsidian Vault（仓库）',
    contributors: ['tofrankie'],
    updatedAt: '2026-06-03T00:00:00Z',
    urlSchemeTemplate: 'obsidian://open?vault={vault_name_or_id}',
    slots: [
      {
        name: 'vault_name_or_id',
        description: 'Vault 名称或 ID。其中 ID 可以在管理面板对应仓库处右键复制。',
        placeholder: 'b63d71528baa8f8b',
        transform: (value: string) => encodeURIComponent(value),
      },
    ],
    examples: ['obsidian://open?vault=My%20Vault', 'obsidian://open?vault=b63d71528baa8f8b'],
  },
  {
    id: 'obsidian_open_file_relative',
    name: '打开 Obsidian Vault 文件（相对路径）',
    description: '打开指定的 Obsidian Vault 的指定文件。',
    contributors: ['tofrankie'],
    updatedAt: '2026-06-03T00:00:00Z',
    urlSchemeTemplate: 'obsidian://open?vault={vault_name_or_id}&file={file_relative_path}',
    slots: [
      {
        name: 'vault_name_or_id',
        description: 'Vault 名称或 ID。其中 ID 可以在管理面板对应仓库处右键复制。',
        placeholder: 'b63d71528baa8f8b',
        transform: (value: string) => encodeURIComponent(value),
      },
      {
        name: 'file_relative_path',
        description: '相当于仓库目录的相对路径。如果是 .md 文件可能省略扩展名。',
        placeholder: 'README.md',
        transform: (value: string) => encodeURIComponent(path.normalize(value)),
      },
    ],
    examples: ['obsidian://open?vault=My%20Vault', 'obsidian://open?vault=b63d71528baa8f8b'],
  },
  {
    id: 'obsidian_open_file_absolute',
    name: '打开 Obsidian Vault 文件（绝对路径）',
    description: '打开指定的 Obsidian Vault 的文件，自动解析路径上的仓库。',
    contributors: ['tofrankie'],
    updatedAt: '2026-06-03T00:00:00Z',
    urlSchemeTemplate: 'obsidian://open?path={file_absolute_path}',
    slots: [
      {
        name: 'file_absolute_path',
        description: '文件系统的绝对路径',
        placeholder: '/Users/frankie/Documents/Obsidian/README.md',
        transform: (value: string) => encodeURIComponent(path.normalize(value)),
      },
    ],
    examples: ['obsidian://open?path=%2FUsers%2Ffrankie%2FDocuments%2FObsidian%2FREADME.md'],
  },
  {
    id: 'obsidian_create_note',
    name: '创建 Obsidian 笔记',
    description: '创建新的 Obsidian 笔记。',
    contributors: ['tofrankie'],
    updatedAt: '2026-06-03T00:00:00Z',
    urlSchemeTemplate: 'obsidian://new?vault={vault_name_or_id}&file={file_relative_path}',
    slots: [
      {
        name: 'vault_name_or_id',
        description: 'Vault 名称或 ID。其中 ID 可以在管理面板对应仓库处右键复制。',
        placeholder: 'b63d71528baa8f8b',
        transform: (value: string) => encodeURIComponent(value),
      },
      {
        name: 'file_relative_path',
        description: '相当于仓库目录的相对路径。',
        placeholder: 'path/to/new-note.md',
        transform: (value: string) => encodeURIComponent(path.normalize(value)),
      },
    ],
    examples: ['obsidian://new'],
  },
]

export default OBSIDIAN
