import React, { Component } from 'react'
import { Row, Col, Input, Card } from 'antd'
import NavBar from '../components/NavBar'
import List from '../components/List'
import MyList from '../components/MyList'
import { MdKeyboardArrowDown } from 'react-icons/lib/md'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { getAllEditorData, searchMyTopic } from '../actions'
import { connect } from 'react-redux' 

class TopicList extends Component {

    componentWillMount = () => {
        this.loadResource(this.props.getAllEditorData)
        this.loadResource(this.props.searchMyTopic, this.props.user._id)
    }

    componentWillReceiveProps = nextProps => {
        if(this.props.user._id !== nextProps.user._id)
            this.loadResource(this.props.searchMyTopic, nextProps.user._id)
    }

    loadResource = (loadPage, id) => {
        loadPage(id)
    }

    render(){
        const { isLoggedIn } = this.props

        return(
            <div>
                <NavBar location={this.props.location} />
                <Row gutter={4} type="flex" justify="space-around">
                    {isLoggedIn?<Col md={5} xs={22}>
                        <div style={{marginTop:'20px', opacity:'0.98'}}>
                            <Card title={'My Topics'}>
                                <MyList
                                    topics={this.props.myTopics}
                                />
                            </Card>
                        </div>
                    </Col>:''}
                    <Col md={isLoggedIn?17:23} xs={22}>
                        <div style={{marginTop:'20px', opacity:'0.98'}}>
                            <Card title={'All Topics'}>
                                <List
                                    topics={this.props.topics}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        user: state.auth.get('user'),
        topics: state.editor.get('allTopic'),
        myTopics: state.editor.get('myTopics'),
        isLoggedIn: state.auth.get('isLoggedIn')
    }
}

export default connect(mapStateToProps, {getAllEditorData, searchMyTopic})(TopicList)