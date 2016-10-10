// Monogoto
import React, {Component} from 'react'
import request from 'superagent'
import suitClassNames from 'suitcss-classnames'
import './styles.scss'
import BeerList from './BeerList'
import BreweryList from './BreweryList'
import BeerSearch from './BeerSearch'
import LocationSearch from './LocationSearch'

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
    const { breweries } = this.state

    return (
      <div className={appClasses}>
        <div className={titleClasses}>Brew It </div>
        <BeerSearch onChange={this.handleBeerChange} />
        <BeerList beers={beers} />
        <LocationSearch onChange={this.handleBreweryChange} />
        <BreweryList breweries={breweries} />
      </div>
    )
  }
}


