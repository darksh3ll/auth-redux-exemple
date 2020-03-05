import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './screens/app/Dashboard'
import Home from './screens/welcome/Home'
import Signin from './screens/welcome/Signin'
import Register from './screens/welcome/Register'
import NotFound from './screens/Notfound'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <Switch>
        {/* PrivateRoutes */}
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        {/* Routes */}
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/register' component={Register} />
        <Route path='*' component={NotFound} />
      </Switch>
    </>
  )
}

export default App
