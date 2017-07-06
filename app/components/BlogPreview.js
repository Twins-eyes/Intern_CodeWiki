import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Row, Col, Button, Input } from 'antd'
import { 
    CompositeDecorator, 
    convertToRaw, 
    Editor, 
    EditorState, 
    RichUtils, 
    ContentState,
    convertFromRaw
} from 'draft-js'
import {stateToHTML} from 'draft-js-export-html'

class  BlogPreview extends Component {
    constructor(props) {
        super(props)        
    }

    render() {
        let editorStateFromRedux = EditorState.createWithContent(convertFromRaw(this.props.editor.editorState), this.props.editor.decorator)
        return (
            <div>
                <Row gutter={8}>
                    <Col span={24}>
                        <div>
                            <Editor
                                editorState={editorStateFromRedux}
                                blockRenderMap={this.props.editor.blockRender}
                                readOnly
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { editor: state.editor }
}

export default connect(mapStateToProps, actions)(BlogPreview)