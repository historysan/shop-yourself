/* eslint no-unused-vars: 0 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './app/modules/HomePage/HomePage'
import ShopPage from './app/modules/ShopPage/ShopPage'
import Header from './app/components/Header/Header'
import SignInSignUp from './app/modules/SignIn-SignUp/SignIn-SignUp'
import { auth } from './firebase/firebase.utils'
import './App.css'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App
