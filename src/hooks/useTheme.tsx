// Custom Hook useTheme - useTheme.ts

// import { UseThemeProps } from 'hooks-props'
import { useCallback, useEffect, useState } from 'react'
import WebFont from 'webfontloader'

import _ from 'lodash'

import themes from '../themes' // todos os temas precisam estar aqui listados em um array
import { DefaultTheme } from 'styled-components' // Fiz o DefaultTheme herdar os atributos de Theme(theme/format) em @types/globals.d.ts
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../store/actions/theme'

// Não irei exportar ou colocar em algum contexto global, pois não irei precisar disso
type HookReturn = {
  theme: DefaultTheme
  themeName: string
  loaded: boolean
}

// Pega o nome do tema pelos prop informados. Resulta '' caso o nome não seja informado ou não exista no storage.
// const getThemeName: (theme: string | null, byStorage: boolean) => string = (
//   theme,
//   byStorage,
// ) => {
//   return byStorage
//     ? window.localStorage.getItem('theme')?.toLowerCase() || ''
//     : theme?.toLowerCase() || ''
// }

export const useTheme: () => HookReturn = () => {
  const dispatch = useDispatch()

  // Salvo o primeiro theme da lista, como o padrão. Considero que sempre irá ter 1 tema pelo menos.
  const [themeObject, setThemeObject] = useState<DefaultTheme>(themes[0])
  // Mesmo após alterar o theme com o setThemeObject, o loaded continua como true após o primeiro load.
  const [themeLoaded, setThemeLoaded] = useState(false)

  // Inicia o nome do theme como o passado por parâmetro ou o valor salvo no storage do client
  const dataTheme = useSelector((state: any) => state.theme.name) // com redux
  const updateTheme = useCallback(
    (name: string, loaded: boolean) => {
      dispatch(changeTheme(name, loaded))
    },
    [dispatch, dataTheme, themeLoaded],
  )
  // const [dataTheme, setDataTheme] = useState<string>(
  //   getThemeName(theme, byStorage),
  // )

  // Usei o loadsh para filtrar no meu array de themes e pegar o nome exato do theme passado por parâmetro
  const handleGetTheme = () => {
    console.log(dataTheme)
    const t = _.filter(
      themes,
      (value) => value.name.toLowerCase() === dataTheme,
    )[0]

    return t || themes[0]
  }

  // pega todos os valores das fonts em cada objeto no array, ex: [Roboto, Tinos, ...]
  const handleGetAllFontsName = () => {
    const fonts = _.values(_.mapValues(themes, 'font'))
    return _.uniq(_.flattenDeep(_.values(_.mapValues(fonts, 'google'))))
  }

  useEffect(() => {
    const targetTheme = handleGetTheme()

    // Fonts
    const fonts = handleGetAllFontsName()

    // Carrega as fontes na página
    WebFont.load({
      google: {
        families: fonts,
      },
    })

    setThemeLoaded(true) // sempre vai ser true após a página carregar
    setThemeObject(targetTheme) // Seta o objeto do theme, que temos em themes/format

    return () => {
      setThemeObject(themes[0])
      setThemeLoaded(false)
    }
  }, [])

  useEffect(() => {
    if (themeLoaded) {
      // caso ele já tenha carregado a primeira renderização, então ele executa
      const targetTheme = handleGetTheme() // pega novamente o theme de acordo com o nome
      setThemeObject(targetTheme) // altera para o novo theme
    }
  }, [dataTheme]) // repete cada vez que o dataTheme sofrer uma alteração

  useEffect(() => {
    updateTheme(dataTheme, themeLoaded)
  }, [themeLoaded])

  return {
    theme: themeObject, // Usado em ThemeProvider do styled-components
    themeName: dataTheme, // Nome do theme
    loaded: themeLoaded, // Se carregou ou não
  }
}
