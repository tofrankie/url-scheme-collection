import { Box, Button, IconButton, PageHeader, Stack, TextInput, useTheme } from '@primer/react'
import { CommentIcon, MarkGithubIcon, SunIcon, MoonIcon, SearchIcon } from '@primer/octicons-react'
import { GITHUB_ISSUES_URL, GITHUB_REPO_URL, STORAGE_KEYS } from '@/constants'
import { trackThemeToggle, trackFeedback, trackGithubHomepage, debouncedTrackSearch } from '@/utils/track'

interface AppHeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export default function AppHeader({ searchQuery, onSearchChange }: AppHeaderProps) {
  const { colorMode, setColorMode } = useTheme()

  const toggleTheme = () => {
    const newColorMode = colorMode === 'day' ? 'night' : 'day'
    setColorMode(newColorMode)
    localStorage.setItem(STORAGE_KEYS.COLOR_MODE, newColorMode)

    trackThemeToggle({ to: newColorMode })
  }

  const handleSearchChange = (keyword: string) => {
    const trimmedKeyword = keyword.trim()
    onSearchChange(trimmedKeyword)

    if (trimmedKeyword) {
      debouncedTrackSearch({ keyword: trimmedKeyword })
    }
  }

  const handleFeedbackClick = () => {
    trackFeedback()
    window.open(GITHUB_ISSUES_URL, '_blank')
  }

  const handleGithubClick = () => {
    trackGithubHomepage()
    window.open(GITHUB_REPO_URL, '_blank')
  }

  return (
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
            <Box sx={{ width: '200px', fontWeight: 'normal' }}>
              <TextInput
                value={searchQuery}
                onChange={e => handleSearchChange(e.target.value)}
                placeholder="搜索 URL Scheme..."
                leadingVisual={SearchIcon}
                block
              />
            </Box>

            <Button variant="primary" leadingVisual={CommentIcon} onClick={handleFeedbackClick}>
              反馈
            </Button>

            <IconButton
              icon={colorMode === 'day' ? MoonIcon : SunIcon}
              aria-label={`切换为${colorMode === 'day' ? '深色' : '浅色'}模式`}
              variant="invisible"
              size="small"
              onClick={toggleTheme}
            />

            <IconButton
              aria-label="GitHub Homepage"
              icon={MarkGithubIcon}
              variant="invisible"
              onClick={handleGithubClick}
            />
          </Stack>
        </PageHeader.Actions>
      </PageHeader>
    </Box>
  )
}
