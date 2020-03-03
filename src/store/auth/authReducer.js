import { SIGNIN, SIGNOUT } from '../actionTypes'
const initialState = {
  isConnected: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNIN:
      return { ...state, isConnected: payload }
    case SIGNOUT:
      return initialState
    default:
      return state
  }
}
