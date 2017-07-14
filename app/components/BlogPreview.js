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
        let editorStateFromRedux = EditorState.createWithContent(convertFromRaw(this.props.editorState), this.props.decorator)
        return (
            <div>
                <Row gutter={8}>
                    <Col span={24}>
                        <div>
                            <Editor
                                editorState={editorStateFromRedux}
                                blockRenderMap={this.props.blockRender}
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
    return {
        decorator: state.editor.get('decorator'),
        blockRender: state.editor.get('blockRender'),
        editorState: state.editor.get('editorState')
    }
}

export default connect(mapStateToProps, actions)(BlogPreview)