import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style/global'

// import reducers
import authReducer from './store/auth/authReducer'
// ........
const store = createStore(
  combineReducers({
    authReducer
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))

serviceWorker.unregister()
