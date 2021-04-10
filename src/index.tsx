// index.tsx

import React from 'react'
import ReactDOM from 'react-dom'
import configStore from './store/config'

// global stylesheet
import './global.css'

import { Provider as ProviderRedux } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app'

const store = configStore()

ReactDOM.render(
  <ProviderRedux store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ProviderRedux>,
  document.getElementById('root'),
)
