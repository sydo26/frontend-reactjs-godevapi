// Themes - index.ts

import { DefaultTheme } from 'styled-components'

import LightTheme from './schema/lightSchema'
import DarkTheme from './schema/darkSchema'

const themes: Array<DefaultTheme> = [LightTheme, DarkTheme]

export default themes
