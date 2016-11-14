import React, { Component } from 'react'
import './css/styles.scss'

class BreweryList extends Component {
  render () {
    const { breweries } = this.props
    const breweryList = breweries.map((brewery, index) => {
      return (
        <div key={`${brewery.brewery.name}-${index}`} className='BreweryListContainer'>
            <div className='BreweryInfo'>
              <div className='BreweryName'>{brewery.brewery.name}</div>

              <h5>
                <a href={brewery.brewery.website} className='BreweryWeblink'>
                  {brewery.brewery.website}
                </a>
              </h5>

              <div>
                <a href={brewery.phone}>
                  {brewery.phone}
                </a>
              </div>

              <h5>{brewery.streetAddress}, {brewery.locality}</h5>

              <h5 className='BreweryListDesc'>{brewery.brewery.description}</h5>
              <h5 className='OrganicOption'> Organic beers on tap? {brewery.brewery.isOrganic === 'Y' ? 'Organic' : 'Not Organic'}</h5>
            </div>
        </div>
        )
    })

    return (
      <div>
        {breweryList}
      </div>
    )
  }
}

export default BreweryList
