import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Row, Col, Tag } from 'antd'

class List extends Component {
    tagsList(tags){
        const tagList = tags.map((tag, index) => 
            <Tag key={index} color='cyan' style={{marginButtom:20}}>
                #{tag}
            </Tag>
        )
        return tagList
    }
    
    render(){
        const { topicName, language, tags, author, date } = this.props
        return(
            <div className={'tpList'}>
                <ReactCSSTransitionGroup
                    transitionName='synopsis'
                    transitionAppear={true}
                    transitionAppearTimeout={700}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    <Row type='flex'>
                        <Col md={16}>
                            <h2>{ topicName }</h2>
                        </Col>
                        <Col md={{span:4, push:4}}>
                            <span className={'author'}>{ date }</span>
                            <span className={'author'}>{ author }</span>
                        </Col>
                    </Row>
                    <Row type='flex'>
                        <Col md={2}>
                            <span>{ language }</span>
                        </Col>
                        <Col md={22}>
                            {this.tagsList(tags)}
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default List