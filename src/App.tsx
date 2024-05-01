import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import './styles/global.css'

import 'dayjs/locale/pt-br'

import { MantineProvider } from '@mantine/core'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './lib/query-client'
import { Home } from './pages/home'

export function App() {
  return (
    <MantineProvider
      theme={{ fontFamily: 'Catamaran, sans-serif' }}
      defaultColorScheme="dark"
    >
      <QueryClientProvider client={queryClient}>
        <Home />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MantineProvider>
  )
}
