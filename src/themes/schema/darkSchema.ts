// Theme Dark - schema.ts

import Theme from '../config/format'

const lightTheme: Theme = {
  id: 'dark_theme_0',
  name: 'dark',
  colors: {
    background: {
      primary: '#5F47FF',
      secondary: '#333333',
    },
    button: {
      primary: '#5F47FF',
      secondary: '#22C9AE',
      text: {
        primary: '#FFFFFF',
        secondary: '#FFFFFF',
      },
    },
    icon: {
      primary: '#2C2D66',
      secondary: '#FFFFFF',
    },
    text: {
      default: '#2C2D66',
      weak: '#35365ad9',
      strong: '#1c1c40',
    },
  },
  font: {
    google: ['Roboto:400,500,700,900'],
  },
  primaryFont: 'Roboto',
}

export default lightTheme
