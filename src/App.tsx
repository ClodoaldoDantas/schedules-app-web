import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import './styles/global.css'

import 'dayjs/locale/pt-br'

import { MantineProvider } from '@mantine/core'
import { Home } from './pages/home'

export function App() {
  return (
    <MantineProvider
      theme={{ fontFamily: 'Catamaran, sans-serif' }}
      defaultColorScheme="dark"
    >
      <Home />
    </MantineProvider>
  )
}
