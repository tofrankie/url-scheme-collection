import { CheckIcon, CopyIcon } from '@primer/octicons-react'
import { IconButton, Stack, TextInput } from '@primer/react'
import { useState } from 'react'
import { copyToClipboard } from '@/utils'

interface CopyableInputProps {
  value: string
  onCopy?: () => void
}

export default function CopyableInput({ value, onCopy }: CopyableInputProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const success = await copyToClipboard(value)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)

      onCopy?.()
    }
  }

  return (
    <Stack direction="horizontal" gap="condensed" align="center" sx={{ width: '100%' }}>
      <TextInput value={value} block readOnly sx={{ backgroundColor: 'canvas.subtle', flex: 1 }} />
      <IconButton
        onClick={handleCopy}
        icon={copied ? CheckIcon : CopyIcon}
        variant="invisible"
        size="small"
        tooltipDirection="n"
        aria-label={copied ? '已复制' : '复制'}
        sx={{ color: copied ? 'success.fg' : 'fg.default' }}
      />
    </Stack>
  )
}
