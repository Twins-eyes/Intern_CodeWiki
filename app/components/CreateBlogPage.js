import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Col, Row, Button, Radio, Tabs, Icon } from 'antd'
import BlogEditor from './BlogEditor'
import BlogPreview from './BlogPreview'
import '../assets/editor.css'

class CreateBlogPage extends Component {
    constructor(props) {
        super(props)
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
                    <Row style={{padding: 20}}>
                        <Col span={24}>
                            <ReactCSSTransitionGroup
                                transitionName="editorPreview"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={300}>
                                <Tabs size={'small'}>
                                    <Tabs.TabPane key={1} tab={<span><Icon type="edit" />Write</span>}>
                                        <BlogEditor />
                                    </Tabs.TabPane>
                                    <Tabs.TabPane className={'editor'} key={2} tab={<span><Icon type="desktop" />Preview</span>}>
                                        <BlogPreview />
                                    </Tabs.TabPane>
                                </Tabs>
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