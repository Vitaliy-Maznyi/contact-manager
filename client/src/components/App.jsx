import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  Contacts,
  Contact,
} from '../routes'

import PageNotFound from './PageNotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Contacts} path='/' exact />
      <Route component={Contact} path='/contacts/:id' />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
