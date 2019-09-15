import { combineReducers } from 'redux'
import userReducer from './currentUser/currentUserReducer'

export default combineReducers({
  user: userReducer
})
