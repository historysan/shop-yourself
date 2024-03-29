/* eslint no-unused-vars: 0 */

import React from 'react'
import './CartItem.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{quantity} x ${quantity * price}</span>
    </div>
  </div>
)

export default CartItem
