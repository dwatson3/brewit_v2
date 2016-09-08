// Monogoto
import React from 'react'
var request = require('superagent')
import suitClassNames from 'suitcss-classnames'

require('./App.scss')

export class App extends React.Component {

  classNames (options) {
    return suitClassNames({
      namespace: 'smap',
      component: 'ApplicationNode',
      ...options
    })
  }

  render () {
    // TODO: get this working so it calls the express backend.
    // request
    //   .get('localhost:3000/query')
    //   .end(function (err, res) {

    //   })
    const appClasses = this.classNames()
    const titleClasses = this.classNames({descendant: 'title'})

    return (
      <div className={appClasses}>
        <div className={titleClasses}>This is your app</div>
      </div>
    )
  }
}
