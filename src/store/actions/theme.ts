// Store Action - theme.ts

// Action creator - Alterar o nome do tema e se ele se encontra carregado ou não.
export function changeTheme(name: string, loaded: boolean) {
  window.localStorage.setItem('theme', name)
  return {
    type: `PASS_TO_${name.toUpperCase()}`,
    payload: loaded,
  }
}
