import React, { Component } from 'react'
import { Link } from 'react-router'

import './css/styles.scss'

export class About extends Component {
  render () {
    return (
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
        <div className='About-Container'>
          <h3 className='About'>About</h3>
          <div className='About-SubTitle'>Inspiration Behind Brew-It</div> <br />
          <p className='AboutInfo'>
          I created Brew-It as a way to discover and learn
          more about craft beers. Alot of friends around me seemed to
          have this innate knowledge on beers, but I had
          no clue. So I built Brew-It to indulge my curiosity.
          This app is mobile-friendly, and if you're traveling around the US,
          you have access to see what breweries are around in your area.
          </p>
          <div>Have fun using Brew-It!</div>
        </div>
      </div>
      )
  }
}
