import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import configureStore from 'store'
import enableAxiosInterceptors from 'api/axiosInterceptors'
import { Layout } from 'components'

import {
  Contacts,
  Contact,
} from 'routes'

import PageNotFound from './PageNotFound'

const App = () => {
  const store = configureStore()
  enableAxiosInterceptors()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route component={Contacts} path='/' exact />
            <Route component={Contact} path='/contacts/:id' />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
