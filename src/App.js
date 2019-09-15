/* eslint no-unused-vars: 0 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './app/modules/HomePage/HomePage'
import ShopPage from './app/modules/ShopPage/ShopPage'
import Header from './app/components/Header/Header'
import './App.css'

function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
