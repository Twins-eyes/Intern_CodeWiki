import React, { Component } from 'react'
import { Row, Col, Tag, Spin } from 'antd'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import BlogPreview from '../components/BlogPreview'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { EditorState, convertToRaw } from 'draft-js'
import { connect } from 'react-redux'
import { getEditorById } from '../actions'
import { TagList } from './Tag'
import '../assets/editor.scss'

class ReadingPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentWillMount() {
        this.props.getEditorById(this.props.match.params).then(() => {
            this.setState({ isLoading: false })
        })
    }

    render(){
        const { title, editorRaw, createdAt, ownerId, tags, _id } = this.props.editorData

        return(
            <div style={{backgroundColor: '#f9f9f9', height: '100%'}}>
                <NavBar location={this.props.location} />
                { this.state.isLoading? <div className="spinLoader"><Spin /></div> :
                    <div className={'detail'}>
                        <Row>
                            <Col md={24}>
                                <h1 style={{fontSize: '28px'}}>{ title }</h1>
                            </Col>
                            <Col md={12}>
                                { tags.map((tag, index) => <TagList tag={tag} key={index} />) }
                            </Col>
                            <Col md={12}>
                                <span className={'author'}>{ ownerId }</span>
                                <span className={'author'}>
                                    {new Date(createdAt).toDateString()}
                                </span>
                            </Col>
                        </Row>
                        <br/><hr/>
                        <ReactCSSTransitionGroup
                            transitionName="editorPreview"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                            <BlogPreview editorRaw={JSON.parse(editorRaw)}/>
                        </ReactCSSTransitionGroup>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { editorData: state.editor.get('detailDisplay') }
}

export default connect(mapStateToProps, {getEditorById})(ReadingPage)