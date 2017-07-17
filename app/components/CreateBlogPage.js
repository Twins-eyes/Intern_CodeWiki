import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Col, Row, Button, Radio, Tabs, Icon, Tag, Input, Tooltip } from 'antd'
import BlogEditor from './BlogEditor'
import BlogPreview from './BlogPreview'
import NavBar from './NavBar'

class CreateBlogPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            tags: ['sample tag'],
            inputValue: '',
            inputVisible: false
        }
    }

    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag)
        console.log(tags);
        this.setState({ tags })
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus())
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
        tags,
        inputVisible: false,
        inputValue: '',
        })
    }

    saveInputRef = input => this.input = input

    render() {
        const { tags, inputValue, inputVisible } = this.state 
        return (
            <div>
                <NavBar location={this.props.location} />
                <div className={'editorBlock'} style={{background: '#f9f9f9'}}>
                    <ReactCSSTransitionGroup
                        transitionName="page"
                        transitionAppear={true}
                        transitionAppearTimeout={400}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <Row style={{padding: 20, marginTop:0}}>
                            <Col span={22} offset={1}>
                                <ReactCSSTransitionGroup
                                    transitionName="editorPreview"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={300}>
                                    <Row style={{ background: '#f9f9f9', marginBottom:0}}>
                                        <Col md={{span:11, offset:1}}>
                                            <Input placeholder={'Enter Blog title...'} 
                                                style={{ width: 400, height: 34, marginLeft: 0 }}
                                                className={'editor'}
                                                value={this.state.title}
                                            />
                                        </Col>
                                        <Col md={{span:11, offset:1}}>
                                            { tags.map((tag, index) => {
                                                const isLongTag = tag.length > 20;
                                                const tagElem = (
                                                    <Tag key={index} 
                                                        color={index != 0 ? '#ffd83f' : '#FBBB69' }
                                                        style={{marginRight:'10px', marginTop: 'l'}}
                                                        closable={index !== 0} 
                                                        afterClose={() => this.handleClose(tag)}>
                                                        #{ isLongTag ? `${tag.slice(0, 20)}...` : tag }
                                                    </Tag>
                                                )
                                                return isLongTag ? <Tooltip key={index} title={ tag }>{tagElem}</Tooltip> : tagElem
                                                })
                                            }
                                            { inputVisible && (
                                                <Input
                                                    ref={this.saveInputRef}
                                                    type="text"
                                                    size="small"
                                                    style={inputStyle}
                                                    value={inputValue}
                                                    onChange={this.handleInputChange}
                                                    onBlur={this.handleInputConfirm}
                                                    onPressEnter={this.handleInputConfirm}
                                                />
                                            )}
                                            { !inputVisible && 
                                                <Input 
                                                    onFocus={this.showInput} 
                                                    placeholder={'+ New Tag'}
                                                    style={inputStyle}
                                                /> 
                                            }
                                        </Col>
                                    </Row>
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
            </div>
        )
    }
}

const inputStyle = {
    width: 100, 
    height: 28, 
    marginTop: 5,
    marginBottom: 10,
    border: '1px solid #ddd',
    marginBottom: '2em',
    boxShadow:  '0px 1px 8px -3px #ABABAB'
}

const page = {
    write: 'write',
    preview: 'preview'
}

export default CreateBlogPage