export const EVENT_NAMES = {
  SEARCH: 'search',
  FEEDBACK: 'feedback',
  THEME_TOGGLE: 'theme_toggle',
  GITHUB_HOMEPAGE: 'github_homepage',
  CATEGORY_NAV: 'category_nav',
  URL_SCHEME_COPY: 'url_scheme_copy',
  URL_SCHEME_DETAIL: 'url_scheme_detail',
  URL_SCHEME_LAUNCH: 'url_scheme_launch',
} as const satisfies Record<string, EventName>

export interface EventData {
  search: { keyword: string }
  feedback: Record<string, never>
  theme_toggle: { to: 'day' | 'night' }
  github_homepage: Record<string, never>
  category_nav: { id: string | null; name: string }
  url_scheme_copy: {
    id: string
    name: string
    category_id: string
    category_name: string
  }
  url_scheme_detail: {
    id: string
    name: string
    category_id: string
    category_name: string
  }
  url_scheme_launch: {
    id: string
    name: string
    category_id: string
    category_name: string
  }
}

export type EventName = keyof EventData

export type EventParams<T extends EventName> = EventData[T]

export type EventTracker<T extends EventName> = (
  ...args: keyof EventParams<T> extends never
    ? [] // 如果参数为空对象，则无需参数
    : [data: EventParams<T>] // 否则需要传入数据
) => void

export type EventTrackers = {
  [K in EventName as `track${Capitalize<K>}`]: EventTracker<K>
}
