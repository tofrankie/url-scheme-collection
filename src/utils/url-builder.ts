import type { URLScheme, URLBuilderResult, Slot } from '@/types'

/**
 * 从 URL 模板中解析出动态插槽
 */
export function parseSlotsFromTemplate(template: string): Slot[] {
  const slotRegex = /<([^>]+)>/g
  const slots: Slot[] = []
  let match

  while ((match = slotRegex.exec(template)) !== null) {
    const slotName = match[1]
    slots.push({
      name: slotName,
      description: `动态参数: ${slotName}`,
      placeholder: `请输入 ${slotName}`,
      required: true,
    })
  }

  return slots
}

/**
 * 获取插槽的默认值
 */
export function getSlotDefaultValue(slot: Slot): string {
  return slot.defaultValue || ''
}

/**
 * 构建最终的 URL
 */
export function buildURL(
  scheme: URLScheme,
  slotValues: Record<string, string>
): URLBuilderResult {
  let url = scheme.urlTemplate
  const errors: string[] = []

  // 替换插槽
  if (scheme.slots) {
    for (const slot of scheme.slots) {
      const value = slotValues[slot.name] || getSlotDefaultValue(slot)

      if (slot.required && !value.trim()) {
        errors.push(`必需插槽 "${slot.name}"不能为空`)
      }

      url = url.replace(new RegExp(`<${slot.name}>`, 'g'), value)
    }
  }

  // 检查是否还有未替换的插槽
  const remainingSlots = url.match(/<[^>]+>/g)
  if (remainingSlots) {
    errors.push(`还有未替换的插槽: ${remainingSlots.join(', ')}`)
  }

  return {
    url,
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * 验证 URL 是否有效
 */
export function isValidURL(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * 在新标签页中打开 URL
 */
export function openURL(url: string): void {
  window.open(url, '_blank')
}

/**
 * 复制文本到剪贴板
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('复制失败:', error)
    return false
  }
}
