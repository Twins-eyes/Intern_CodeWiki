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
            htmlFromEditor: '',
            content: {},
            hoverSelection: false
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
            let selectionObj = {}
            let changedSelectedArray = []
            let selectionArray = rawData.filter(data => {
                let lineOfObject = rawData.findIndex(inData => inData.key == data.key)
                let dataChange = Object.assign({}, data)
                if(lineOfObject === indexStart){
                    dataChange.text = dataChange.text.slice(start)
                    changedSelectedArray = [...changedSelectedArray, dataChange]
                }else if(lineOfObject > indexStart & lineOfObject < indexEnd){
                    changedSelectedArray = [...changedSelectedArray, dataChange]
                }else if(lineOfObject === indexEnd){
                    dataChange.text = dataChange.text.slice(0, end)
                    changedSelectedArray = [...changedSelectedArray, dataChange]
                }
            })
            console.log(changedSelectedArray)
            selectionObj = Object.assign(selectionObj, { key: '123' }, { massage: changedSelectedArray }, { description: '' } )
            console.log(selectionObj)
            this.setState({ content: selectionObj})
            console.log(this.state.content)
        }
    }

<<<<<<< HEAD
    render() {
        return (
            <div>
                <div className={'editor'}>
                    <Editor editorState={this.state.editorState} onChange={this.onChange} />
=======
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

    descriptionTextArea() {
        if(this.state.hoverSelection){
            return (
                <div>
                    <textarea></textarea>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <div className={'editor'} onMouseDown={data => console.log(data)} onMouseUp={() => this.setState({ hoverSelection: true })}>
                                <Editor 
                                    editorState={this.state.editorState} 
                                    onChange={this.onChange}
                                    placeholder={'Tell us something...'}
                                />
                            </div>
                            {this.descriptionTextArea()}
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
>>>>>>> 19aa532d4ad1ab287e62440f9bd1256bc43ea6fd
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