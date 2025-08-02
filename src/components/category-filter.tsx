import React from 'react'
import { Text, NavList, CounterLabel, Stack } from '@primer/react'
import { PackageIcon, PeopleIcon, CreditCardIcon } from '@primer/octicons-react'
import type { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory?: string | undefined
  onCategoryChange: (categoryId?: string) => void
}

// 图标映射
const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  social: PeopleIcon,
  payment: CreditCardIcon,
  default: PackageIcon,
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <NavList>
      {/* 所有分类 */}
      <NavList.Item
        href="#"
        aria-current={!selectedCategory ? 'page' : false}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault()
          onCategoryChange(undefined)
        }}
      >
        <NavList.LeadingVisual>
          <PackageIcon />
        </NavList.LeadingVisual>
        <Stack direction="horizontal" align="center" gap="condensed">
          <Text>所有</Text>
          <CounterLabel scheme="secondary">
            {categories.reduce((sum, cat) => sum + cat.count, 0)}
          </CounterLabel>
        </Stack>
      </NavList.Item>

      {/* 分类列表 */}
      {categories.map(category => {
        const IconComponent = iconMap[category.id] || PackageIcon
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
            <NavList.LeadingVisual>
              <IconComponent />
            </NavList.LeadingVisual>
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
