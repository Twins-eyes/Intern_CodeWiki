import React, { Component } from 'react'
import { Row, Col } from 'antd'
import NavBar from '../components/NavBar'
import List from '../components/List'
import { MdKeyboardArrowDown } from 'react-icons/lib/md'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { getAllEditorData } from '../actions'
import { connect } from 'react-redux' 

class TopicList extends Component {
    constructor(props){
        super(props)
        this.state = {
            topics: [
                {
                    topicName:'This is the topic name for testing codewiki',
                    tags:['abc','cba','java','javascript','hello','world'],
                    author:'authorizeby',
                    date: '16/8/2016'
                },
                {
                    topicName:'2',
                    tags:['sci','int'],
                    author:'sun',
                    date: '16/8/2016' 
                }
            ],
            value:'all'
        }

        this.props.getAllEditorData()
    }

    topicsList = topics => {
       return topics.map((topic, index) => (
            <List
                key={index}
                topicName={topic.title}
                tags={topic.tags}
                author={topic.ownerId}
                date={topic.createdAt}
            />
        ))
    }

    render(){
        return(
            <div>
                <NavBar location={this.props.location} />
                <Row>
                    <Col xs={{span:20, offset:4}} md={{span:21, offset:2}}> 
                        <input 
                            type='text'
                            className={'search'}
                            value={this.props.value}
                            placeholder='search'
                            autoFocus
                            onChange={this.topicsFilter}
                        />
                    </Col>
                </Row>
                <div style={{marginTop:'20px', opacity:'0.98'}}>
                    { this.topicsList(this.props.topics) }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { topics: state.editor.get('allTopic')}
}

export default connect(mapStateToProps, {getAllEditorData})(TopicList)