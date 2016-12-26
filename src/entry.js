import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'reducers'
import HCard from './containers/HCard'
import './styles/global.styl'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <HCard />
  </Provider>,
  document.getElementById('hCard')
)
