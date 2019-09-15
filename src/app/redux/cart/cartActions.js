import { cartActionTypes } from './cartTypes'

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = payload => ({
  type: cartActionTypes.ADD_ITEM,
  payload
})

export const removeItem = payload => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload
})

export const clearItemFromCart = payload => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload
})
