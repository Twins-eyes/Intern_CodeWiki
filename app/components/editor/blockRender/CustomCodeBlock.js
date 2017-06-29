import React, { Component } from 'react'
import { Row, Col } from 'antd'

class CustomCodeBlock extends Component {

  render() {
    const { selection, contentState } = this.props.children[0].props.children.props
    const startKey = this.props.children[0].key
    const startOffset = selection.getStartOffset()
    const blockWithDescriptionAtBeginning = contentState.getBlockForKey(startKey)
    const descriptionKey = blockWithDescriptionAtBeginning.getEntityAt(startOffset)
    let description = ''
    if(descriptionKey){
        description = contentState.getEntity(descriptionKey).getData().description
    }

    return (
      <div className={'wrap-code-des'}>
        <Row>
            <Col span={description?12:24} style={styles.code}>{this.props.children}</Col>
            <Col span={description?12:0}>{description}</Col>
        </Row>
      </div>
    )
  }
}

const styles = {
    code: {
        backgroundColor: '#f2f2f2', 
        paddingLeft: 16,
        paddingTop: 5,
        paddingBottom: 5,
        borderLeftStyle: 'solid',
        borderLeftWidth: 'thick',
        borderLeftColor: '#f5d773'
    }
}

export default CustomCodeBlock