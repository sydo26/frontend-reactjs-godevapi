// Routers - global.tsx

import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Home from '../screens/home'
import Connectores from '../screens/connectors'

export default function router() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/connectors" exact>
        <Connectores />
      </Route>
    </Switch>
  )
}
