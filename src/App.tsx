import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Flash,
  Stack,
  Spinner,
  IconButton,
  Button,
  PageHeader,
  CounterLabel,
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

  // 按分类分组 URL Scheme
  const groupedSchemes = filteredSchemes.reduce(
    (groups, scheme) => {
      const category = categories.find(c => c.id === scheme.category)
      const categoryName = category?.name || '未分类'
      const categoryId = category?.id || 'uncategorized'
      if (!groups[categoryId]) {
        groups[categoryId] = {
          name: categoryName,
          schemes: [],
        }
      }
      groups[categoryId].schemes.push(scheme)
      return groups
    },
    {} as Record<string, { name: string; schemes: URLScheme[] }>
  )

  // 处理分类导航点击
  const handleCategoryClick = (categoryId?: string) => {
    setSelectedCategory(categoryId)
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 根据选中的分类过滤显示内容
  const displaySchemes = selectedCategory
    ? groupedSchemes[selectedCategory]?.schemes || []
    : filteredSchemes

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header - 固定高度，不可伸缩 */}
      <Box
        as="header"
        sx={{
          flexShrink: 0,
          borderBottom: '1px solid',
          borderColor: 'border.default',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'canvas.subtle',
        }}
      >
        <PageHeader
          role="banner"
          aria-label="URL Scheme Collection"
          sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', px: 4 }}
        >
          <PageHeader.TitleArea>
            <PageHeader.Title>URL Scheme Collection</PageHeader.Title>
          </PageHeader.TitleArea>

          <PageHeader.Actions>
            <Stack direction="horizontal" align="center" gap="condensed">
              {/* 搜索框 */}
              <Box sx={{ width: '300px' }}>
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="搜索 URL Scheme..."
                />
              </Box>

              {/* 反馈/添加按钮 - 跳转到 GitHub Issues 列表 */}
              <Button
                variant="primary"
                leadingVisual={CommentIcon}
                onClick={() =>
                  window.open(
                    'https://github.com/toFrankie/url-scheme-collection/issues',
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
            </Stack>
          </PageHeader.Actions>
        </PageHeader>
      </Box>

      {/* 主内容区域 - 占据剩余空间，可滚动 */}
      <Box
        sx={{
          width: '100%',
          flex: 1,
          display: 'flex',
          overflow: 'hidden',
          maxWidth: '1200px',
          mx: 'auto',
          boxSizing: 'content-box',
        }}
      >
        {/* 侧边栏 */}
        <Box
          sx={{
            flexShrink: 0,
            borderRight: '1px solid',
            borderColor: 'border.default',
            backgroundColor: 'canvas.default',
            overflow: 'auto',
          }}
        >
          <Box sx={{ pl: 4, pr: 3, py: 3 }}>
            {categoriesLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                <Spinner size="small" />
              </Box>
            ) : (
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryClick}
              />
            )}
          </Box>
        </Box>

        {/* 主内容区域 */}
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <Box sx={{ p: 4 }}>
            <Stack direction="vertical" spacing={4}>
              {/* 页面标题和描述 */}
              <Stack direction="vertical" spacing={2}>
                <Heading as="h2" sx={{ fontSize: 4 }}>
                  {selectedCategory
                    ? groupedSchemes[selectedCategory]?.name ||
                      '所有 URL Scheme'
                    : '所有 URL Scheme'}
                </Heading>
                <Text sx={{ color: 'fg.muted', fontSize: 2 }}>
                  {selectedCategory
                    ? categories.find(c => c.id === selectedCategory)
                        ?.description
                    : '收录移动端各类应用的 URL Scheme，支持动态参数配置和快速测试'}
                </Text>
              </Stack>

              {/* 显示内容 */}
              <Box>
                {schemesLoading ? (
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', py: 4 }}
                  >
                    <Spinner size="large" />
                  </Box>
                ) : displaySchemes.length === 0 ? (
                  <Flash variant="warning">
                    <Text>没有找到匹配的 URL Scheme</Text>
                  </Flash>
                ) : selectedCategory ? (
                  // 显示单个分类的内容
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: 3,
                    }}
                  >
                    {displaySchemes.map(scheme => (
                      <URLSchemeCard
                        key={scheme.id}
                        scheme={scheme}
                        onOpen={handleOpenURL}
                        onShowDetails={handleShowDetails}
                      />
                    ))}
                  </Box>
                ) : (
                  // 显示所有分类的内容，使用 sticky 布局
                  <Stack direction="vertical" spacing={6}>
                    {Object.entries(groupedSchemes).map(
                      ([categoryId, categoryData]) => (
                        <Box key={categoryId}>
                          {/* 分类标题 - 使用 sticky 布局 */}
                          <Box
                            sx={{
                              position: 'sticky',
                              top: 0,
                              zIndex: 100,
                              bg: 'canvas.default',
                              py: 3,
                              mb: 3,
                              borderBottom: '1px solid',
                              borderColor: 'border.subtle',
                              backdropFilter: 'blur(8px)',
                            }}
                          >
                            <Stack
                              direction="horizontal"
                              align="center"
                              gap="condensed"
                            >
                              <Text
                                as="h3"
                                sx={{
                                  fontSize: 3,
                                  color: 'fg.default',
                                  fontWeight: 'bold',
                                }}
                              >
                                {categoryData.name}
                              </Text>
                              <CounterLabel>
                                {categoryData.schemes.length}
                              </CounterLabel>
                            </Stack>
                          </Box>

                          {/* 分类下的卡片网格 */}
                          <Box
                            sx={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(3, 1fr)',
                              gap: 3,
                            }}
                          >
                            {categoryData.schemes.map(scheme => (
                              <URLSchemeCard
                                key={scheme.id}
                                scheme={scheme}
                                onOpen={handleOpenURL}
                                onShowDetails={handleShowDetails}
                              />
                            ))}
                          </Box>
                        </Box>
                      )
                    )}
                  </Stack>
                )}
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* 详情弹窗 */}
      <URLSchemeDetailModal
        scheme={selectedScheme}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onOpen={handleOpenURL}
      />
    </Box>
  )
}

export default App
