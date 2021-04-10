/* eslint no-unused-vars: "off", curly: "error" */
import ThemeInterface from '../themes/config/format'
declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
