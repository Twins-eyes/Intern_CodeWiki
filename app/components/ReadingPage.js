import React, { Component } from 'react'
import { Row, Col, Tag } from 'antd'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

class ReadingPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            topicId: 1234,
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
                <Tag key={index} color='#FBBB69' style={{marginBottom:'5px'}}>
                    #{tag}
                </Tag>
            </Link>
        )
        return tagList
    }

    render(){

        return(
            <div>
                <NavBar location={this.props.location} />
                <div className={'detail'}>
                    <Row>
                        <Col>
                            <h1>{ this.state.topicName }</h1>
                        </Col>
                        <Col>
                            { this.tagsList(this.state.tags) }
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default ReadingPage