import React, { Component } from 'react'

class BeerList extends Component {
  render () {
    const { beers } = this.props

    const beerList = beers.filter((beer) => !!beer.description || !!beer.style).map((beer, index) => {
      // console.log(beer, beer.description, beer.style, "\n")
      // if (!beer.style) debugger
      const description = beer.description || beer.style.description
      return <div key={`${beer.name}-${index}`}><h3>{beer.name} </h3>
        <span>{ description }</span>
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
