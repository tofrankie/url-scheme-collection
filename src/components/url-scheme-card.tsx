import { Box, Text, Button, Stack, Label } from '@primer/react'
import { PackageIcon } from '@primer/octicons-react'
import type { URLScheme } from '@/types'
import { CopyableInput } from './copyable-input'

interface URLSchemeCardProps {
  scheme: URLScheme
  onOpen: (url: string) => void
  onShowDetails?: (scheme: URLScheme) => void
}

export function URLSchemeCard({
  scheme,
  onOpen,
  onShowDetails,
}: URLSchemeCardProps) {
  // TODO:
  const handleOpen = () => {
    onOpen(scheme.urlTemplate)
  }

  return (
    <Box
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
        <Stack direction="horizontal" gap="condensed" align="center">
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
            <Label variant="danger" size="small">
              已废弃
            </Label>
          )}
        </Stack>

        <Stack direction="vertical" spacing={1}>
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

        <CopyableInput value={scheme.urlTemplate} />

        <Stack direction="horizontal" gap="condensed">
          <Button onClick={handleOpen} size="small" variant="primary">
            打开
          </Button>
          <Button
            onClick={() => onShowDetails?.(scheme)}
            size="small"
            variant="default"
          >
            详情
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
