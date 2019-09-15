/* eslint no-unused-vars: 0 */

import React from 'react'
import { ReactComponent as CartIcon } from '../../../assets/shopping-bag.svg'
import './Cart.scss'

const Cart = () => (
  <div className="cart-icon">
    <CartIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
)

export default Cart
