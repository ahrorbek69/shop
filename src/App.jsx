import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Header from './container/Header'

const App = () => {
  return (
    <BrowserRouter>
        <Header />
    </BrowserRouter>
  )
}

export default App