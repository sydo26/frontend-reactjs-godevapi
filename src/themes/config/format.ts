export default interface Theme {
  id: string
  name: string
  colors: {
    background: {
      primary: string
      secondary: string
    }
    button: {
      primary: string
      secondary: string
      text: {
        primary: string
        secondary: string
      }
    }
    icon: {
      primary: string
      secondary: string
    }
    text: {
      default: string
      weak: string
      strong: string
    }
  }
  font: {
    google: string[]
  }
  primaryFont: string
}
