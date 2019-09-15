/* eslint no-unused-vars: 0 */

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import HomePage from './app/modules/HomePage/HomePage'
import ShopPage from './app/modules/ShopPage/ShopPage'
import Header from './app/components/Header/Header'
import SignInSignUp from './app/modules/SignIn-SignUp/SignIn-SignUp'
import Checkout from './app/modules/Checkout/Checkout'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './app/redux/currentUser/currentUserActions'
import { selectCurrentUser } from './app/redux/currentUser/currentUserSelector'
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
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/sign-in"
            render={() => this.props.currentUser
              ? (<Redirect to="/" />)
              : (<SignInSignUp />)
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
