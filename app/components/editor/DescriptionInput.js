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
                <Row>
                    <Col span={20}>
                        {this.props.children}
                    </Col>
                </Row>
                <Row style={{paddingTop: 10}}>
                    <Col span={this.props.subDesButton?8:12}>
                        <Button onMouseDown={(e) => this.props._confirmDescription(e, 'DESCRIPTION', 'description', true)}>
                            Confirm
                        </Button>
                    </Col>
                    <Col span={this.props.subDesButton?8:0}>
                        <Button onMouseDown={(e) => this.props._confirmDescription(e, 'SUB_DESCRIPTION', 'subDescription', false)}>
                            Sub Des
                        </Button>
                    </Col>
                    <Col span={this.props.subDesButton?8:12}>
                        <Button onMouseDown={() => this.props.showInput()}>
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export {
    DescriptionInput
}



