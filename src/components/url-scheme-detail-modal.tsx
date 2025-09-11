import { useMemo, useState } from 'react'
import {
  Text,
  TextInput,
  Heading,
  Stack,
  FormControl,
  Label,
  Dialog,
  RelativeTime,
  AvatarStack,
  Avatar,
} from '@primer/react'
import { CalendarIcon, PeopleIcon } from '@primer/octicons-react'
import type { UrlScheme } from '@/types'
import { genUrlScheme } from '@/utils'
import CopyableInput from './copyable-input'
import { CATEGORIES } from '@/constants'
import { trackUrlSchemeCopy } from '@/utils/track'

interface URLSchemeDetailModalProps {
  scheme: UrlScheme
  onClose: () => void
}

export default function URLSchemeDetailModal({ scheme, onClose }: URLSchemeDetailModalProps) {
  const [slotValues, setSlotValues] = useState<Record<string, string>>({})

  const finalUrlScheme = useMemo(() => genUrlScheme(scheme, slotValues), [scheme, slotValues])

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

  const handleSlotChange = (slotName: string, value: string) => {
    setSlotValues(prev => ({
      ...prev,
      [slotName]: value,
    }))
  }

  const openGithubProfile = (username: string) => {
    window.open(`https://github.com/${username}`, '_blank')
  }

  const missSlotNames = scheme.slots?.filter(slot => !slotValues[slot.name]).map(slot => slot.name)
  const exampleVisible = Boolean(scheme.examples?.length && (scheme.examples.length > 1 || scheme.slots?.length))

  return (
    <Dialog
      title={
        <Stack direction="horizontal" gap="condensed" align="center">
          {scheme.name}
          {scheme.deprecated && (
            <Label variant="danger" size="small">
              已失效
            </Label>
          )}
        </Stack>
      }
      onClose={onClose}
      width="xlarge"
      height="auto"
      sx={{ zIndex: 1000 }}
    >
      <Stack>
        {scheme.description && <Text sx={{ color: 'fg.muted', fontSize: 1 }}>{scheme.description}</Text>}

        {scheme.slots && scheme.slots.length > 0 && (
          <>
            {scheme.slots.map(slot => {
              const slotValue = slotValues[slot.name] || ''
              return (
                <FormControl key={slot.name}>
                  <FormControl.Label>{slot.name}</FormControl.Label>
                  <TextInput
                    placeholder={`如 ${slot.placeholder}`}
                    value={slotValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSlotChange(slot.name, e.target.value)}
                    block
                  />
                  <FormControl.Caption sx={{ wordBreak: 'break-all' }}>{slot.description}</FormControl.Caption>
                </FormControl>
              )
            })}
          </>
        )}

        <FormControl>
          <FormControl.Label>Your URL Scheme</FormControl.Label>
          <CopyableInput value={finalUrlScheme} onCopy={handleCopy} />

          {missSlotNames && missSlotNames.length > 0 && (
            <FormControl.Validation variant="error">
              请填写 {missSlotNames.map(name => `${name}`).join(', ')}
            </FormControl.Validation>
          )}
        </FormControl>

        {exampleVisible && (
          <Stack direction="vertical" spacing={2}>
            <Heading as="h2" sx={{ fontSize: 1 }}>
              示例
            </Heading>
            <Stack direction="vertical" spacing={2}>
              {scheme.examples?.map((example, index) => (
                <CopyableInput key={index} value={example} />
              ))}
            </Stack>
          </Stack>
        )}

        <Stack direction="horizontal" align="center" gap="condensed" sx={{ color: 'fg.muted', fontSize: 1 }}>
          <PeopleIcon />
          <Text>Contributed by</Text>
          <AvatarStack>
            {scheme.contributors.map(contributor => (
              <Avatar
                key={contributor}
                alt={contributor}
                src={`https://avatars.githubusercontent.com/${contributor}`}
                onClick={() => openGithubProfile(contributor)}
                sx={{ cursor: 'pointer' }}
              />
            ))}
          </AvatarStack>
        </Stack>

        <Stack direction="horizontal" align="center" gap="condensed" sx={{ color: 'fg.muted', fontSize: 1 }}>
          <CalendarIcon />
          <Text>
            Updated at <RelativeTime date={new Date(scheme.updatedAt)} />
          </Text>
        </Stack>
      </Stack>
    </Dialog>
  )
}
