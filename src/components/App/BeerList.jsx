import React, { Component } from 'react'

class BeerList extends Component {
  render () {
    const { beers } = this.props

    const beerList = beers.filter((beer) => !!beer.description || !!beer.style).map((beer, index) => {
      // console.log(beer, beer.description, beer.style, "\n")
      // if (!beer.style) debugger
      const description = beer.description || beer.style.description   
      const ibuMinDetails = beer.ibuMin || (beer.style && beer.style.ibuMin)
      const ibuMaxDetails = beer.ibuMax || (beer.style && beer.style.ibuMax)
      const abvMinDetails = beer.abvMin || (beer.style && beer.style.abvMin)
      const abvMaxDetails = beer.abvMax || (beer.style && beer.style.abvMax)
      const beerLogo = beer.icon || (beer.labels && beer.labels.large)

      let logoStyle = {
        height: 250,
        width: 250
      }

      return <div key={`${beer.name}-${index}`}><h3>{beer.name} </h3>
        <span> <img src={beerLogo} style={logoStyle} /> </span>
        <span> { description } </span> <br />
        <span>{beer.isOrganic === 'Y' ? 'Organic' : 'Not Organic'}</span> <br />
        <span> {ibuMinDetails}, {ibuMaxDetails} </span> <br />
        <span> {abvMinDetails}, {abvMaxDetails} </span>
      </div>
    })

    return (
      <div>
        {beerList}
      </div>
    )
  }
}

export default BeerList
