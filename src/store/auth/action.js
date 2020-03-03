import { SIGNIN, SIGNOUT } from '../actionTypes'

export const signUser = (token) => {
  return ({
    type: SIGNIN,
    payload: token
  })
}
export function signoutUser () {
  return ({
    type: SIGNOUT
  })
}
