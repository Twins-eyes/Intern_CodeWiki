import React, { Component } from 'react'

class FormInput extends Component{
  constructor(props){
    super(props)
    this.state = {
      label: this.props.label
    }
  }

  render(){
    return(
      <form>
        <p>{this.props.label}</p>   
        <input type='text'
          className={'formInput'}
          name={this.props.label} 
          value={this.props.value}
        />
      </form>
    )
  }
}

export default FormInput 