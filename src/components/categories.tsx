import React from 'react'
import { Text, NavList, CounterLabel, Stack } from '@primer/react'
import type { Category, UrlScheme } from '@/types'
import type { CategoryId } from '@/constants'

interface CategoriesProps {
  categories: Category[]
  schemes: UrlScheme[]
  selectedCategory?: CategoryId | undefined
  onCategoryChange: (categoryId?: CategoryId) => void
}

export function Categories({ categories, schemes, selectedCategory, onCategoryChange }: CategoriesProps) {
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
          <CounterLabel scheme="secondary">{schemes.length}</CounterLabel>
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
              <CounterLabel scheme="secondary">
                {schemes.filter(scheme => scheme.category === category.id).length}
              </CounterLabel>
            </Stack>
          </NavList.Item>
        )
      })}
    </NavList>
  )
}
