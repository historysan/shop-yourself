/* eslint no-unused-vars: 0 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './app/modules/HomePage/HomePage'
import ShopPage from './app/modules/ShopPage/ShopPage'
import Header from './app/components/Header/Header'
import SignInSignUp from './app/modules/SignIn-SignUp/SignIn-SignUp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './app/redux/currentUser/currentUserActions'
import './App.css'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount () {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInSignUp} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
})

export default connect(null, mapDispatchToProps)(App)
