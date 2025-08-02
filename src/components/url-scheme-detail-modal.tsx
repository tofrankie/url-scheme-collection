import { useState } from 'react'
import {
  Box,
  Text,
  Button,
  TextInput,
  Heading,
  Stack,
  FormControl,
} from '@primer/react'
import {
  CopyIcon,
  PencilIcon,
  AlertIcon,
  CalendarIcon,
  PersonIcon,
  PackageIcon,
  XIcon,
} from '@primer/octicons-react'
import type { URLScheme } from '@/types'
import { buildURL, openURL, copyToClipboard } from '@/utils/url-builder'

interface URLSchemeDetailModalProps {
  scheme: URLScheme | null
  isOpen: boolean
  onClose: () => void
  onOpen: (url: string) => void
  onCopy: (url: string) => void
  onEdit?: (scheme: URLScheme) => void
}

export function URLSchemeDetailModal({
  scheme,
  isOpen,
  onClose,
  onOpen,
  onCopy,
  onEdit,
}: URLSchemeDetailModalProps) {
  const [slotValues, setSlotValues] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState(false)

  if (!scheme || !isOpen) return null

  // 构建 URL
  const buildResult = buildURL(scheme, slotValues)
  const finalURL = buildResult.url

  // 处理插槽值变化
  const handleSlotChange = (slotName: string, value: string) => {
    setSlotValues(prev => ({
      ...prev,
      [slotName]: value,
    }))
  }

  // 处理打开 URL
  const handleOpen = () => {
    if (buildResult.isValid) {
      onOpen(finalURL)
      openURL(finalURL)
    }
  }

  // 处理复制
  const handleCopy = async () => {
    if (buildResult.isValid) {
      const success = await copyToClipboard(finalURL)
      if (success) {
        setCopied(true)
        onCopy(finalURL)
        setTimeout(() => setCopied(false), 2000)
      }
    }
  }

  return (
    <>
      {/* 背景遮罩 */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }}
        onClick={onClose}
      />

      {/* 模态框内容 */}
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '800px',
          maxHeight: '90vh',
          bg: 'canvas.default',
          borderRadius: 2,
          boxShadow: 'shadow.large',
          zIndex: 1001,
          overflow: 'auto',
        }}
      >
        {/* 头部 */}
        <Box
          sx={{
            p: 3,
            borderBottom: '1px solid',
            borderColor: 'border.default',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Stack direction="horizontal" spacing={2} align="center">
            <Box
              sx={{
                p: 1.5,
                bg: 'accent.subtle',
                borderRadius: 1,
                color: 'accent.fg',
              }}
            >
              <PackageIcon size={16} />
            </Box>
            <Text sx={{ fontWeight: 'bold', fontSize: 3 }}>{scheme.name}</Text>
            {scheme.deprecated && (
              <Box
                sx={{
                  bg: 'danger.subtle',
                  color: 'danger.fg',
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  fontSize: 0,
                  fontWeight: 'bold',
                }}
              >
                已废弃
              </Box>
            )}
          </Stack>
          <Button
            onClick={onClose}
            variant="invisible"
            leadingVisual={XIcon}
            aria-label="关闭"
          />
        </Box>

        {/* 内容 */}
        <Box sx={{ p: 4 }}>
          <Stack direction="vertical" spacing={4}>
            {/* 描述 */}
            {scheme.description && (
              <Text sx={{ color: 'fg.muted', fontSize: 2, lineHeight: 1.5 }}>
                {scheme.description}
              </Text>
            )}

            {/* 动态插槽输入区域 */}
            {scheme.slots && scheme.slots.length > 0 && (
              <Stack direction="vertical" spacing={3}>
                <Heading as="h2" sx={{ fontSize: 2 }}>
                  动态参数
                </Heading>
                <Stack direction="vertical" spacing={3}>
                  {scheme.slots.map(slot => {
                    const slotValue = slotValues[slot.name] || ''
                    const hasError = slot.required && !slotValue.trim()

                    return (
                      <FormControl key={slot.name} required={slot.required}>
                        <FormControl.Label>{slot.name}</FormControl.Label>
                        <TextInput
                          placeholder={slot.placeholder}
                          value={slotValue}
                          onChange={e =>
                            handleSlotChange(slot.name, e.target.value)
                          }
                          block
                        />
                        <FormControl.Caption>
                          {slot.description}
                        </FormControl.Caption>
                        {hasError && (
                          <FormControl.Validation variant="error">
                            此参数为必填项
                          </FormControl.Validation>
                        )}
                      </FormControl>
                    )
                  })}
                </Stack>
              </Stack>
            )}

            {/* 生成的 URL 显示 */}
            <FormControl>
              <FormControl.Label>生成的 URL</FormControl.Label>
              <Box
                sx={{
                  p: 3,
                  bg: 'canvas.subtle',
                  border: '1px solid',
                  borderColor: buildResult.isValid
                    ? 'success.muted'
                    : 'border.default',
                  borderRadius: 2,
                  fontFamily: 'mono',
                  fontSize: 1,
                  wordBreak: 'break-all',
                  position: 'relative',
                  width: '100%',
                }}
              >
                {buildResult.isValid ? (
                  <Text sx={{ color: 'fg.default' }}>{finalURL}</Text>
                ) : (
                  <Text sx={{ color: 'fg.muted' }}>{scheme.urlTemplate}</Text>
                )}

                {buildResult.isValid && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 2,
                      right: 2,
                      bg: 'success.subtle',
                      color: 'success.fg',
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: 0,
                      fontWeight: 'bold',
                    }}
                  >
                    有效
                  </Box>
                )}
              </Box>

              {buildResult.errors.length > 0 && (
                <FormControl.Validation variant="error">
                  <Stack direction="horizontal" spacing={1} align="center">
                    <AlertIcon />
                    <Text>{buildResult.errors.join(', ')}</Text>
                  </Stack>
                </FormControl.Validation>
              )}
            </FormControl>

            {/* 操作按钮 */}
            <Stack direction="horizontal" gap="condensed">
              <Button
                onClick={handleOpen}
                disabled={!buildResult.isValid}
                variant="primary"
              >
                打开
              </Button>
              <Button
                onClick={handleCopy}
                disabled={!buildResult.isValid}
                leadingVisual={CopyIcon}
                variant="default"
              >
                {copied ? '已复制' : '复制'}
              </Button>
              {onEdit && (
                <Button
                  onClick={() => onEdit(scheme)}
                  leadingVisual={PencilIcon}
                  variant="invisible"
                >
                  编辑
                </Button>
              )}
            </Stack>

            {/* 元信息 */}
            <Box
              sx={{
                pt: 3,
                borderTop: '1px solid',
                borderColor: 'border.subtle',
              }}
            >
              <Stack direction="horizontal" spacing={3} align="center">
                <Stack direction="horizontal" spacing={1} align="center">
                  <CalendarIcon />
                  <Text sx={{ color: 'fg.muted' }}>
                    更新于 {scheme.lastUpdated}
                  </Text>
                </Stack>
                {scheme.updatedBy && (
                  <Stack direction="horizontal" spacing={1} align="center">
                    <PersonIcon />
                    <Text sx={{ color: 'fg.muted' }}>{scheme.updatedBy}</Text>
                  </Stack>
                )}
              </Stack>
            </Box>

            {/* 示例 */}
            {scheme.examples && scheme.examples.length > 0 && (
              <Stack direction="vertical" spacing={2}>
                <Heading as="h2" sx={{ fontSize: 1 }}>
                  示例
                </Heading>
                <Stack direction="vertical" spacing={2}>
                  {scheme.examples.map((example, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 2,
                        bg: 'canvas.subtle',
                        borderRadius: 1,
                        fontFamily: 'mono',
                        fontSize: 0,
                        border: '1px solid',
                        borderColor: 'border.subtle',
                      }}
                    >
                      <Text sx={{ color: 'fg.muted' }}>{example}</Text>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            )}
          </Stack>
        </Box>
      </Box>
    </>
  )
}
