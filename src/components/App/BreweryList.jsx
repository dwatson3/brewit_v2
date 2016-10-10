import React, { Component } from 'react'

class BreweryList extends Component {
  render () {
    const { breweries } = this.props
    const breweryList = breweries.map((brewery, index) => {
      return (
        <div key={`${brewery.brewery.name}-${index}`}>
          <h3>{brewery.brewery.name}</h3>
          <h4>{brewery.brewery.isOrganic === 'Y' ? 'Organic' : 'Not Organic'}</h4>
          <h4>{brewery.streetAddress}</h4>
          <h6>{brewery.brewery.website}</h6>
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
