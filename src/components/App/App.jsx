// Monogoto
import React, {Component} from 'react'
import request from 'superagent'
import suitClassNames from 'suitcss-classnames'
import './css/styles.scss'

import BeerList from './BeerList'
import BreweryList from './BreweryList'
import BeerSearch from './BeerSearch'
import LocationSearch from './LocationSearch'

import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, Link, IndexRoute } from 'react-router'
import Normalize from './Normalize.css'

import { Label, DropdownButton, MenuItem, Form, Button } from 'react-bootstrap' 

import About from './About'

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
            <li className='Left Title'> Brew It</li>
            <li className='Left Subtitle'> Discover and Find
              America's Craft Beer <br/> and Breweries 
            </li>    
         
            <li className='Right Top'>
              <Link to="/About"> 
                About 
              </Link>  
            </li>
            <li className='Right Top'> Contact </li>
            <li className='Right Top'> 
              <Link to="/">
                Home 
              </Link>
            </li>
          </ul>
        </div>  

        <BeerSearch onChange={this.handleBeerChange} />
        <BeerList beers={beers} />
        <LocationSearch onChange={this.handleBreweryChange} />
        <BreweryList breweries={breweries} />
      </div>
      </div>
    )
  }
}


