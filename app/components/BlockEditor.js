import React, { Component } from 'react'
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js'
import {stateToHTML} from 'draft-js-export-html'
import { Grid } from 'semantic-ui-react'
import '../assets/editor.css'
//import 'semantic-ui-css/semantic.min.css'

class BlockEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
            displayEditorState: '',
            htmlFromEditor: ''
        }
        
        this.onChange = this.onChange.bind(this)
    }

    onChange(editorState) {
        this.setState({
            editorState,
            htmlFromEditor: stateToHTML(editorState.getCurrentContent()),
            //displayEditorState: convertToRaw(editorState.getCurrentContent())
        })
        var selectionState = this.state.editorState.getSelection()
        var anchorKey = selectionState.getAnchorKey()
        var currentContent = this.state.editorState.getCurrentContent()
        var currentContentBlock = currentContent.getBlockForKey(anchorKey)
        var start = selectionState.getStartOffset()
        var end = selectionState.getEndOffset()
        let selectedText = currentContentBlock.getText().slice(start, end)
        
        if(selectionState.getStartKey() == selectionState.getEndKey()){
            console.log(selectedText)
        }else{
            const rawData = convertToRaw(currentContent).blocks
            let indexStart = rawData.findIndex(inData => inData.key == selectionState.getStartKey())
            let indexEnd = rawData.findIndex(inData => inData.key == selectionState.getEndKey())

            let selectionArray = rawData.filter(data => {
                let lineOfObject = rawData.findIndex(inData => inData.key == data.key)
                if(lineOfObject === indexStart)
                    console.log(data.text.slice(start))
                else if(lineOfObject > indexStart & lineOfObject < indexEnd)
                    console.log(data.text)
                else if(lineOfObject === indexEnd)
                    console.log(data.text.slice(0, end))
                else
                    console.log('---------------')
            })
        }
    }

    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState,
            'BOLD'
        ))
    }

    _onItalicClick() {
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState,
            'ITALIC'
        ))
    }

    _onUnderlineClick() {
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState,
            'UNDERLINE'
        ))
    }

    _onCodeClick() {
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState,
            'CODE'
        ))
    }

    _onSelectionDescription() {
        RichUtils.toggleInlineStyle(this.state.editorState, 'HIGHLIGHT')
        this.setState({editorState: this.state.editorState})
    }

    render() {
        return (
            <div>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <div className={'editor'}>
                                <Editor 
                                    editorState={this.state.editorState} 
                                    onChange={this.onChange}
                                    placeholder={'Tell us something...'}
                                />
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div>
                                {this.state.htmlFromEditor}
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <div>
                    {/*<div className={'bottonEditor'}>
                        lkmckm
                    </div>*/}
                    <button onClick={this._onBoldClick.bind(this)}>BOLD</button>
                    <button onClick={this._onItalicClick.bind(this)}>ITALIC</button>
                    <button onClick={this._onUnderlineClick.bind(this)}>UNDERLINE</button>
                    <button onClick={this._onCodeClick.bind(this)}>CODE</button>
                    <button onClick={this._onSelectionDescription.bind(this)}>SELECT FOR DESCRIPTION</button>
                </div>
            </div>
        )
    }

}

export default BlockEditor