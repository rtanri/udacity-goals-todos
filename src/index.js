import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reducer from './reducers' // 1. Add root reducer 
import middleware from './middleware'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer, middleware)


ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
)
