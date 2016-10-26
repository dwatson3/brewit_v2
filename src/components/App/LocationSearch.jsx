import React, { Component } from 'react'
import request from 'superagent'

class LocationSearch extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: '',
      incorrect: false
    }
  }
  handleClick = (e) => {
    const { value } = this.state
    if (value.match(/^\d{5}$/)) {
      request.get(`/breweries?location=${value}`)
        .end((err, result) => {
          if (err) throw new Error(err)
          this.props.onChange(JSON.parse(result.body.text).data)
          this.setState({incorrect: false})
        })
    } else {
    this.setState({incorrect: true})
    }
  }
  handleClear = () => {
    this.props.onChange([])
    this.setState({value : '', incorrect: false})
  }
  render () {
    const { value } = this.state
    let incorrectBox = null;
    if (this.state.incorrect) {
      incorrectBox = <div> Please Enter a 5-digit Zipcode</div>
    }
    return (
      <div className='Location-search-form'>
        <input
          type='text'
          id='location-search'
          placeholder='Search For Craft Breweries by Zipcode'
          value={value}
          onChange={(e) => {
            this.setState({ value: e.currentTarget.value })
          }}
        />
        <button onClick={this.handleClick} className='location-search'>Search</button>
        <button onClick={this.handleClear} className='location-search-clear'>Clear</button>
        {incorrectBox}
      </div>
      )
  }
}

export default LocationSearch