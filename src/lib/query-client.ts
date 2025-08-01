import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 查询默认配置
      staleTime: 5 * 60 * 1000, // 5分钟
      gcTime: 10 * 60 * 1000, // 10分钟 (原 cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      // 变更默认配置
      retry: 1,
    },
  },
})
