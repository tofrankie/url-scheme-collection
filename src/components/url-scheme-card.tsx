import { useState } from 'react'
import { Box, Text, Button, Stack } from '@primer/react'
import { PackageIcon, CopyIcon, PencilIcon } from '@primer/octicons-react'
import type { URLScheme } from '@/types'
import { copyToClipboard } from '@/utils/url-builder'

interface URLSchemeCardProps {
  scheme: URLScheme
  onOpen: (url: string) => void
  onCopy: (url: string) => void
  onEdit?: (scheme: URLScheme) => void
  onShowDetails?: (scheme: URLScheme) => void
}

export function URLSchemeCard({
  scheme,
  onOpen,
  onCopy,
  onEdit,
  onShowDetails,
}: URLSchemeCardProps) {
  const [copied, setCopied] = useState(false)

  // 处理复制
  const handleCopy = async () => {
    const success = await copyToClipboard(scheme.urlTemplate)
    if (success) {
      setCopied(true)
      onCopy(scheme.urlTemplate)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // 处理打开
  const handleOpen = () => {
    onOpen(scheme.urlTemplate)
  }

  return (
    <Box
      onClick={() => onShowDetails?.(scheme)}
      sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'border.default',
        borderRadius: 2,
        bg: 'canvas.default',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        minHeight: '180px',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          borderColor: 'border.muted',
          bg: 'canvas.subtle',
          transform: 'translateY(-2px)',
          boxShadow: 'shadow.medium',
        },
      }}
    >
      <Stack direction="vertical" spacing={3} sx={{ flex: 1 }}>
        {/* 图标 */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '32px',
            height: '32px',
            bg: 'accent.subtle',
            borderRadius: 2,
            color: 'accent.fg',
            flexShrink: 0,
          }}
        >
          <PackageIcon size={16} />
        </Box>

        {/* 标题和废弃标识 */}
        <Stack direction="vertical" spacing={1}>
          <Stack direction="horizontal" spacing={2} align="center">
            <Text
              as="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: 2,
                color: 'fg.default',
                lineHeight: 1.2,
              }}
            >
              {scheme.name}
            </Text>
            {scheme.deprecated && (
              <Box
                sx={{
                  bg: 'danger.subtle',
                  color: 'danger.fg',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: 0,
                  fontWeight: 'bold',
                }}
              >
                已废弃
              </Box>
            )}
          </Stack>

          {/* 描述 */}
          {scheme.description && (
            <Text
              sx={{
                color: 'fg.muted',
                fontSize: 1,
                lineHeight: 1.4,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {scheme.description}
            </Text>
          )}
        </Stack>

        {/* URL 模板预览 */}
        <Box
          sx={{
            p: 2,
            bg: 'canvas.subtle',
            border: '1px solid',
            borderColor: 'border.subtle',
            borderRadius: 1,
            fontFamily: 'mono',
            fontSize: 0,
            wordBreak: 'break-all',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Text
            sx={{
              color: 'fg.muted',
              fontSize: 0,
              lineHeight: 1.3,
            }}
          >
            {scheme.urlTemplate}
          </Text>
        </Box>

        {/* 操作按钮 */}
        <Stack direction="horizontal" spacing={2}>
          <Button
            onClick={e => {
              e.stopPropagation()
              handleOpen()
            }}
            size="small"
            variant="primary"
            sx={{ flex: 1 }}
          >
            打开
          </Button>
          <Button
            onClick={e => {
              e.stopPropagation()
              handleCopy()
            }}
            leadingVisual={CopyIcon}
            size="small"
            variant="invisible"
          >
            {copied ? '已复制' : '复制'}
          </Button>
          {onEdit && (
            <Button
              onClick={e => {
                e.stopPropagation()
                onEdit(scheme)
              }}
              leadingVisual={PencilIcon}
              size="small"
              variant="invisible"
            >
              编辑
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  )
}
