import { currentUserActionTypes } from './currentUserTypes'

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case currentUserActionTypes.SET_CURRENT_USER:
      // return state.set('currentUser', action.payload)
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default userReducer
