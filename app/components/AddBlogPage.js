import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Col, Row, Button, Radio } from 'antd'
import BlockEditor from './BlockEditor'
import '../assets/editor.css'

class AddBlogPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pageDisplay: page.write
        }

        this.pageDisplay = this.pageDisplay.bind(this)
    }

    pageDisplay() {
        if(this.state.pageDisplay === page.write){
            return (
                <BlockEditor />
            )
        }else{
            return (
                <div>
                    Preview Page
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="page"
                    transitionAppear={true}
                    transitionAppearTimeout={400}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Row  style={{paddingLeft: 10, paddingTop: 10}}>
                        <Col>
                            <Radio.Group defaultValue={page.write} style={{marginRight: 10}}>
                                <Radio.Button value={page.write} onClick={() => this.setState({pageDisplay: page.write})}>
                                    Write
                                </Radio.Button>
                                <Radio.Button value={page.preview} onClick={() => this.setState({pageDisplay: page.preview})}>
                                    Preview
                                </Radio.Button>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <Row style={{paddingLeft: 10}}>
                        <Col style={{backgroundColor: '#eee'}} span={24}>
                            <ReactCSSTransitionGroup
                                transitionName="editorPreview"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={300}>
                                {this.pageDisplay()}
                            </ReactCSSTransitionGroup>
                        </Col>
                    </Row>

                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

const page = {
    write: 'write',
    preview: 'preview'
}

export default AddBlogPage