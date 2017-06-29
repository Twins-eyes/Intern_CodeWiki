import React, { Component } from 'react'
import { Row, Col, Button, Input } from 'antd'

class DescriptionInput extends Component {
    constructor(props) {
        super(props)

        this.focus = () => this.refs.editor.description()
    }
    render() {
        return (
            <div className={'desInputContainer'}>
                <Col span={20}>
                    {this.props.children}
                </Col>
                <Col span={4}>
                    <Button onMouseDown={this.props._confirmDescription}>
                        Confirm
                    </Button>
                </Col>
            </div>
        )
    }
}

export {
    DescriptionInput
}



