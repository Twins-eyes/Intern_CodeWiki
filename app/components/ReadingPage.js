import React, { Component } from 'react'
import { Row, Col, Tag } from 'antd'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

class ReadingPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            topicName:'This is the topic name for testing codewiki',
            language:'javascript',
            tags:['abc','cba','java','javascript','hello','world'],
            author:'authorizeby',
            date: '16/8/2016',
            description: 'Parallax Engine that reacts to the orientation of a smart device'
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

        return(
            <div style={{backgroundColor: '#f9f9f9'}}>
                <NavBar location={this.props.location} />
                <div className={'detail'}>
                    <Row>
                        <Col md={24}>
                            <h1>{ this.state.topicName }</h1>
                        </Col>
                        <Col md={12}>
                            { this.tagsList(this.state.tags) }
                        </Col>
                        <Col md={12}>
                            <span className={'author'}>{ this.state.author }</span>
                            <span className={'author'}>{ this.state.date }</span>
                        </Col>
                    </Row>
                    <br/><hr/>
                </div>
                <div className={'description'}>
                </div>
            </div>
        )
    }
}

export default ReadingPage