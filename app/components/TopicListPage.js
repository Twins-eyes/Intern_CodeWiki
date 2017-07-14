import React, { Component } from 'react'
import { Row, Col } from 'antd'
import NavBar from '../components/NavBar'
import List from '../components/List'
import { MdKeyboardArrowDown } from 'react-icons/lib/md'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { getAllEditorData } from '../actions'
import { connect } from 'react-redux' 

class TopicList extends Component {

    componentWillMount = () => {
        this.props.getAllEditorData()
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
                            placeholder='search'
                            autoFocus
                            onChange={this.topicsFilter}
                        />
                    </Col>
                </Row>
                <div style={{marginTop:'20px', opacity:'0.98'}}>
                    { this.props.topics.map((topic, index) => (
                        <List
                            key={index}
                            topicName={topic.title}
                            tags={topic.tags}
                            author={topic.ownerId}
                            date={topic.createdAt}
                            topicId={topic._id}
                        />
                    )) }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { topics: state.editor.get('allTopic')}
}

export default connect(mapStateToProps, {getAllEditorData})(TopicList)