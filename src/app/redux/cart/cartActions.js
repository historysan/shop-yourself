import { cartActionTypes } from './cartTypes'

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = payload => ({
  type: cartActionTypes.ADD_ITEM,
  payload
})
