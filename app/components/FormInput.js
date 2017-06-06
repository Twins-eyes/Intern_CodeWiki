import React, { Component } from 'react'

class FormInput extends Component{
  constructor(props){
    super(props)
    this.state = {
      label: this.props.label,
      type: this.props.type,
      autoFocus: this.props.autoFocus
    }
  }

  render(){
    return(
      <form className={'form'}>
        <p>{this.props.label}</p>   
        <input type={this.props.type}
          className={'formInput'}
          name={this.props.label} 
          value={this.props.value}
          autoFocus={this.props.autoFocus}
        />
      </form>
    )
  }
}

export default FormInput 