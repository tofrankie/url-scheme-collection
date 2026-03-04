import type { CategoryId } from '@/constants'
import type { Category, UrlScheme } from '@/types'
import { SearchIcon } from '@primer/octicons-react'
import { Box, CounterLabel, Heading, Link, PageHeader, Stack, Text } from '@primer/react'
import { Blankslate } from '@primer/react/experimental'
import { useMemo, useState } from 'react'
import { AppHeader, Categories, URLSchemeCard, URLSchemeDetailModal } from '@/components'
import { CATEGORIES, GITHUB_REPO_URL, URL_SCHEMES } from '@/constants'

interface CategoryWithSchemes extends Category {
  schemes: UrlScheme[]
}

type GroupedSchemes = Record<CategoryId, CategoryWithSchemes>

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | undefined>()
  const [selectedUrlScheme, setSelectedUrlScheme] = useState<UrlScheme | null>(null)
  const [open, setOpen] = useState(false)

  const filteredSchemes = useMemo(() => {
    let schemes = URL_SCHEMES

    if (selectedCategory) {
      schemes = schemes.filter((scheme: UrlScheme) => scheme.category === selectedCategory)
    }

    if (searchQuery?.trim()) {
      const query = searchQuery.toLowerCase()
      schemes = schemes.filter(
        (scheme: UrlScheme) =>
          scheme.name.toLowerCase().includes(query) ||
          scheme.description?.toLowerCase().includes(query) ||
          scheme.urlSchemeTemplate.toLowerCase().includes(query)
      )
    }

    return schemes
  }, [searchQuery, selectedCategory])

  const openDetail = (scheme: UrlScheme) => {
    setSelectedUrlScheme(scheme)
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
    setSelectedUrlScheme(null)
  }

  const groupedSchemes = CATEGORIES.reduce((groups: GroupedSchemes, category) => {
    groups[category.id] = {
      ...category,
      schemes: [],
    }
    return groups
  }, {} as GroupedSchemes)

  filteredSchemes.forEach(scheme => {
    const categoryId = scheme.category
    if (groupedSchemes[categoryId]) {
      groupedSchemes[categoryId]!.schemes.push(scheme)
    }
  })

  const handleCategoryClick = (categoryId?: CategoryId) => {
    setSelectedCategory(categoryId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const displaySchemes = selectedCategory
    ? groupedSchemes[selectedCategory].schemes
    : filteredSchemes

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

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
              categories={CATEGORIES}
              schemes={URL_SCHEMES}
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
                    {selectedCategory ? groupedSchemes[selectedCategory].name : '👋 Hey~'}
                  </PageHeader.Title>
                </PageHeader.TitleArea>
                {selectedCategory ? (
                  <PageHeader.Description>
                    {CATEGORIES.find(c => c.id === selectedCategory)?.description}
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
                        style={{ fontWeight: 'semibold' }}
                      >
                        PR 📢
                      </Link>{' '}
                      一起完善它，如果觉得有用也欢迎点个{' '}
                      <Link
                        href={GITHUB_REPO_URL}
                        target="_blank"
                        style={{ fontWeight: 'semibold' }}
                      >
                        Star ⭐
                      </Link>
                      ，谢谢！
                    </span>
                  </PageHeader.Description>
                )}
              </PageHeader>

              <Box>
                {selectedCategory ? (
                  <>
                    {displaySchemes.length === 0 ? (
                      <Blankslate>
                        <Blankslate.Visual>
                          <SearchIcon size="medium" />
                        </Blankslate.Visual>
                        <Blankslate.Heading>暂无可用 URL Scheme</Blankslate.Heading>
                        <Blankslate.Description>
                          请尝试调整搜索关键词或选择不同的分类
                        </Blankslate.Description>
                      </Blankslate>
                    ) : (
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gap: 3,
                          '& > *': {
                            minWidth: 0,
                            width: '100%',
                          },
                        }}
                      >
                        {displaySchemes.map((scheme: UrlScheme) => (
                          <URLSchemeCard
                            key={scheme.id}
                            scheme={scheme}
                            onShowDetails={openDetail}
                          />
                        ))}
                      </Box>
                    )}
                  </>
                ) : (
                  <Stack direction="vertical" spacing={6}>
                    {Object.entries(groupedSchemes).map(
                      ([categoryId, categoryData]: [string, CategoryWithSchemes]) => (
                        <Stack key={categoryId}>
                          <Box
                            sx={{
                              position: 'sticky',
                              top: 0,
                              zIndex: 10,
                              bg: 'canvas.default',
                              py: 3,
                              borderBottom: '1px solid',
                              borderColor: 'border.subtle',
                              backdropFilter: 'blur(8px)',
                            }}
                          >
                            <Stack direction="horizontal" align="center" gap="condensed">
                              <Heading as="h2" sx={{ fontSize: 3 }}>
                                {categoryData.name}
                              </Heading>
                              <CounterLabel>{categoryData.schemes.length}</CounterLabel>
                            </Stack>
                          </Box>

                          <Text sx={{ color: 'fg.muted', fontSize: 1 }}>
                            {categoryData.description}
                          </Text>

                          <Box
                            sx={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(3, 1fr)',
                              gap: 3,
                              '& > *': {
                                minWidth: 0,
                                width: '100%',
                              },
                            }}
                          >
                            {categoryData.schemes.map((scheme: UrlScheme) => (
                              <URLSchemeCard
                                key={scheme.id}
                                scheme={scheme}
                                onShowDetails={openDetail}
                              />
                            ))}
                          </Box>
                        </Stack>
                      )
                    )}
                  </Stack>
                )}
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>

      {selectedUrlScheme && open && (
        <URLSchemeDetailModal scheme={selectedUrlScheme} onClose={handleCloseModal} />
      )}
    </Box>
  )
}

export default App
