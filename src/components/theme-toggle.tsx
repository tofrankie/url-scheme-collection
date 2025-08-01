import { IconButton } from '@primer/react'
import { SunIcon, MoonIcon } from '@primer/octicons-react'
import { useTheme } from '@primer/react'

export function ThemeToggle() {
  const { colorMode, setColorMode } = useTheme()

  const toggleTheme = () => {
    setColorMode(colorMode === 'day' ? 'night' : 'day')
  }

  return (
    <IconButton
      icon={colorMode === 'day' ? MoonIcon : SunIcon}
      aria-label={`切换到${colorMode === 'day' ? '深色' : '浅色'}模式`}
      variant="invisible"
      size="small"
      onClick={toggleTheme}
    />
  )
}
