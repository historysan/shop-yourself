import { combineReducers } from 'redux'
import userReducer from './currentUser/currentUserReducer'
import cartReducer from './cart/cartReducer'

export default combineReducers({
  user: userReducer,
  cart: cartReducer
})
