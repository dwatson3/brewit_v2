import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App/App.jsx'
import { Router, Route, browserHistory } from 'react-router'
import { About } from './components/App/About.jsx'
import { Contact } from './components/App/Contact.jsx'

const rootNode = document.getElementById('appRoot')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/About' component={About} />
    <Route path='/Contact' component={Contact} />
  </Router>, rootNode)
