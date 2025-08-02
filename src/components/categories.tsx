import React from 'react'
import { Text, NavList, CounterLabel, Stack } from '@primer/react'
import type { Category } from '@/types'

interface CategoriesProps {
  categories: Category[]
  selectedCategory?: string | undefined
  onCategoryChange: (categoryId?: string) => void
}

export function Categories({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoriesProps) {
  return (
    <NavList>
      <NavList.Item
        href="#"
        aria-current={!selectedCategory ? 'page' : false}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault()
          onCategoryChange(undefined)
        }}
      >
        <Stack direction="horizontal" align="center" gap="condensed">
          <Text>所有</Text>
          <CounterLabel scheme="secondary">
            {categories.reduce((sum, cat) => sum + cat.count, 0)}
          </CounterLabel>
        </Stack>
      </NavList.Item>

      {categories.map(category => {
        const isSelected = selectedCategory === category.id
        return (
          <NavList.Item
            key={category.id}
            href="#"
            aria-current={isSelected ? 'page' : false}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              onCategoryChange(category.id)
            }}
          >
            <Stack direction="horizontal" align="center" gap="condensed">
              <Text>{category.name}</Text>
              <CounterLabel scheme="secondary">{category.count}</CounterLabel>
            </Stack>
          </NavList.Item>
        )
      })}
    </NavList>
  )
}
