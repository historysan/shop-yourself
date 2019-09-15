/* eslint no-unused-vars: 0 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import Button from '../Button/Button'
import { selectCartItems } from '../../redux/cart/cartSelector'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import './CartDropdown.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</Button>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
