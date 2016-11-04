import React, { Component } from 'react'
import './css/styles.scss'

class BreweryList extends Component {
  render () {
    const { breweries } = this.props
    const breweryList = breweries.map((brewery, index) => {
      return (
        <div key={`${brewery.brewery.name}-${index}`} className='BreweryListContainer'>
            <div className='BreweryInfo'>
              <h3>{brewery.brewery.name}</h3>
              <h5>{brewery.brewery.description}</h5>
              <h5>{brewery.brewery.isOrganic === 'Y' ? 'Organic' : 'Not Organic'}</h5>
              <h5>{brewery.streetAddress}</h5>
              <div>{brewery.phone}</div>
              <div>{brewery.locationType}</div>
              <div>{brewery.locality}</div>
              <div>{brewery.name}</div>
              <h5><a href={brewery.brewery.website}>{brewery.brewery.website}</a></h5>
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
