import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { sampleURLSchemes, sampleCategories } from '@/data/sample-data'
import type { URLScheme, Category } from '@/types'

// 查询键常量
export const queryKeys = {
  urlSchemes: ['urlSchemes'] as const,
  categories: ['categories'] as const,
  urlScheme: (id: string) => ['urlScheme', id] as const,
  filteredSchemes: (filters: {
    search?: string
    category?: string | undefined
  }) => ['urlSchemes', 'filtered', filters] as const,
}

// 获取所有 URL Schemes
export const useURLSchemes = () => {
  return useQuery({
    queryKey: queryKeys.urlSchemes,
    queryFn: async (): Promise<URLScheme[]> => {
      // 模拟 API 调用延迟
      await new Promise(resolve => setTimeout(resolve, 500))
      return sampleURLSchemes
    },
  })
}

// 获取所有分类
export const useCategories = () => {
  return useQuery({
    queryKey: queryKeys.categories,
    queryFn: async (): Promise<Category[]> => {
      // 模拟 API 调用延迟
      await new Promise(resolve => setTimeout(resolve, 300))
      return sampleCategories
    },
  })
}

// 获取单个 URL Scheme
export const useURLScheme = (id: string) => {
  return useQuery({
    queryKey: queryKeys.urlScheme(id),
    queryFn: async (): Promise<URLScheme | undefined> => {
      // 模拟 API 调用延迟
      await new Promise(resolve => setTimeout(resolve, 200))
      return sampleURLSchemes.find(scheme => scheme.id === id)
    },
    enabled: !!id,
  })
}

// 获取过滤后的 URL Schemes
export const useFilteredURLSchemes = (filters: {
  search?: string
  category?: string | undefined
}) => {
  return useQuery({
    queryKey: queryKeys.filteredSchemes(filters),
    queryFn: async (): Promise<URLScheme[]> => {
      // 模拟 API 调用延迟
      await new Promise(resolve => setTimeout(resolve, 300))

      let schemes = sampleURLSchemes

      // 按分类过滤
      if (filters.category) {
        schemes = schemes.filter(scheme => scheme.category === filters.category)
      }

      // 按搜索查询过滤
      if (filters.search?.trim()) {
        const query = filters.search.toLowerCase()
        schemes = schemes.filter(
          scheme =>
            scheme.name.toLowerCase().includes(query) ||
            scheme.description?.toLowerCase().includes(query) ||
            scheme.urlTemplate.toLowerCase().includes(query)
        )
      }

      return schemes
    },
  })
}

// 创建 URL Scheme
export const useCreateURLScheme = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (
      newScheme: Omit<URLScheme, 'id'>
    ): Promise<URLScheme> => {
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 1000))

      const createdScheme: URLScheme = {
        ...newScheme,
        id: `scheme-${Date.now()}`, // 模拟生成 ID
      }

      return createdScheme
    },
    onSuccess: () => {
      // 成功后使相关查询失效
      queryClient.invalidateQueries({ queryKey: queryKeys.urlSchemes })
      queryClient.invalidateQueries({ queryKey: queryKeys.filteredSchemes({}) })
    },
  })
}

// 更新 URL Scheme
export const useUpdateURLScheme = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      id,
      ...updates
    }: Partial<URLScheme> & { id: string }): Promise<URLScheme> => {
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 800))

      const updatedScheme: URLScheme = {
        ...sampleURLSchemes.find(s => s.id === id)!,
        ...updates,
        id,
      }

      return updatedScheme
    },
    onSuccess: updatedScheme => {
      // 成功后更新缓存
      queryClient.setQueryData(
        queryKeys.urlScheme(updatedScheme.id),
        updatedScheme
      )
      queryClient.invalidateQueries({ queryKey: queryKeys.urlSchemes })
      queryClient.invalidateQueries({ queryKey: queryKeys.filteredSchemes({}) })
    },
  })
}

// 删除 URL Scheme
export const useDeleteURLScheme = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string): Promise<void> => {
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 600))
      // TODO: 实际删除逻辑，这里只是模拟
      console.log('删除 URL Scheme:', id)
    },
    onSuccess: (_, deletedId) => {
      // 成功后从缓存中移除
      queryClient.removeQueries({ queryKey: queryKeys.urlScheme(deletedId) })
      queryClient.invalidateQueries({ queryKey: queryKeys.urlSchemes })
      queryClient.invalidateQueries({ queryKey: queryKeys.filteredSchemes({}) })
    },
  })
}
