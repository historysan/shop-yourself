/* eslint no-unused-vars: 0 */

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Cart from '../Cart/Cart'
import CartDropdown from '../CartDropdown/CartDropdown'
import { ReactComponent as Logo } from '../../../assets/crown.svg'
import { auth } from '../../../firebase/firebase.utils'
import { selectCurrentUser } from '../../redux/currentUser/currentUserSelector'
import { selectCartHidden } from '../../redux/cart/cartSelector'
import './Header.scss'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser
        ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        : <Link className="option" to="/sign-in">SIGN IN</Link>
      }
      <Cart />
    </div>
    {hidden ? null : (<CartDropdown />)}
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
