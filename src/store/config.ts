import { createStore, combineReducers } from 'redux'

import themeReducer from './reducers/theme'

const reducers = combineReducers({
  theme: themeReducer,
})

export default function store() {
  return createStore(reducers)
}
