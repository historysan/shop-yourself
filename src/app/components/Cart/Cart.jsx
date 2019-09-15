/* eslint no-unused-vars: 0 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import { selectCartItemsCount } from '../../redux/cart/cartSelector'
import { ReactComponent as CartIcon } from '../../../assets/shopping-bag.svg'
import './Cart.scss'

const Cart = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <CartIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
