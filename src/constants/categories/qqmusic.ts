import type { UrlSchemeWithoutCategory } from '@/types'

const QQMUSIC: UrlSchemeWithoutCategory[] = [
  {
    id: 'qqmusic_recognize',
    name: '听歌识曲',
    description: '打开 QQ 音乐听歌识曲',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-19T00:00:00Z',
    urlSchemeTemplate: 'qqmusic://qq.com/ui/recognize',
    examples: ['qqmusic://qq.com/ui/recognize'],
  },
  {
    id: 'qqmusic_resume_song',
    name: '恢复播放',
    description: '打开 QQ 音乐并恢复播放',
    contributors: ['toFrankie'],
    updatedAt: '2025-08-19T00:00:00Z',
    urlSchemeTemplate: 'qqmusic://qq.com/media/resumeSong',
    examples: ['qqmusic://qq.com/media/resumeSong'],
  },
]

export default QQMUSIC
