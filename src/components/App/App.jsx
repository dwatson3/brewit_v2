// Monogoto
import React, {Component} from 'react'
import request from 'superagent'
import suitClassNames from 'suitcss-classnames'

require('./App.scss')

export class App extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = { beers: [] }
  }
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
    const { beers } = this.state

    return (
      <div className={appClasses}>
        <div className={titleClasses}>Beverages</div>
        <BeerSearch onChange={(list) => this.setState({ beers: list })} />
        <BeerList beers={beers} />
      </div>
    )
  }
}

class BeerList extends Component {
  render () {
    const { beers } = this.props

    const beerList = beers.map((beer) => {
      return <h3>{beer.name}</h3>
    })
    
    return (
      <div>
        {beerList}
      </div>
    )
  }
}

class BeerSearch extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: ''
    }
  }
  render () {
    const { onChange } = this.props
    const { value } = this.state
    return (
      <div>
        <input
          type='text'
          value={value}
          placeholder='Search for Craft Beers Here'
          onChange={(e) => {
            this.setState({ value: e.currentTarget.value })
          }}
        />
        <button onClick={(e) => {
          console.log('anything?')
          request.post(`/query?name=${value}`)
          .end((err, result) => {
            if (err) throw new Error(err)
            onChange(JSON.parse(result.body.text).data)
          })

        }}>OK</button>
        <button onClick={() => onChange([])} >clear</button>
      </div>
    )
  }
}
