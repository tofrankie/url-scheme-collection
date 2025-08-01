import { useState } from 'react'
import { Box, Button, Text, Stack, Flash, Spinner } from '@primer/react'
import {
  useURLSchemes,
  useCategories,
  useCreateURLScheme,
  useUpdateURLScheme,
  useDeleteURLScheme,
} from '@/hooks/use-url-schemes'

// 示例：展示如何使用 React Query hooks
export const ExampleUsage = () => {
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>('')

  // 查询 hooks
  const {
    data: schemes = [],
    isLoading: schemesLoading,
    error: schemesError,
  } = useURLSchemes()
  const { data: categories = [], isLoading: categoriesLoading } =
    useCategories()

  // 变更 hooks
  const createMutation = useCreateURLScheme()
  const updateMutation = useUpdateURLScheme()
  const deleteMutation = useDeleteURLScheme()

  // 示例：创建新的 URL Scheme
  const handleCreate = async () => {
    try {
      await createMutation.mutateAsync({
        name: '示例 Scheme',
        description: '这是一个示例 URL Scheme',
        urlTemplate: 'example://open',
        category: categories[0]?.id || '',
        lastUpdated: new Date().toISOString(),
      })
      console.log('创建成功！')
    } catch (error) {
      console.error('创建失败:', error)
    }
  }

  // 示例：更新 URL Scheme
  const handleUpdate = async () => {
    if (!selectedSchemeId) return

    try {
      await updateMutation.mutateAsync({
        id: selectedSchemeId,
        name: '更新后的 Scheme',
        description: '这是更新后的描述',
      })
      console.log('更新成功！')
    } catch (error) {
      console.error('更新失败:', error)
    }
  }

  // 示例：删除 URL Scheme
  const handleDelete = async () => {
    if (!selectedSchemeId) return

    try {
      await deleteMutation.mutateAsync(selectedSchemeId)
      console.log('删除成功！')
      setSelectedSchemeId('')
    } catch (error) {
      console.error('删除失败:', error)
    }
  }

  return (
    <Box sx={{ p: 4 }}>
      <Stack direction="vertical" spacing={4}>
        <Text sx={{ fontSize: 3, fontWeight: 'bold' }}>
          React Query 使用示例
        </Text>

        {/* 查询状态展示 */}
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: 'bold', mb: 2 }}>查询状态</Text>

          {schemesError && (
            <Flash variant="danger">加载失败: {schemesError.message}</Flash>
          )}

          {schemesLoading ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Spinner size="small" />
              <Text>加载中...</Text>
            </Box>
          ) : (
            <Text>
              已加载 {schemes.length} 个 URL Schemes, {categories.length} 个分类
            </Text>
          )}
        </Box>

        {/* 变更操作示例 */}
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: 'bold', mb: 2 }}>变更操作</Text>

          <Stack direction="horizontal" spacing={2}>
            <Button
              onClick={handleCreate}
              disabled={createMutation.isPending || categoriesLoading}
              loading={createMutation.isPending}
            >
              创建示例 Scheme
            </Button>

            <Button
              onClick={handleUpdate}
              disabled={updateMutation.isPending || !selectedSchemeId}
              loading={updateMutation.isPending}
            >
              更新选中 Scheme
            </Button>

            <Button
              onClick={handleDelete}
              disabled={deleteMutation.isPending || !selectedSchemeId}
              loading={deleteMutation.isPending}
              variant="danger"
            >
              删除选中 Scheme
            </Button>
          </Stack>

          {/* 选择 Scheme 进行更新/删除 */}
          <Box sx={{ mt: 2 }}>
            <Text sx={{ fontSize: 1, mb: 1 }}>选择 Scheme 进行更新/删除:</Text>
            <select
              value={selectedSchemeId}
              onChange={e => setSelectedSchemeId(e.target.value)}
              style={{
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            >
              <option value="">请选择...</option>
              {schemes.map(scheme => (
                <option key={scheme.id} value={scheme.id}>
                  {scheme.name}
                </option>
              ))}
            </select>
          </Box>
        </Box>

        {/* 变更状态展示 */}
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: 'bold', mb: 2 }}>变更状态</Text>

          <Stack direction="vertical" spacing={1}>
            {createMutation.isError && <Flash variant="danger">创建失败</Flash>}
            {updateMutation.isError && <Flash variant="danger">更新失败</Flash>}
            {deleteMutation.isError && <Flash variant="danger">删除失败</Flash>}

            {createMutation.isSuccess && (
              <Flash variant="success">创建成功！</Flash>
            )}
            {updateMutation.isSuccess && (
              <Flash variant="success">更新成功！</Flash>
            )}
            {deleteMutation.isSuccess && (
              <Flash variant="success">删除成功！</Flash>
            )}
          </Stack>
        </Box>

        {/* 数据展示 */}
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: 'bold', mb: 2 }}>数据预览</Text>

          <Box
            sx={{
              maxHeight: '300px',
              overflow: 'auto',
              border: '1px solid',
              borderColor: 'border.default',
              borderRadius: 2,
              p: 2,
            }}
          >
            <Text sx={{ fontSize: 1, fontWeight: 'bold', mb: 1 }}>
              URL Schemes ({schemes.length})
            </Text>
            {schemes.slice(0, 5).map(scheme => (
              <Box
                key={scheme.id}
                sx={{ mb: 1, p: 1, bg: 'neutral.subtle', borderRadius: 1 }}
              >
                <Text sx={{ fontSize: 0, fontWeight: 'bold' }}>
                  {scheme.name}
                </Text>
                <Text sx={{ fontSize: 0, color: 'fg.muted' }}>
                  {scheme.urlTemplate}
                </Text>
              </Box>
            ))}
            {schemes.length > 5 && (
              <Text sx={{ fontSize: 0, color: 'fg.muted' }}>
                还有 {schemes.length - 5} 个...
              </Text>
            )}
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}
