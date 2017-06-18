import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
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
        //const { blocks, entityMap } = this.props.editorState 
        //const preEditorState = EditorState.createWithContent((this.props.editorState))
        return (
            <div className={'editor'}>
                <Editor
                    editorState={EditorState.createWithContent(convertFromRaw(this.props.editor.editorState), this.props.editor.decorator)}
                    readOnly
                />
                <div>
                    {this.props.editor.description}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { editor: state.editor }
}

export default connect(mapStateToProps, actions)(BlogPreview)