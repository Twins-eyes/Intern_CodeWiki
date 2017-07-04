import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Col, Row, Button, Radio } from 'antd'
import BlogEditor from './BlogEditor'
import BlogPreview from './BlogPreview'
import '../assets/editor.css'

class CreateBlogPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pageDisplay: page.write
        }

    }

    _pageDisplay = () => {
        switch (this.state.pageDisplay) {
            case page.write: return <BlogEditor />
            case page.preview: return <BlogPreview />
            default: <BlogEditor />
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
                    <Row style={{paddingLeft: 10, paddingRight: 10}}>
                        <Col span={24}>
                            <ReactCSSTransitionGroup
                                transitionName="editorPreview"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={300}>
                                {this._pageDisplay()}
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

export default CreateBlogPage