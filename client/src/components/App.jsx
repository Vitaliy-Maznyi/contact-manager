import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import enableAxiosInterceptors from 'api/axiosInterceptors'
import { Layout } from 'components'

import {
  Contacts,
  Contact,
} from 'routes'

import PageNotFound from './PageNotFound'

const App = () => {
  enableAxiosInterceptors()

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route component={Contacts} path='/' exact />
          <Route component={Contact} path='/contacts/:id' />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
