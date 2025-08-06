import { Box, Text, Button, Stack, Label } from '@primer/react'
import { PackageIcon } from '@primer/octicons-react'
import type { UrlScheme } from '@/types'
import { CopyableInput } from './copyable-input'
import { CATEGORIES } from '@/constants'
import { trackUrlSchemeCopy, trackUrlSchemeDetail } from '@/utils/track'

interface URLSchemeCardProps {
  scheme: UrlScheme
  onShowDetails?: (scheme: UrlScheme) => void
}

export function URLSchemeCard({ scheme, onShowDetails }: URLSchemeCardProps) {
  const category = CATEGORIES.find(c => c.id === scheme.category)
  const categoryName = category?.name || ''

  const handleCopy = () => {
    trackUrlSchemeCopy({
      id: scheme.id,
      name: scheme.name,
      category_id: scheme.category,
      category_name: categoryName,
    })
  }

  const handleShowDetails = () => {
    trackUrlSchemeDetail({
      id: scheme.id,
      name: scheme.name,
      category_id: scheme.category,
      category_name: categoryName,
    })
    onShowDetails?.(scheme)
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
          transform: 'translateY(-1px)',
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
              已失效
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

        <CopyableInput value={scheme.urlTemplate} onCopy={handleCopy} />

        <Stack direction="horizontal" gap="condensed">
          <Button onClick={handleShowDetails} size="small">
            详情
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
