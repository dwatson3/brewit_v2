import React, { Component } from 'react'
import { Link } from 'react-router'

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
        </div>

        <div className='Contact-Container'>
          <div className='Contact'> Contact </div>
          <p> Hello! <br /> My name is Daphne, and I'm a Front-End Engineer. 
            Thanks for checking out Brew-It, and I hope you discovered a new
            craft beer to try.
                Feel free to check out my code for Brew-It on
            <a href={'https://github.com/dwatson3/brewit_v2'} className='PortfolioLink'> Github. </a>
              You can also visit my
            <a href={'http://www.daphnewatson.com/'} className='PortfolioLink'> website, </a>
             or find me on
            <a href={'https://www.linkedin.com/in/daphnewatson'} className='PortfolioLink'> LinkedIn </a>
             or
            <a href={'https://twitter.com/daphnewsf'} className='PortfolioLink'> Twitter. </a>
          </p>
        </div>
      </div>
    )
  }
}
