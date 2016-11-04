import React, { Component } from 'react'
import request from 'superagent'
import { Label, DropdownButton, MenuItem, Form, Button, ButtonToolbar } from 'react-bootstrap' 

class BeerSearch extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: '',
      incorrect: false
    }
  }
  handleClick = (e) => {
    const { value } = this.state
    if (value.match(/^[a-zA-Z0-9\s]+$/)) {
      request.get(`/beers?name=${value}&withBreweries=Y`)
        .end((err, result) => {
          if (err) throw new Error(err)
          this.props.onChange(JSON.parse(result.body.text).data)
          // console.log(result)
          console.log(JSON.parse(result.body.text))
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
    const { onChange } = this.props
    const { value } = this.state
    // const incorrectBox = this.state.incorrect ? {display: 'none'} : {}
    let incorrectBox = null;
    if (this.state.incorrect ) {
      incorrectBox = <div>Please Enter a Beer Name</div>
    }
    return (
      <div className='Beer-search-form'>
        <div className='Placeholder'>Craft Beers By Name</div>
        <input
          type='text'
          id='beer-search'
          value={value}
          placeholder=''
          onChange={(e) => {
            this.setState({ value: e.currentTarget.value })
          }}
        />
        <button onClick={this.handleClick} className='beer-search'> 
          Search</button>
        <button onClick={this.handleClear} className='beer-search-clear'>Clear</button>
          {incorrectBox}
      </div>
    )
  }
}

export default BeerSearch

        // <ButtonToolbar>
        // <Button bsStyle="success" bsSize="large">Success</Button>  
        // </ButtonToolbar>
