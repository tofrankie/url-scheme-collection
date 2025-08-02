import { useState } from 'react'
import {
  Box,
  Text,
  Button,
  TextInput,
  Heading,
  Stack,
  FormControl,
  Label,
} from '@primer/react'
import {
  AlertIcon,
  CalendarIcon,
  PersonIcon,
  PackageIcon,
  XIcon,
} from '@primer/octicons-react'
import type { URLScheme } from '@/types'
import { buildURL, openURL } from '@/utils/url-builder'
import { CopyableInput } from './copyable-input'

interface URLSchemeDetailModalProps {
  scheme: URLScheme | null
  isOpen: boolean
  onClose: () => void
  onOpen: (url: string) => void
}

export function URLSchemeDetailModal({
  scheme,
  isOpen,
  onClose,
  onOpen,
}: URLSchemeDetailModalProps) {
  const [slotValues, setSlotValues] = useState<Record<string, string>>({})
  if (!scheme || !isOpen) return null

  const buildResult = buildURL(scheme, slotValues)
  const finalURL = buildResult.url

  const handleSlotChange = (slotName: string, value: string) => {
    setSlotValues(prev => ({
      ...prev,
      [slotName]: value,
    }))
  }

  const handleOpen = () => {
    if (buildResult.isValid) {
      onOpen(finalURL)
      openURL(finalURL)
    }
  }

  return (
    <>
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
              <Label variant="danger" size="small">
                已废弃
              </Label>
            )}
          </Stack>
          <Button
            onClick={onClose}
            variant="invisible"
            leadingVisual={XIcon}
            aria-label="关闭"
          />
        </Box>

        <Box sx={{ p: 4 }}>
          <Stack direction="vertical" spacing={4}>
            {scheme.description && (
              <Text sx={{ color: 'fg.muted', fontSize: 2, lineHeight: 1.5 }}>
                {scheme.description}
              </Text>
            )}

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
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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

            <FormControl>
              <FormControl.Label>生成的 URL Scheme</FormControl.Label>
              <CopyableInput
                value={buildResult.isValid ? finalURL : scheme.urlTemplate}
              />

              {buildResult.errors.length > 0 && (
                <FormControl.Validation variant="error">
                  <Stack direction="horizontal" spacing={1} align="center">
                    <AlertIcon />
                    <Text>{buildResult.errors.join(', ')}</Text>
                  </Stack>
                </FormControl.Validation>
              )}
            </FormControl>

            <Stack direction="horizontal" gap="condensed">
              <Button
                onClick={handleOpen}
                disabled={!buildResult.isValid}
                variant="primary"
              >
                打开
              </Button>
            </Stack>

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

            {scheme.examples && scheme.examples.length > 0 && (
              <Stack direction="vertical" spacing={2}>
                <Heading as="h2" sx={{ fontSize: 1 }}>
                  示例
                </Heading>
                <Stack direction="vertical" spacing={2}>
                  {scheme.examples.map((example, index) => (
                    <CopyableInput key={index} value={example} />
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
