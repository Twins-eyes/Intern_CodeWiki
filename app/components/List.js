import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Row, Col, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { TagList } from './Tag'

class List extends Component {
    render(){
        const { topicName, language, tags, author, date, topicId } = this.props

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
                        <Col md={19} xs={24}>
                            <Link to={`/detail/${topicId}`} className={'topicDetail'}>
                                <h2>{ topicName }</h2>
                            </Link>
                        </Col>
                        <Col md={2} xs={12}>
                            <span style={{color: '#8F8E7C'}}>{ new Date(date).toDateString() } </span>
                        </Col>
                        <Col md={2} xs={12}>
                            <span style={{color: '#8F8E7C', float: 'right'}}>{ author }</span>
                        </Col>
                    </Row>
                    <Row type='flex'>
                        <Col md={{span:24}}>
                            { tags.map((tag, index) => <TagList tag={tag} key={index} />) }
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default List