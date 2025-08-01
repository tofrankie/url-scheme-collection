import { useState } from 'react'
import {
  Box,
  Button,
  TextInput,
  Textarea,
  Select,
  Flash,
  Stack,
  FormControl,
} from '@primer/react'
import {
  useCreateURLScheme,
  useUpdateURLScheme,
  useCategories,
} from '@/hooks/use-url-schemes'
import type { URLScheme } from '@/types'

interface URLSchemeFormProps {
  scheme?: URLScheme
  onSuccess?: () => void
  onCancel?: () => void
}

export function URLSchemeForm({
  scheme,
  onSuccess,
  onCancel,
}: URLSchemeFormProps) {
  const [formData, setFormData] = useState({
    name: scheme?.name || '',
    description: scheme?.description || '',
    urlTemplate: scheme?.urlTemplate || '',
    category: scheme?.category || '',
    lastUpdated: new Date().toISOString(),
  })

  const { data: categories = [] } = useCategories()
  const createMutation = useCreateURLScheme()
  const updateMutation = useUpdateURLScheme()

  const isEditing = !!scheme
  const mutation = isEditing ? updateMutation : createMutation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (isEditing) {
        await updateMutation.mutateAsync({
          id: scheme.id,
          ...formData,
        })
      } else {
        await createMutation.mutateAsync(formData)
      }

      onSuccess?.()
    } catch (error) {
      console.error('保存失败:', error)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Stack direction="vertical" spacing={3}>
        {mutation.isError && <Flash variant="danger">保存失败，请重试</Flash>}

        <FormControl>
          <FormControl.Label>名称</FormControl.Label>
          <TextInput
            value={formData.name}
            onChange={e => handleInputChange('name', e.target.value)}
            required
            disabled={mutation.isPending}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>描述</FormControl.Label>
          <Textarea
            value={formData.description}
            onChange={e => handleInputChange('description', e.target.value)}
            disabled={mutation.isPending}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>URL 模板</FormControl.Label>
          <TextInput
            value={formData.urlTemplate}
            onChange={e => handleInputChange('urlTemplate', e.target.value)}
            required
            disabled={mutation.isPending}
            placeholder="例如: weixin://dl/scan"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>分类</FormControl.Label>
          <Select
            value={formData.category}
            onChange={e => handleInputChange('category', e.target.value)}
            required
            disabled={mutation.isPending}
          >
            <Select.Option value="">请选择分类</Select.Option>
            {categories.map(category => (
              <Select.Option key={category.id} value={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </FormControl>

        <Stack direction="horizontal" spacing={2}>
          <Button type="submit" disabled={mutation.isPending} variant="primary">
            {mutation.isPending ? '保存中...' : isEditing ? '更新' : '创建'}
          </Button>
          {onCancel && (
            <Button
              type="button"
              onClick={onCancel}
              disabled={mutation.isPending}
              variant="invisible"
            >
              取消
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  )
}
