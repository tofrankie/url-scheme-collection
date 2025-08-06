import { track } from '@vercel/analytics'
import { type EventName, type EventParams, EVENT_NAMES } from '@/constants/events'
import { debounce } from './index'

export function trackEvent<T extends EventName>(eventName: T, data: EventParams<T>): void {
  try {
    if (import.meta.env.DEV) {
      console.log('📊 Analytics Event:', {
        event: eventName,
        data,
        timestamp: new Date().toISOString(),
      })
    }

    track(eventName, data)
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Analytics tracking error:', error)
    }
  }
}

/**
 * 搜索事件
 */
export function trackSearch(data: EventParams<'search'>): void {
  trackEvent(EVENT_NAMES.SEARCH, data)
}

/**
 * 搜索事件（防抖）
 */
export const debouncedTrackSearch = debounce(trackSearch, 1000)

/**
 * 反馈点击事件
 */
export function trackFeedback(): void {
  trackEvent(EVENT_NAMES.FEEDBACK, {})
}

/**
 * 主题切换事件
 */
export function trackThemeToggle(data: EventParams<'theme_toggle'>): void {
  trackEvent(EVENT_NAMES.THEME_TOGGLE, data)
}

/**
 * GitHub 主页点击事件
 */
export function trackGithubHomepage(): void {
  trackEvent(EVENT_NAMES.GITHUB_HOMEPAGE, {})
}

/**
 * 分类导航事件
 */
export function trackCategoryNav(data: EventParams<'category_nav'>): void {
  trackEvent(EVENT_NAMES.CATEGORY_NAV, data)
}

/**
 * URL Scheme 复制事件
 */
export function trackUrlSchemeCopy(data: EventParams<'url_scheme_copy'>): void {
  trackEvent(EVENT_NAMES.URL_SCHEME_COPY, data)
}

/**
 * URL Scheme 详情查看事件
 */
export function trackUrlSchemeDetail(data: EventParams<'url_scheme_detail'>): void {
  trackEvent(EVENT_NAMES.URL_SCHEME_DETAIL, data)
}

/**
 * URL Scheme 启动事件
 */
export function trackUrlSchemeLaunch(data: EventParams<'url_scheme_launch'>): void {
  trackEvent(EVENT_NAMES.URL_SCHEME_LAUNCH, data)
}
