import React, { Component } from 'react'
import { Row, Col, Select, Tag } from 'antd'

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            topic: {
                topicName: '',
                language: '',
                tags:[],
                author: ''
            }
        }
    }

    tagsList(tags){
        const tagList = this.state.topic.tags.map((tag,index) => 
            <Tag color='cyan' style={{marginButtom:20}}>
                #{tag}
            </Tag>
        )
        return(
            tagList
        )
    }
    
    render(){
        return(
            <div className={'tpList'}>
                <h2>{this.state.topic.topicName}</h2>
                <span>{this.state.topic.language}</span>
                {this.tagsList(this.state.topic.tags)}
                <span>{this.state.topic.author}</span>
            </div>
        )
    }
}

export default List