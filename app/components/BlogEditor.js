import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Row, Col, Button, Input } from 'antd'
import { 
    CompositeDecorator, 
    convertToRaw, 
    EditorState, 
    RichUtils, 
    ContentState,
    convertFromRaw,
    DefaultDraftBlockRenderMap,
    Modifier,
    Entity
} from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import { 
    FaBold, 
    FaItalic, 
    FaUnderline, 
    FaCode, 
    FaStrikethrough,
    FaListOl,
    FaListUl
} from 'react-icons/lib/fa'
import { AlreadyDescription, MiddleDescription } from './editor/decorator/DescriptionComponent'
import Immutable from 'immutable'
import createBlockBreakoutPlugin from 'draft-js-block-breakout-plugin'
import CustomCodeBlock from './editor/blockRender/CustomCodeBlock'
import { DescriptionInput } from './editor/DescriptionInput'
import { Description, findDescriptionEntities, SubDescription, findSubDescriptionEntities } from './editor/decorator/DescriptionDecorator'
import '../assets/editor.css'

class BlogEditor extends Component {
    constructor(props) {
        super(props)

        const decorator = new CompositeDecorator([
            {
                strategy: findDescriptionEntities,
                component: Description,
            },
            {
                strategy: findSubDescriptionEntities,
                component: (props) => SubDescription(props, this.props.changeDescription),
            }
        ])

        this.state = {
            editorState: EditorState.createWithContent(convertFromRaw(this.props.editor.editorState), decorator),
            decorator,
            showDesInput: false,
            desValue: '',
            description: ''
        }

        this.props.storeDecorator(decorator)
        this.props.customBlockRender(DefaultDraftBlockRenderMap.merge(blockRenderMap))

        this.focus = () => this.refs.editor.focus()
        
        this.onChange = (editorState) => {
            this.setState({editorState})
            this.props.storeEditorState(convertToRaw(editorState.getCurrentContent()))
        }

        const options = {
            breakoutBlocks: ['CustomCodeBlock']
        }
        const blockBreakoutPlugin = createBlockBreakoutPlugin(options)
        this.plugins = [blockBreakoutPlugin]

        this.onDesChange = (e) => this.setState({desValue: e.target.value})
        this._confirmDescription = this._confirmDescription.bind(this)
    }

    _promptForDescription = e => {
        e.preventDefault()
        const { editorState } = this.state
        const selection = editorState.getSelection()
        if (!selection.isCollapsed()) {
            const contentState = editorState.getCurrentContent()
            const startKey = editorState.getSelection().getStartKey()
            const startOffset = editorState.getSelection().getStartOffset()
            const blockWithDescriptionAtBeginning = contentState.getBlockForKey(startKey)
            const descriptionKey = blockWithDescriptionAtBeginning.getEntityAt(startOffset)
            let description = ''
            if (descriptionKey) {
                this.setState({ alreadyDes: true })
                const descriptionInstance = contentState.getEntity(descriptionKey)
                description = descriptionInstance.getData().description
            }
            this.setState({
                showDesInput: true,
                desValue: description,
            }, () => {
                setTimeout(() => this.refs.description.focus(), 0)
            })
        }
    }

    _comfirmSubDescription = e => {
        e.preventDefault()
        const {editorState, desValue} = this.state
        const contentState = editorState.getCurrentContent()
        const contentStateWithEntity = contentState.createEntity(
            'SUB_DESCRIPTION',
            'MUTABLE',
            {subDescription: desValue}
        )
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity })
        this.setState({
            editorState: RichUtils.toggleLink(
                newEditorState,
                newEditorState.getSelection(),
                entityKey
            ),
            showDesInput: false,
            desValue: '',
        }, () => {
            setTimeout(() => this.refs.editor.focus(), 0)
        })
    }

    _confirmDescription(e) {
        e.preventDefault()
        const {editorState, desValue} = this.state
        const contentState = editorState.getCurrentContent()
        const contentStateWithEntity = contentState.createEntity(
            'DESCRIPTION',
            'MUTABLE',
            {description: desValue}
        )
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity })
        this.setState({
            editorState: RichUtils.toggleLink(
                newEditorState,
                newEditorState.getSelection(),
                entityKey
            ),
            showDesInput: false,
            desValue: '',
        }, async () => {
            await this._onClickBlogType(changeBlogTypeElement.default)
            await this._onClickBlogType(changeBlogTypeElement.cb)
            setTimeout(() => this.refs.editor.focus(), 0)
        })
    }

    _onDescriptionInputKeyDown = e => {
        if (e.which === 13) {
            this._confirmDescription(e)
        }
    }
    
    _removeDescription = e => {
        e.preventDefault()
        const {editorState} = this.state
        const selection = editorState.getSelection()
        if (!selection.isCollapsed()) {
            this.setState({
                editorState: RichUtils.toggleLink(editorState, selection, null),
            })
        }
    }

    _onClickInlineStyle = event =>  this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, event))

    _onClickBlogType = event => this.onChange(RichUtils.toggleBlockType(this.state.editorState, event))

    saveEditorData = () => this.props.saveDataFromEditor(convertToRaw(this.state.editorState.getCurrentContent()))

    render() {
        let editorStateFromRedux = EditorState.createWithContent(convertFromRaw(this.props.editor.editorState), this.state.decorator)
        const { showDesInput, editorState, desValue } = this.state
        console.log(convertToRaw(this.state.editorState.getCurrentContent()))
        return (
            <div className={'root'}>
                <div className={'buttons'}>
                    <Button.Group style={{marginRight: 10}}>
                        { blockTypeText.map((data, index) => <Button key={index} onClick={() => this._onClickBlogType(data.value)}>{data.text}</Button>) }
                        <Button onClick={() => this._onClickBlogType(changeBlogTypeElement.default)}>default</Button>
                    </Button.Group>

                    <Button.Group style={{marginRight: 10}}>
                        { changeInlineElement.map((data, index) => <Button key={index} onClick={() => this._onClickInlineStyle(data.value)}>{data.icon}</Button>) }
                    </Button.Group>

                    <Button.Group style={{marginRight: 10}}>
                        { blockTypeOrder.map((data, index) => <Button key={index} onClick={() => this._onClickBlogType(data.value)}>{data.icon}</Button>) }
                    </Button.Group>

                    <Button.Group style={{marginRight: 10}}>
                        <Button onMouseDown={this._promptForDescription}>
                            Add Description
                        </Button>
                        <Button onClick={() => this._onClickBlogType(changeBlogTypeElement.default)} onMouseDown={this.removeDescription}>
                            Remove Description
                        </Button>
                    </Button.Group>

                    <Button icon={'info'}/>
                </div>
                
                <Row gutter={8}>
                    <Col span={ showDesInput?12:24 }>
                        <div className={'editor'} onClick={this.focus}>
                            <Editor
                                editorState={editorState}
                                onChange={this.onChange}
                                placeholder={"Enter some text..."}
                                ref={"editor"}
                                customStyleMap={colorStyleMap}
                                blockRenderMap={this.props.editor.blockRender}
                                plugins={this.plugins}
                            />
                        </div>
                    </Col>
                    <Col span={ showDesInput?12:0 }>
                        <DescriptionInput _confirmDescription={this._confirmDescription}>
                            <Input
                                onChange={this.onDesChange}
                                ref={"description"}
                                className={'desInput'}
                                type={"textarea"}
                                placeholder={'Please enter your description'}
                                value={desValue}
                                onKeyDown={this._onDescriptionInputKeyDown}
                            />
                            <Button onMouseDown={this._comfirmSubDescription}>Sub Des</Button>
                        </DescriptionInput>
                    </Col>
                </Row>
                <Button type={'primary'} icon={'check'} onClick={this.saveEditorData}>
                    Save
                </Button>
            </div>
        )
    }

}

const blockRenderMap = Immutable.Map({
  'CustomCodeBlock': {
    element: 'section',
    wrapper: <CustomCodeBlock />
  }
})

const changeInlineElement = [
    { value: 'BOLD', icon: <FaBold size={12} /> },
    { value: 'ITALIC', icon: <FaItalic size={11} /> },
    { value: 'UNDERLINE', icon: <FaUnderline size={12} /> },
    { value: 'CODEBLOCK', icon: <FaCode size={15} /> },
    { value: 'STRIKETHROUGH', icon: <FaStrikethrough size={12} /> }
]

const blockTypeText = [
    { value: 'header-one', text: 'h1' },
    { value: 'header-two', text: 'h2' },
    { value: 'header-three', text: 'h3' }
]

const blockTypeOrder = [
    { value: 'ordered-list-item', icon: <FaListOl size={12} /> },
    { value: 'unordered-list-item', icon: <FaListUl size={12} /> }
]

const changeBlogTypeElement = {
    default: 'unstyled',
    blockquote: 'blockquote',
    codeBlock: 'code-block',
    hr: 'hr',
    cb: 'CustomCodeBlock'
}

const colorStyleMap = {
    CODEBLOCK: {
        backgroundColor: '#f2f2f2', 
        paddingLeft: 16,
        paddingTop: 4,
        paddingBottom: 4,
        borderLeftStyle: 'solid',
        borderLeftWidth: 'thick',
        borderLeftColor: '#f5d773'
    }
}

const mapStateToProps = state => {
    return { editor: state.editor }
}

export default connect(mapStateToProps, actions)(BlogEditor)

// Description(props) {
//         const { description,alreadyDes } = props.contentState.getEntity(props.entityKey).getData()
//         let htmlComp = ''
//         console.log(alreadyDes)
//         switch (alreadyDes) {
//             case true : htmlComp = <div onMouseOver={() => this.props.changeDescription(description)}>
//                                     <AlreadyDescription>{this.codeDescription(props)}</AlreadyDescription>
//                               </div>
//             default : htmlComp = <div onMouseOver={() => this.props.changeDescription(description)}>
//                                     <MiddleDescription>{this.codeDescription(props)}</MiddleDescription>
//                             </div>
//         }
//         return htmlComp
//     }

//     codeDescription = props => {
//         const { description } = props.contentState.getEntity(props.entityKey).getData()
//         return (
//             <code className={'description'} >
//                 {props.children}
//             </code>
//         )
//     }