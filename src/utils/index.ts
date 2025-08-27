import type { UrlScheme } from '@/types'

export function genUrlScheme(scheme: UrlScheme, slotValues: Record<string, string>) {
  const { urlSchemeTemplate, slots } = scheme
  let replacedUrl = urlSchemeTemplate

  if (slots) {
    for (const slot of slots) {
      const value = slotValues[slot.name]
      if (!value) continue
      // /{[^}]+}/g
      const transformedValue = slot.transform?.(value) ?? value
      replacedUrl = replacedUrl.replace(new RegExp(`\\{${slot.name}\\}`, 'g'), transformedValue)
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
  let timer: ReturnType<typeof setTimeout> | null = null
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, args)
      timer = null
    }, wait)
  }
}
