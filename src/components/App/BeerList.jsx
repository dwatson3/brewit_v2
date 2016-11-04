import React, { Component } from 'react'
// import LocationSearch from './LocationSearch'
// import BeerSearch from './BeerSearch'
// import Images from './Images'
import './css/styles.scss'

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
      const beerLogo = beer.icon || (beer.labels && beer.labels.large) || '/Images/brewit_stein-03.png'
      // const beerLogo = {beerLogoImg} || (beer.labels && beer.labels.large)
      const abv = !!abvMinDetails ? <div className='ABVinfo'> ABV range: {abvMinDetails} - {abvMaxDetails} </div> : ''
      const ibu = !!ibuMinDetails ? <div className='IBVinfo'> IBV range: {ibuMinDetails} - {ibuMaxDetails} </div> : ''
      const brewerystuffs = beer.breweries[0].name
      // if (!beer.breweries[0].name) debugger
      // console.log(beer.breweries[0].name)

      return (
        <div key={`${beer.name}-${index}`}>
          <div>
            <div id='#top' />
            <div className='BeerSearchResults'>

              <div className='FirstColumn'>
                <img src={beerLogo} className='LogoStyle' />
              </div>

              <div className='SecondColumn'>
                <h3 className='BeerName'>{beer.name}</h3>  
                <div className='Available'>Available at: {brewerystuffs}</div>
                {ibu}
                {abv}

                <div className='Subdescription'>
                  <div className='OrganicOption'> Organic beer?
                    <span className='Option'>{beer.isOrganic === 'Y' ? 'Organic' : 'Not Organic'}</span>
                  </div>
                </div>

                <div className='BeerSearchDesc'> { description } </div>

                <div> {beer.category} </div>
              </div>

            </div>
          </div>
        </div>
      )
    })

    let topofPageLink = (beerList.length > 0 ? <a href={'#top'}>Return to Top</a> : <div />)

    return (
      <div>
        <div>
        {beerList}
        </div>
        {topofPageLink}
      </div>
    )
  }
}

export default BeerList
