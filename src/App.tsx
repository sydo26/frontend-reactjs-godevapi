// app.tsx

import * as React from 'react'

import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/useTheme'
import GlobalRouter from './routers/global'
import { GlobalStyles } from './themes/config/global'

export default function App() {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalRouter />
    </ThemeProvider>
  )
}
