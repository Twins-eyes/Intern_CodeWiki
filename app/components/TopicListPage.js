import React, { Component } from 'react'
import { Row, Col, Input } from 'antd'
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
                <Row style={{marginTop: 40}}>
                    <Col xs={{span:20, offset:4}} md={{span:21, offset:2}}> 
                        <span>Topic</span>
                    </Col>
                </Row>
                <div style={{marginTop:'20px', opacity:'0.98'}}>
                    <Col style={{borderBottom: '1px solid #F18F01', marginLeft: '5%', width: '90%'}}></Col>
                    { this.props.topics.map((topic, index) => (
                        <List
                            key={index}
                            topicName={topic.title}
                            tags={topic.tags}
                            author={topic.owner.ownerName}
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