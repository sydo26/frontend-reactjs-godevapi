// store/reducers - theme.ts

type ReducerStateProps = {
  name: string
  loaded: boolean
}

type ReducerActionProps = {
  type: string
  payload: boolean
}

const init: ReducerStateProps = {
  name: window.localStorage.getItem('theme') || 'light',
  loaded: false,
}

function reducer(state = init, action: ReducerActionProps) {
  switch (action.type) {
    case 'PASS_TO_LIGHT':
      return {
        name: 'light',
        loaded: action.payload,
      }
    case 'PASS_TO_DARK':
      return {
        name: 'dark',
        loaded: action.payload,
      }
    default:
      return state
  }
}

export default reducer
