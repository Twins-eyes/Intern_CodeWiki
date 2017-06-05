import React, { Component } from 'react'
import {Editor, EditorState} from 'draft-js'
import '../assets/editor.css'

class BlockEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {editorState: EditorState.createEmpty()}
        this.onChange = (editorState) => {
            this.setState({editorState})
            var selectionState = this.state.editorState.getSelection()
            var anchorKey = selectionState.getAnchorKey()
            var currentContent = this.state.editorState.getCurrentContent()
            var currentContentBlock = currentContent.getBlockForKey(anchorKey)
            var start = selectionState.getStartOffset()
            var end = selectionState.getEndOffset()
            var selectedText = currentContentBlock.getText().slice(start, end)
            console.log(selectedText)
        }
    }

    render() {
        return (
            <div>
                <div className={'editor'}>
                    <Editor editorState={this.state.editorState} onChange={this.onChange} />
                </div>
                <div>
                    <button>BOLD</button>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }

}

export default BlockEditor