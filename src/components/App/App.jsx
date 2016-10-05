// Monogoto
import React, {Component} from 'react'
import request from 'superagent'
import suitClassNames from 'suitcss-classnames'
import './styles.scss'

require('./App.scss')

export class App extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      beers: [],
      breweries: [],
    }
  }
  classNames (options) {
    return suitClassNames({
      namespace: 'smap',
      component: 'ApplicationNode',
      ...options
    })
  }

  handleBeerChange = (list) => {
    this.setState({ beers: list })
  }

  handleBreweryChange = (list) => {
    this.setState({ breweries: list})
  }

  render () {
    const appClasses = this.classNames()
    const titleClasses = this.classNames({descendant: 'title'})
    const { beers } = this.state

    return (
      <div className={appClasses}>
        <div className={titleClasses}>Brew It </div>
        <BeerSearch onChange={this.handleBeerChange} />
        <BeerList beers={beers} />
        <LocationSearch onChange={this.handleBreweryChange} />
      </div>
    )
  }
}

class BeerList extends Component {
  render () {
    const { beers } = this.props

    const beerList = beers.map((beer) => {
      return <h3 key={`${beer.name}-${index}`}>{beer.name}</h3>
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
  handleClick = (e) => {
    const { value } = this.state
    request.get(`/beers?name=${value}`)
      .end((err, result) => {
        if (err) throw new Error(err)
        this.props.onChange(JSON.parse(result.body.text).data)
      })
  }
  handleClear = () => {
    this.props.onChange([])
  }
  render () {
    const { onChange } = this.props
    const { value } = this.state
    return (
      <div className='Beer-search-form'>
        <input
          type='text'
          value={value}
          placeholder='Search for Craft Beers Here'
          onChange={(e) => {
            this.setState({ value: e.currentTarget.value })
          }}
        />
        <button onClick={this.handleClick}>Search</button>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}

class LocationSearch extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: ''
    }
  }
  handleClick = (e) => {
    const { value } = this.state
    request.get(`/breweries?location=${value}`)
      .end((err, result) => {
        if (err) throw new Error(err)
        this.props.onChange(JSON.parse(result.body.text).data)
      })
  }
  handleClear = () => {
    this.props.onChange([])
  }
  render () {
    return (
      <div className='Location-search-form'>
        <input
          type='text'
          placeholder='Search Beers by a Location Near You'
          onChange={(e) => {
            this.setState({ value: e.currentTarget.value })
          }}
        />
        <button onClick={this.handleClick}>Search</button>
        <button onClick={this.handleClear}>Clear</button>
      </div>
      )
  }
}
