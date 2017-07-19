import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Row, Col, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { TagList } from './Tag'

class MyList extends Component {
    render(){
        const { topics } = this.props

        return (
            <div>
                { topics.map((topic, index) => (
                    <div key={index}>
                        <ReactCSSTransitionGroup
                            transitionName='synopsis'
                            transitionAppear={true}
                            transitionAppearTimeout={700}
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                        >
                            <Row type='flex'>
                                <Col md={19} xs={24} style={{borderBottom: '1px dashed orange', marginBottom: 10, paddingBottom: 5}}>
                                    <Link to={`/detail/${topic._id}`} style={{color: 'black', fontSize: 10, fontWeight: 'bold'}}>
                                        <h2>{ topic.title }</h2>
                                    </Link>
                                </Col>
                            </Row>
                        </ReactCSSTransitionGroup>
                    </div>
                )) }
            </div>
        )
    }
}

export default MyList