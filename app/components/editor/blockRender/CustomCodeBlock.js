import React, { Component } from 'react'

class CustomCodeBlock extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={'wrap-code-des'}>
        {this.props.children}
      </div>
    )
  }
}


export default CustomCodeBlock