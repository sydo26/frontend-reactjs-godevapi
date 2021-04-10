import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  body, html {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.default};
    font-family: ${({ theme }) => theme.primaryFont};
  }

  .background {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }

  .navbar {
    background-color: ${({ theme }) => theme.colors.background.primary};
  }

  .text.default {
    color: ${({ theme }) => theme.colors.text.default};
  }

  .text.strong {
    color: ${({ theme }) => theme.colors.text.strong};
  }

  .text.weak {
    color: ${({ theme }) => theme.colors.text.weak};
  }

  button {
    font-family: ${({ theme }) => theme.primaryFont};
  }

  button.primary {
    background: ${({ theme }) => theme.colors.button.primary};
    color: ${({ theme }) => theme.colors.button.text.primary};
  }

  button.secondary {
    background: ${({ theme }) => theme.colors.button.secondary};
    color: ${({ theme }) => theme.colors.button.text.secondary};
  }
`
