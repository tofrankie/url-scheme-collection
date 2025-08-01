# React Query 集成说明

## 概述

本项目已成功集成 React Query (TanStack Query)，用于管理服务器状态和缓存。React Query 提供了强大的数据获取、缓存、同步和更新功能。

## 安装的依赖

- `@tanstack/react-query`: 核心库
- `@tanstack/react-query-devtools`: 开发工具

## 配置

### QueryClient 配置

在 `src/lib/query-client.ts` 中配置了 QueryClient 实例：

```typescript
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5分钟
      gcTime: 10 * 60 * 1000, // 10分钟
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
})
```

### Provider 设置

在 `src/main.tsx` 中包装了应用：

```typescript
<QueryClientProvider client={queryClient}>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
```

## 可用的 Hooks

### 查询 Hooks

#### `useURLSchemes()`

获取所有 URL Schemes

```typescript
const { data: schemes, isLoading, error } = useURLSchemes()
```

#### `useCategories()`

获取所有分类

```typescript
const { data: categories, isLoading, error } = useCategories()
```

#### `useURLScheme(id)`

获取单个 URL Scheme

```typescript
const { data: scheme, isLoading, error } = useURLScheme('scheme-id')
```

#### `useFilteredURLSchemes(filters)`

获取过滤后的 URL Schemes

```typescript
const {
  data: schemes,
  isLoading,
  error,
} = useFilteredURLSchemes({
  search: '微信',
  category: 'social',
})
```

### 变更 Hooks

#### `useCreateURLScheme()`

创建新的 URL Scheme

```typescript
const createMutation = useCreateURLScheme()

const handleCreate = async newScheme => {
  try {
    await createMutation.mutateAsync(newScheme)
    // 成功处理
  } catch (error) {
    // 错误处理
  }
}
```

#### `useUpdateURLScheme()`

更新 URL Scheme

```typescript
const updateMutation = useUpdateURLScheme()

const handleUpdate = async (id, updates) => {
  try {
    await updateMutation.mutateAsync({ id, ...updates })
    // 成功处理
  } catch (error) {
    // 错误处理
  }
}
```

#### `useDeleteURLScheme()`

删除 URL Scheme

```typescript
const deleteMutation = useDeleteURLScheme()

const handleDelete = async id => {
  try {
    await deleteMutation.mutateAsync(id)
    // 成功处理
  } catch (error) {
    // 错误处理
  }
}
```

## 查询键管理

在 `src/hooks/use-url-schemes.ts` 中定义了查询键常量：

```typescript
export const queryKeys = {
  urlSchemes: ['urlSchemes'] as const,
  categories: ['categories'] as const,
  urlScheme: (id: string) => ['urlScheme', id] as const,
  filteredSchemes: filters => ['urlSchemes', 'filtered', filters] as const,
}
```

## 缓存策略

- **staleTime**: 5分钟 - 数据在5分钟内被认为是新鲜的
- **gcTime**: 10分钟 - 数据在内存中保留10分钟
- **retry**: 1次 - 失败时重试1次
- **refetchOnWindowFocus**: false - 窗口聚焦时不重新获取

## 开发工具

React Query DevTools 已集成，在开发模式下可以通过右下角的图标打开，用于：

- 查看所有查询和变更
- 检查缓存状态
- 手动使查询失效
- 查看查询时间线

## 最佳实践

1. **使用查询键常量**: 避免硬编码查询键
2. **合理设置 staleTime**: 根据数据更新频率设置
3. **处理加载和错误状态**: 始终处理 `isLoading` 和 `error` 状态
4. **使用乐观更新**: 对于变更操作，考虑使用乐观更新提升用户体验
5. **缓存失效**: 在变更成功后正确使相关查询失效

## 示例组件

参考 `src/components/url-scheme-form.tsx` 了解如何在表单中使用 mutation hooks。

## 后续扩展

1. **真实 API 集成**: 替换模拟数据为真实 API 调用
2. **无限滚动**: 使用 `useInfiniteQuery` 实现分页加载
3. **乐观更新**: 实现更复杂的乐观更新逻辑
4. **离线支持**: 配置离线缓存策略
5. **预取数据**: 使用 `prefetchQuery` 预加载数据
