import { TextInput } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <TextInput
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      leadingVisual={SearchIcon}
      block
    />
  )
}
