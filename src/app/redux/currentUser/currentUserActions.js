import { currentUserActionTypes } from './currentUserTypes'

export const setCurrentUser = payload => ({
  type: currentUserActionTypes.SET_CURRENT_USER,
  payload
})
