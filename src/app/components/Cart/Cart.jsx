/* eslint no-unused-vars: 0 */

import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import { ReactComponent as CartIcon } from '../../../assets/shopping-bag.svg'
import './Cart.scss'

const Cart = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <CartIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(Cart)
