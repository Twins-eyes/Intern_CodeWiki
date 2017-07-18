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
                <ReactCSSTransitionGroup
                        transitionName="page"
                        transitionAppear={true}
                        transitionAppearTimeout={400}
                        transitionEnter={false}
                        transitionLeave={false}
                >
                    <NavBar location={this.props.location} />
                    <Row>
                        <Col xs={{span:20, offset:4}} md={{span:21, offset:2}}> 
                            <Input 
                                type='text'
                                className={'search'}
                                placeholder='search'
                                style={{width: 250, height: 34}}
                                autoFocus
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
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { topics: state.editor.get('allTopic')}
}

export default connect(mapStateToProps, {getAllEditorData})(TopicList)