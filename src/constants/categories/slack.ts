import type { UrlSchemeWithoutCategory } from '@/types'

const SLACK: UrlSchemeWithoutCategory[] = [
  {
    id: 'slack_open',
    name: '打开 Slack',
    description: '打开 Slack 默认团队（默认工作区）',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'slack://open',
    examples: ['slack://open'],
  },
  {
    id: 'slack_open_team',
    name: '打开 Slack 团队',
    description: '打开 Slack 指定团队（工作区）',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'slack://open?team={team_id}',
    slots: [
      {
        name: 'team_id',
        description: '团队 ID',
        placeholder: 'T0194883WF8',
      },
    ],
    examples: ['slack://open?team=T0194883WF8'],
  },
  {
    id: 'slack_channel',
    name: '打开 Slack 频道',
    description: '打开 Slack 指定频道',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'slack://channel?team={team_id}&id={channel_id}',
    slots: [
      {
        name: 'team_id',
        description: '团队 ID',
        placeholder: 'T0194883WF8',
      },
      {
        name: 'channel_id',
        description: '频道 ID。在频道详情可复制',
        placeholder: 'C019B6CGX0T',
      },
    ],
    examples: ['slack://channel?team=T0194883WF8&id=C019B6CGX0T'],
  },
  {
    id: 'slack_user',
    name: '打开 Slack 对话',
    description: '打开 Slack 与指定用户的对话',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'slack://user?team={team_id}&id={user_id}',
    slots: [
      {
        name: 'team_id',
        description: '团队 ID',
        placeholder: 'T0194883WF8',
      },
      {
        name: 'user_id',
        description: '用户 ID。在用户详情页可复制（成员 ID）',
        placeholder: 'U019ZKEERRU',
      },
    ],
    examples: ['slack://user?team=T0194883WF8&id=U019ZKEERRU'],
  },
  {
    id: 'slack_app',
    name: '打开 Slack 应用主页',
    description: '打开 Slack 指定应用主页',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'slack://app?team={team_id}&id={app_id}',
    slots: [
      {
        name: 'team_id',
        description: '团队 ID',
        placeholder: 'T0194883WF8',
      },
      {
        name: 'app_id',
        description: '应用 ID。可在应用详情，点击配置跳转 Web 页面，从 URL 中获取，以 A 开头。',
        placeholder: 'A03H6BXGS12',
      },
    ],
    examples: ['slack://app?team=T0194883WF8&id=A03H6BXGS12'],
  },
  {
    id: 'slack_file',
    name: '打开 Slack 文件',
    description: '打开 Slack 指定文件',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'slack://file?team={team_id}&id={file_id}',
    slots: [
      {
        name: 'team_id',
        description: '团队 ID',
        placeholder: 'T0194883WF8',
      },
      {
        name: 'file_id',
        description: '文件 ID。在文件处分享可复制链接，URL 中以 F 开头。',
        placeholder: 'F0A2E8GCW5C',
      },
    ],
    examples: ['slack://file?team=T0194883WF8&id=F0A2E8GCW5C'],
  },
  {
    id: 'slack_share_file',
    name: '分享 Slack 文件',
    description: '分享 Slack 指定文件',
    contributors: ['tofrankie'],
    updatedAt: '2026-01-22T00:00:00Z',
    urlSchemeTemplate: 'slack://share-file?team={team_id}&id={file_id}',
    slots: [
      {
        name: 'team_id',
        description: '团队 ID',
        placeholder: 'T0194883WF8',
      },
      {
        name: 'file_id',
        description: '文件 ID。在文件处分享可复制链接，URL 中以 F 开头。',
        placeholder: 'F0A2E8GCW5C',
      },
    ],
    examples: ['slack://share-file?team=T0194883WF8&id=F0A2E8GCW5C'],
  },
]

export default SLACK
