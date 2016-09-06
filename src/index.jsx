"use strict";

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './state/store'
import { App} from './components/App'

var rootNode = document.getElementById('appRoot')

ReactDOM.render((
  <Provider store={store}>
  </Provider>
), rootNode)
