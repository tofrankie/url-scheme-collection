import { useState, useMemo } from 'react'
import {
  Box,
  Text,
  Flash,
  Stack,
  IconButton,
  Button,
  PageHeader,
  CounterLabel,
  Link,
  Heading,
} from '@primer/react'
import { MarkGithubIcon, CommentIcon } from '@primer/octicons-react'
import { SearchBar } from '@/components/search-bar'
import { Categories } from '@/components/categories'
import { URLSchemeCard } from '@/components/url-scheme-card'
import { URLSchemeDetailModal } from '@/components/url-scheme-detail-modal'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  SAMPLE_URL_SCHEMES,
  CATEGORIES,
  GITHUB_REPO_URL,
  GITHUB_ISSUES_URL,
} from '@/constants'
import type { URLScheme } from '@/types'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
  const [selectedScheme, setSelectedScheme] = useState<URLScheme | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = CATEGORIES

  const filteredSchemes = useMemo(() => {
    let schemes = SAMPLE_URL_SCHEMES

    // 按分类过滤
    if (selectedCategory) {
      schemes = schemes.filter(scheme => scheme.category === selectedCategory)
    }

    // 按搜索查询过滤
    if (searchQuery?.trim()) {
      const query = searchQuery.toLowerCase()
      schemes = schemes.filter(
        scheme =>
          scheme.name.toLowerCase().includes(query) ||
          scheme.description?.toLowerCase().includes(query) ||
          scheme.urlTemplate.toLowerCase().includes(query)
      )
    }

    return schemes
  }, [searchQuery, selectedCategory])

  const handleOpenURL = (url: string) => {
    console.log('打开 URL:', url)
  }

  const handleShowDetails = (scheme: URLScheme) => {
    setSelectedScheme(scheme)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedScheme(null)
  }

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

  const handleCategoryClick = (categoryId?: string) => {
    setSelectedCategory(categoryId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
              <Box sx={{ width: '300px' }}>
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="搜索 URL Scheme..."
                />
              </Box>

              <Button
                variant="primary"
                leadingVisual={CommentIcon}
                onClick={() => window.open(GITHUB_ISSUES_URL, '_blank')}
              >
                反馈
              </Button>
              <ThemeToggle />
              <IconButton
                aria-label="GitHub Homepage"
                icon={MarkGithubIcon}
                variant="invisible"
                onClick={() => window.open(GITHUB_REPO_URL, '_blank')}
              />
            </Stack>
          </PageHeader.Actions>
        </PageHeader>
      </Box>

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
            <Categories
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryClick}
            />
          </Box>
        </Box>

        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <Box sx={{ p: 4 }}>
            <Stack direction="vertical" spacing={4}>
              <PageHeader>
                <PageHeader.TitleArea>
                  <PageHeader.Title sx={{ fontSize: 4 }}>
                    {selectedCategory
                      ? groupedSchemes[selectedCategory].name
                      : '👋 Hey~'}
                  </PageHeader.Title>
                </PageHeader.TitleArea>
                {selectedCategory ? (
                  <PageHeader.Description>
                    {
                      categories.find(c => c.id === selectedCategory)
                        ?.description
                    }
                  </PageHeader.Description>
                ) : (
                  <PageHeader.Description sx={{ color: 'fg.muted' }}>
                    <span>
                      主流应用的 URL Scheme
                      虽然网上不难找到，但总是零零散散的。我只是把它们尽可能地聚合在一起，仅此而已。
                      欢迎提交{' '}
                      <Link
                        href={GITHUB_REPO_URL}
                        target="_blank"
                        style={{
                          fontWeight: 'var(--base-text-weight-semibold)',
                        }}
                      >
                        PR 📢
                      </Link>{' '}
                      一起完善它，如果觉得有用也欢迎点个{' '}
                      <Link
                        href={GITHUB_REPO_URL}
                        target="_blank"
                        style={{
                          fontWeight: 'var(--base-text-weight-semibold)',
                        }}
                      >
                        Star ⭐
                      </Link>
                      ，谢谢！
                    </span>
                  </PageHeader.Description>
                )}
              </PageHeader>

              <Box>
                {displaySchemes.length === 0 ? (
                  <Flash variant="warning">
                    <Text>没有找到匹配的 URL Scheme</Text>
                  </Flash>
                ) : selectedCategory ? (
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
                  <Stack direction="vertical" spacing={6}>
                    {Object.entries(groupedSchemes).map(
                      ([categoryId, categoryData]) => (
                        <Box key={categoryId}>
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
                              <Heading as="h2" sx={{ fontSize: 3 }}>
                                {categoryData.name}
                              </Heading>
                              <CounterLabel>
                                {categoryData.schemes.length}
                              </CounterLabel>
                            </Stack>
                          </Box>

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
