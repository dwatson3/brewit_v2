// Monogoto
import React, {Component} from 'react'
import request from 'superagent'
import suitClassNames from 'suitcss-classnames'
import './css/styles.scss'

import BeerList from './BeerList'
import BreweryList from './BreweryList'
import BeerSearch from './BeerSearch'
import LocationSearch from './LocationSearch'
import SearchTour from './SearchTour'

import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, Link, IndexRoute } from 'react-router'
import Normalize from './Normalize.css'

import { Label, DropdownButton, MenuItem, Form, Button } from 'react-bootstrap' 

import About from './About'
import Contact from './Contact'

var FontAwesome = require('react-fontawesome')

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
      <div className='Container'>
      {/* <div className={appClasses}> */}
      <div>
        <div className='FlexContainer'>  
          <ul className='LeftFlexContainer'>
            {/* <li className={titleClasses}>Brew It </li> */}
            <li className='Title'> 
            <span className='TitleText'>
            Brew It <br />
            </span>
                Find and Discover America's Craft Beer and Breweries  
              </li>  

            <li className='Top PageLink'>
              <Link to='/About'> 
                About 
              </Link>  
            </li>

            <li className='Top PageLink'> 
              <Link to='/Contact'>
                Contact 
              </Link>  
            </li>

            <li className='Top PageLink Home'> 
              <Link to='/'>
                Home 
              </Link>
            </li>

          </ul>
        </div>

        <SearchTour />
        <BeerSearch onChange={this.handleBeerChange} />
        <LocationSearch hidden={(beers.length > 0)} onChange={this.handleBreweryChange} />
        <BeerList beers={beers} />
        <BreweryList breweries={breweries} />
      </div>
      </div>
    )
  }
}


