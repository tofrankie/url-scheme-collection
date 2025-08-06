import { StrictMode } from 'react'
import { BaseStyles, ThemeProvider } from '@primer/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Analytics } from '@vercel/analytics/react'
import { STORAGE_KEYS } from '@/constants'
import Index from '@/pages/index.tsx'

import '@/styles/global.css'

export default function App() {
  const initialColorMode = getInitialColorMode()
  const queryClient = getQueryClient()

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider colorMode={initialColorMode}>
          <BaseStyles>
            <Index />
          </BaseStyles>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <Analytics />
      </QueryClientProvider>
    </StrictMode>
  )
}

function getInitialColorMode() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.COLOR_MODE)
  return savedTheme === 'night' ? 'night' : 'day'
}

function getQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
        gcTime: 1000 * 60 * 60,
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
      mutations: {
        retry: 0,
      },
    },
  })
}
