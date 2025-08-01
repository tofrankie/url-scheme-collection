import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Flash,
  PageLayout,
  PageHeader,
  Stack,
  Spinner,
  IconButton,
  Button,
} from '@primer/react'
import { MarkGithubIcon, CommentIcon } from '@primer/octicons-react'
import { SearchBar } from '@/components/search-bar'
import { CategoryFilter } from '@/components/category-filter'
import { URLSchemeCard } from '@/components/url-scheme-card'
import { URLSchemeDetailModal } from '@/components/url-scheme-detail-modal'
import { ThemeToggle } from '@/components/theme-toggle'
import { useCategories, useFilteredURLSchemes } from '@/hooks/use-url-schemes'
import type { URLScheme } from '@/types'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
  const [selectedScheme, setSelectedScheme] = useState<URLScheme | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 使用 React Query hooks
  const { data: categories = [], isLoading: categoriesLoading } =
    useCategories()
  const { data: filteredSchemes = [], isLoading: schemesLoading } =
    useFilteredURLSchemes({
      search: searchQuery,
      category: selectedCategory,
    })

  // 处理打开 URL
  const handleOpenURL = (url: string) => {
    console.log('打开 URL:', url)
  }

  // 处理复制 URL
  const handleCopyURL = (url: string) => {
    console.log('复制 URL:', url)
  }

  // 处理编辑 URL Scheme
  const handleEditScheme = (scheme: URLScheme) => {
    console.log('编辑 URL Scheme:', scheme)
  }

  // 处理显示详情
  const handleShowDetails = (scheme: URLScheme) => {
    setSelectedScheme(scheme)
    setIsModalOpen(true)
  }

  // 处理关闭弹窗
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedScheme(null)
  }

  return (
    <PageLayout>
      {/* 使用 PageHeader 重新设计顶部 */}
      <PageLayout.Header>
        <PageHeader role="banner" aria-label="URL Scheme Collection">
          <PageHeader.TitleArea>
            <PageHeader.Title>URL Scheme 收集</PageHeader.Title>
          </PageHeader.TitleArea>
          <PageHeader.Actions>
            {/* 搜索框 */}
            <Box sx={{ width: '400px' }}>
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="搜索 URL Scheme..."
              />
            </Box>

            {/* 反馈/添加按钮 - 跳转到 GitHub Issues */}
            <Button
              variant="primary"
              leadingVisual={CommentIcon}
              onClick={() =>
                window.open(
                  'https://github.com/toFrankie/url-scheme-collection/issues/new',
                  '_blank'
                )
              }
            >
              反馈
            </Button>

            {/* 主题切换 */}
            <ThemeToggle />

            {/* GitHub 主页 */}
            <IconButton
              aria-label="GitHub 主页"
              icon={MarkGithubIcon}
              variant="invisible"
              onClick={() =>
                window.open(
                  'https://github.com/toFrankie/url-scheme-collection',
                  '_blank'
                )
              }
            />
          </PageHeader.Actions>
        </PageHeader>
      </PageLayout.Header>

      {/* 侧边栏 */}
      <PageLayout.Pane position="start" width="large">
        <Stack direction="vertical" spacing={3}>
          {categoriesLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
              <Spinner size="small" />
            </Box>
          ) : (
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          )}
        </Stack>
      </PageLayout.Pane>

      {/* 主内容区域 */}
      <PageLayout.Content>
        <Box sx={{ p: 4 }}>
          <Stack direction="vertical" spacing={4}>
            {/* 页面标题和描述 */}
            <Stack direction="vertical" spacing={2}>
              <Heading as="h2" sx={{ fontSize: 4 }}>
                {selectedCategory
                  ? categories.find(c => c.id === selectedCategory)?.name
                  : '所有 URL Scheme'}
              </Heading>
              <Text sx={{ color: 'fg.muted', fontSize: 2 }}>
                {selectedCategory
                  ? categories.find(c => c.id === selectedCategory)?.description
                  : '收录移动端各类应用的 URL Scheme，支持动态参数配置和快速测试'}
              </Text>
            </Stack>

            {/* 结果统计 */}
            <Box
              sx={{
                pb: 3,
                borderBottom: '1px solid',
                borderColor: 'border.default',
              }}
            >
              <Text sx={{ color: 'fg.muted', fontSize: 1 }}>
                找到 {filteredSchemes.length} 个 URL Scheme
                {selectedCategory &&
                  ` (分类: ${categories.find(c => c.id === selectedCategory)?.name})`}
              </Text>
            </Box>

            {/* 结果列表 */}
            <Box>
              {schemesLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                  <Spinner size="large" />
                </Box>
              ) : filteredSchemes.length === 0 ? (
                <Flash variant="warning">
                  <Text>没有找到匹配的 URL Scheme</Text>
                </Flash>
              ) : (
                <Stack direction="vertical" spacing={3}>
                  {filteredSchemes.map(scheme => (
                    <URLSchemeCard
                      key={scheme.id}
                      scheme={scheme}
                      onOpen={handleOpenURL}
                      onCopy={handleCopyURL}
                      onEdit={handleEditScheme}
                      onShowDetails={handleShowDetails}
                    />
                  ))}
                </Stack>
              )}
            </Box>
          </Stack>
        </Box>
      </PageLayout.Content>

      {/* 详情弹窗 */}
      <URLSchemeDetailModal
        scheme={selectedScheme}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onOpen={handleOpenURL}
        onCopy={handleCopyURL}
        onEdit={handleEditScheme}
      />
    </PageLayout>
  )
}

export default App
