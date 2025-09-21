import type { UrlSchemeWithoutCategory } from '@/types'

const QQMUSIC: UrlSchemeWithoutCategory[] = [
  {
    id: 'qqmusic_recognize',
    name: '听歌识曲',
    description: '打开 QQ 音乐听歌识曲',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-19T00:00:00Z',
    urlSchemeTemplate: 'qqmusic://qq.com/ui/recognize',
    examples: ['qqmusic://qq.com/ui/recognize'],
  },
  {
    id: 'qqmusic_media_play_songlist',
    name: '播放歌曲',
    description: '打开 QQ 音乐播放指定歌曲',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-21T00:00:00Z',
    urlSchemeTemplate:
      'qqmusic://qq.com/media/playSonglist?p=%7B%22action%22%3A%22play%22%2C%22song%22%3A%5B%7B%22songmid%22%3A%22{song_mid}%22%7D%5D%7D',
    slots: [
      {
        // TODO: 支持多个歌曲，配置多个时可播放指定歌曲列表。
        name: 'song_mid',
        description: '歌曲 ID。分享歌曲复制链接，链接中 songmid 后的数字即为歌曲 ID',
        placeholder: '004C4eAM03mxA7',
      },
    ],
    examples: [
      'qqmusic://qq.com/media/playSonglist?p=%7B%22action%22%3A%22play%22%2C%22song%22%3A%5B%7B%22songmid%22%3A%22004C4eAM03mxA7%22%7D%5D%7D',
    ],
  },
  {
    id: 'qqmusic_resume_song',
    name: '恢复播放',
    description: '打开 QQ 音乐并恢复播放',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-19T00:00:00Z',
    urlSchemeTemplate: 'qqmusic://qq.com/media/resumeSong',
    examples: ['qqmusic://qq.com/media/resumeSong'],
  },
  {
    id: 'qqmusic_today_recently',
    name: '最近播放',
    description: '打开 QQ 音乐最近播放',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-21T00:00:00Z',
    urlSchemeTemplate: 'qqmusic://today?mid=31&k1=2&k4=0',
    examples: ['qqmusic://today?mid=31&k1=2&k4=0'],
  },
  {
    id: 'qqmusic_media_play_radio',
    name: '猜你喜欢',
    description: '打开 QQ 音乐猜你喜欢',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-21T00:00:00Z',
    urlSchemeTemplate: 'qqmusic://qq.com/media/playRadio?p=%7B%22radioId%22%3A%2299%22%7D',
    examples: ['qqmusic://qq.com/media/playRadio?p=%7B%22radioId%22%3A%2299%22%7D'],
  },
  {
    id: 'qqmusic_today_local',
    name: '本地音乐',
    description: '打开 QQ 音乐并播放本地音乐',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-21T00:00:00Z',
    urlSchemeTemplate: 'qqmusic://today?mid=31&k1=3&k4=0',
    examples: ['qqmusic://today?mid=31&k1=3&k4=0'],
  },
  {
    id: 'qqmusic_ui_my_tab_fav',
    name: '我的收藏',
    description: '打开 QQ 音乐收藏',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-21T00:00:00Z',
    urlSchemeTemplate: 'qqmusic://qq.com/ui/myTab?p=%7B%22tab%22%3A%22fav%22%7D',
    examples: ['qqmusic://qq.com/ui/myTab?p=%7B%22tab%22%3A%22fav%22%7D'],
  },
  {
    id: 'qqmusic_ui_gedan',
    name: '歌单',
    description: '打开 QQ 音乐指定歌单',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-21T00:00:00Z',
    urlSchemeTemplate: 'qqmusic://qq.com/ui/gedan?p=%7B%22id%22%3A%22{gedan_id}%22%7D',
    slots: [
      {
        name: 'gedan_id',
        description: '歌单 ID。分享歌单复制链接，链接中 id 后的数字即为歌单 ID',
        placeholder: '7256928516',
      },
    ],
    examples: ['qqmusic://qq.com/ui/gedan?p=%7B%22id%22%3A%227256928516%22%7D'],
  },
  {
    id: 'qqmusic_ui_profile',
    name: '个人主页',
    description: '打开 QQ 音乐个人主页',
    contributors: ['tofrankie'],
    updatedAt: '2025-08-19T00:00:00Z',
    urlSchemeTemplate: 'qqmusic://qq.com/ui/profile',
    examples: ['qqmusic://qq.com/ui/profile'],
  },
]

export default QQMUSIC
