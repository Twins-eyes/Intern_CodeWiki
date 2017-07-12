import React, { Component } from 'react'
import { Row, Col, Tag } from 'antd'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import BlogPreview from '../components/BlogPreview'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class ReadingPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            topicName:'This is the topic name for testing codewiki',
            language:'javascript',
            tags:['abc','cba','java','javascript','hello','world'],
            author:'authorizeby',
            date: '16/8/2016'
        }
    }

    tagsList(tags){
        const tagList = tags.map((tag, index) => 
            <Link to={'/tag'} key={index}>
                <Tag key={index} color='#FBBB69' style={{margin:'10px 5px'}}>
                    #{tag}
                </Tag>
            </Link>
        )
        return tagList
    }

    render(){
        const { topicName, author, date, tags } = this.state
        return(
            <div style={{backgroundColor: '#f9f9f9', height: '100%'}}>
                <NavBar location={this.props.location} />
                <div className={'detail'}>
                    <Row>
                        <Col md={24}>
                            <h1 style={{fontSize: '28px'}}>{ topicName }</h1>
                        </Col>
                        <Col md={12}>
                            { this.tagsList(tags) }
                        </Col>
                        <Col md={12}>
                            <span className={'author'}>{ author }</span>
                            <span className={'author'}>{ date }</span>
                        </Col>
                    </Row>
                    <br/><hr/>
                    <ReactCSSTransitionGroup
                        transitionName="editorPreview"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        <BlogPreview/>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default ReadingPage