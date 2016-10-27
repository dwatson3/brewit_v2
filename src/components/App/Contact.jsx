import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

// import Home from '/'

import './css/styles.scss'

export class Contact extends Component {
  render () {
    return (
      // <div> This is the Contact Page</div>
      <div className='Container'>
        <div>
          <div className='FlexContainer'>
            <ul className='LeftFlexContainer'>
              <li className='Left Title'> Brew It</li>
              <li className='Left Subtitle'> Discover and Find
                America's Craft Beer <br /> and Breweries
              </li>
              <li className='Right Top'>
                <Link to='/About'>
                  About
                </Link>
              </li>
              <li className='Right Top'>
                <Link to='/Contact'>
                  Contact
                </Link>
              </li>
              <li className='Right Top'>
                <Link to='/'>
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='Contact-Container'>
          <h3 className='Contact'> Contact </h3>
          <p> Hello! My name is Daphne, and I'm a Front-End Engineer. </p>
          <p> Thanks for checking out Brew-It. I hope you discovered a new
            craft beer to try.<br />
                Feel free to check out my code for Brew-It on
            <a href={'https://github.com/dwatson3/brewit_v2'}> Github. </a>
          </p>
          <p> You can also visit my
            <a href={'http://www.daphnewatson.com/'}> website, </a>
             or find me on
            <a href={'https://www.linkedin.com/in/daphnewatson'}> LinkedIn </a>
             or
            <a href={'https://twitter.com/daphnewsf'}> Twitter. </a>
          </p>
        </div>
      </div>
    )
  }
}
