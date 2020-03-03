import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isConnected = useSelector(state => state.authReducer.isConnected)
  return (
    <Route
      {...rest} render={props =>
        !isConnected ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
      )}
    />
  )
}
export default PrivateRoute
