import React, { Component } from 'react'
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js'
import {stateToHTML} from 'draft-js-export-html'
import { Row, Col } from 'antd'
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
        this.setState({ content: selectionObj, hoverSelection: false })
        console.log(this.state.content)
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
        // RichUtils.toggleInlineStyle(this.state.editorState, 'HIGHLIGHT')
        // this.setState({editorState: this.state.editorState})
        let content = this.state.content
        content.bgColor = '#ddd'
        this.setState({ hoverSelection: true, content })
    }

    descriptionTextArea() {
        if(this.state.hoverSelection){
            return (
                <div>
                    <textarea 
                        onChange={event => {
                            let a = this.state.content
                            a.description = event.target.value
                            this.setState({content: a})
                            console.log(this.state.content)
                        }}
                        placeholder={'Write some description'}
                    >
                    </textarea>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Row gutter={8} style={{margin: 10}}>
                    <Col span={12} style={{padding: 10}}>
                        <div className={'editor'} style={{backgroundColor: this.state.content.bgColor}}>
                            <Editor 
                                editorState={this.state.editorState} 
                                onChange={this.onChange}
                                placeholder={'Tell us something...'}
                            />
                        </div>
                        {this.descriptionTextArea()}
                    </Col>
                    <Col span={12} style={{padding: 10}}>
                        <div className={'editor'}>
                            {this.state.content.description}
                            {this.state.htmlFromEditor}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{padding: 20}}>
                        <div dangerouslySetInnerHTML={{__html: this.state.htmlFromEditor}}></div>
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
                    </Col>
                </Row>
            </div>
        )
    }

}

export default BlockEditor