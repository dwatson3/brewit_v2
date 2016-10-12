import React, { Component } from 'react'
import request from 'superagent'

class LocationSearch extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: ''
    }
  }
  handleClick = (e) => {
    const { value } = this.state
    request.get(`/breweries?location=${value}`)
      .end((err, result) => {
        if (err) throw new Error(err)
        this.props.onChange(JSON.parse(result.body.text).data)
      })
  }
  handleClear = () => {
    this.props.onChange([])
  }
  render () {
    return (
      <div className='Location-search-form'>
        <input
          type='text'
          placeholder='Search Beers by a Location Near You'
          onChange={(e) => {
            this.setState({ value: e.currentTarget.value })
          }}
        />
        <button onClick={this.handleClick}>Search</button>
        <button onClick={this.handleClear}>Clear</button>
      </div>
      )
  }
}

export default LocationSearch