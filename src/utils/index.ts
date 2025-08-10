import type { UrlScheme } from '@/types'

export function genUrlScheme(scheme: UrlScheme, slotValues: Record<string, string>) {
  const { urlSchemeTemplate, slots } = scheme
  let replacedUrl = urlSchemeTemplate

  if (slots) {
    for (const slot of slots) {
      const value = slotValues[slot.name]
      if (!value) continue
      // /{[^}]+}/g
      replacedUrl = replacedUrl.replace(new RegExp(`\\{${slot.name}\\}`, 'g'), value)
    }
  }

  return replacedUrl
}

export function openURL(url: string) {
  window.open(url, '_blank')
}

export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('复制失败:', error)
    return false
  }
}

export function debounce<A extends unknown[], R, T = unknown>(
  func: (this: T, ...args: A) => R,
  wait: number
): (this: T, ...args: A) => void {
  let timer: number | null = null

  return function (this: T, ...args: A) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, args)
      timer = null
    }, wait)
  }
}
