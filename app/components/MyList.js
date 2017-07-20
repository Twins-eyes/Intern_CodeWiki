import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Row, Col, Tag, Button } from 'antd'
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
                            <Row type='flex' justify="space-around" style={{borderBottom: '1px dashed orange', marginBottom: 10, paddingBottom: 5}}>
                                <Col md={16} xs={24}>
                                    <Link to={`/detail/${topic._id}`} style={{color: 'black', fontSize: 10, fontWeight: 'bold'}}>
                                        {console.log(topic.title.length)}
                                        <h2>{topic.title.length>15?`${topic.title.slice(0, 15)}...`:topic.title}</h2>
                                    </Link>
                                </Col>
                                <Col md={2} xs={24}>
                                    <Link to={{
                                        pathname: '/edit',
                                        state: { topic }
                                    }}>
                                        <Button type={'primary'} icon="edit" shape="circle" />
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