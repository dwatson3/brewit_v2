// Monogoto
import React from 'react'
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
    const appClasses = this.classNames()
    const titleClasses = this.classNames({descendant: 'title'})

    return (
      <div className={appClasses}>
        <div className={titleClasses}>This is your app</div>
      </div>
    )
  }
}
