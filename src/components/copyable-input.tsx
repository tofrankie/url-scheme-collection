import { useState } from 'react'
import { TextInput, IconButton, Stack } from '@primer/react'
import { CopyIcon, CheckIcon } from '@primer/octicons-react'
import { copyToClipboard } from '@/utils/url-builder'

interface CopyableInputProps {
  value: string
}

export function CopyableInput({ value }: CopyableInputProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const success = await copyToClipboard(value)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Stack direction="horizontal" gap="condensed" sx={{ width: '100%' }}>
      <TextInput
        value={value}
        block
        readOnly
        sx={{ backgroundColor: 'canvas.subtle', flex: 1 }}
      />
      <IconButton
        onClick={handleCopy}
        icon={copied ? CheckIcon : CopyIcon}
        variant="invisible"
        size="small"
        aria-label={copied ? '已复制' : '复制'}
        sx={{ color: copied ? 'success.fg' : 'fg.default' }}
        tooltipDirection="n"
      />
    </Stack>
  )
}
