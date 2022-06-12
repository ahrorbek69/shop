import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Header from './container/Header'
import Notfaund from './container/notFaund/Notfaund'
import Productcomponents from './container/Productcomponents'
import ProductList from './container/ProductList'

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <ProductList />
          </Route>
          <Route path='/product/:id'>
            <Productcomponents />
          </Route>
          <Route>
            <Notfaund />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default App