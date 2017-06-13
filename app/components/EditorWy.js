import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createUndoPlugin from 'draft-js-undo-plugin'
import editorStyles from '../assets/editor.css'

const undoPlugin = createUndoPlugin()
const { UndoButton, RedoButton } = undoPlugin
const plugins = [undoPlugin]

export default class SimpleUndoEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

  onChange(editorState) {
    this.setState({
      editorState,
    })
  }

//   focus() {
//     this.editor.focus();
//   }

  render() {
    return (
      <div>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange.bind(this)}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
        </div>
        <div className={editorStyles.options}>
          <UndoButton />
          <RedoButton />
        </div>
      </div>
    )
  }
}