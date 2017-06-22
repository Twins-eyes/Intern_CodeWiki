import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Row, Col, Select, Tag } from 'antd'

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
        const { topicName, language, tags, author, date} = this.props
        return(
            <div className={'tpList'}>
                <ReactCSSTransitionGroup
                    transitionName='synopsis'
                    transitionAppear={true}
                    transitionAppearTimeout={700}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <h2>{topicName}</h2>
                    <span>{language}</span>
                    {this.tagsList(tags)}
                    <p className={'author'}>{date}</p>
                    <p className={'author'}>{author}</p>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default List