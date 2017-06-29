import React, { Component } from 'react'
import { Row, Col } from 'antd'

class CustomCodeBlock extends Component {
  constructor(props) {
    super(props)
  }

  getDescription = (props) => {
    const { selection, contentState } = this.props.children[0].props.children.props
    const startKey = selection.getStartKey()
    const startOffset = selection.getStartOffset()
    const blockWithDescriptionAtBeginning = contentState.getBlockForKey(startKey)
    const descriptionKey = blockWithDescriptionAtBeginning.getEntityAt(startOffset)
    if(descriptionKey){
        let description = contentState.getEntity(descriptionKey).getData().description
        return description
    }
    return 'sun'
  }

  render() {
    return (
      <div className={'wrap-code-des'}>
        <Row>
            <Col span={12}>{this.props.children}</Col>
            <Col span={12}>{this.getDescription()}</Col>
        </Row>
      </div>
    )
  }
}


export default CustomCodeBlock