import React, { Component } from 'react'
import request from 'superagent'
import { Label, DropdownButton, MenuItem, Form, Button, ButtonToolbar } from 'react-bootstrap' 

class BeerSearch extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: ''
    }
  }
  handleClick = (e) => {
    const { value } = this.state
    request.get(`/beers?name=${value}`)
      .end((err, result) => {
        if (err) throw new Error(err)
        this.props.onChange(JSON.parse(result.body.text).data)
      })
  }
  handleClear = () => {
    this.props.onChange([])
  }
  render () {
    const { onChange } = this.props
    const { value } = this.state
    return (
      <div className='Beer-search-form'>
        <input
          type='text'
          value={value}
          placeholder='Search for Craft Beers Here'
          onChange={(e) => {
            this.setState({ value: e.currentTarget.value })
          }}
        />
        <button onClick={this.handleClick}>Search</button>
        <button onClick={this.handleClear}>Clear</button>
        <ButtonToolbar>
        <Button bsStyle="success" bsSize="large">Success</Button>  
        </ButtonToolbar>
      </div>
    )
  }
}

export default BeerSearch
