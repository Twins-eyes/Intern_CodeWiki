import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Row, Col, Button, Input, Tooltip, Affix, Modal } from 'antd'
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
import { 
    FaBold, 
    FaItalic, 
    FaUnderline, 
    FaCode, 
    FaStrikethrough,
    FaListOl,
    FaListUl
} from 'react-icons/lib/fa'
import {
    GoMarkdown
} from 'react-icons/lib/go'
import { AlreadyDescription, MiddleDescription } from './editor/decorator/DescriptionComponent'
import Immutable from 'immutable'
import Editor from 'draft-js-plugins-editor'
import createBlockBreakoutPlugin from 'draft-js-block-breakout-plugin'
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin'
import createImagePlugin from 'draft-js-image-plugin'
import CustomCodeBlock from './editor/blockRender/CustomCodeBlock'
import { DescriptionInput, ButtonBar  } from './editor/DescriptionInput'
import { Description, SubDescription, findEntities } from './editor/decorator/DescriptionDecorator'
import '../assets/editor.css'

class BlogEditor extends Component {
    constructor(props) {
        super(props)

        const decorators = [
            {
                strategy: findEntities(findEntitiesElement.description),
                component: Description,
            },
            {
                strategy: findEntities(findEntitiesElement.subDescription),
                component: (props) => SubDescription(props, this.props.changeDescription),
            }
        ]
        const decorator = new CompositeDecorator(decorators)

        this.state = {
            editorState: EditorState.createWithContent(convertFromRaw(this.props.editor.editorState), decorator),
            decorators,
            showDesInput: false,
            desValue: '',
            description: '',
            subDesButton: false
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

        this.plugins = [
            createBlockBreakoutPlugin(options),
            createImagePlugin(),
            createMarkdownShortcutsPlugin()
        ]

        this.onDesChange = (e) => this.setState({desValue: e.target.value})
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
                this.setState({ subDesButton: true })
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

    _confirmDescription = (e, draftType, draftData, resetBlogType) => {
        e.preventDefault()
        let draftEntityData = {}
        const {editorState, desValue} = this.state
        const contentState = editorState.getCurrentContent()
        switch (draftData) {
            case 'description': { draftEntityData.description = desValue; break}
            case 'subDescription': { draftEntityData.subDescription = desValue; break}
            default: draftEntityData.description = desValue
        }
        const contentStateWithEntity = contentState.createEntity(
            draftType,
            'MUTABLE',
            draftEntityData
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
            subDesButton: false
        }, () => {
            if(resetBlogType){ this.resetBlogType() }
            setTimeout(() => this.refs.editor.focus(), 0)
        })
    }

    async resetBlogType() {
        await this._onClickBlogType(changeBlogTypeElement.default)
        await this._onClickBlogType(changeBlogTypeElement.cb)
    }

    _onDescriptionInputKeyDown = e => {
        if (e.which === 13) {
            this._confirmDescription(e, 'DESCRIPTION', 'description', true)
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
        const BlogType = editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getStartKey()).getType()

        return (
            <div className={'root'}>
                <Affix>
                    <div className={'buttons'} style={{backgroundColor: 'white' ,paddingTop: 5, paddingBottom: 5}}>
                        <Button.Group style={{marginRight: 10}}>
                            { blockTypeText.map((data, index) => <Button key={index} type={BlogType===data.value?'primary':''}  onClick={() => this._onClickBlogType(data.value)}>{data.text}</Button>) }
                        </Button.Group>

                        <Button.Group style={{marginRight: 10}}>
                            { changeInlineElement.map((data, index) => <Button key={index} type={editorState.getCurrentInlineStyle().has(data.value)?'primary':''} onClick={() => this._onClickInlineStyle(data.value)}>{data.icon}</Button>) }
                        </Button.Group>

                        <Button.Group style={{marginRight: 10}}>
                            { blockTypeOrder.map((data, index) => <Button key={index} type={BlogType===data.value?'primary':''} onClick={() => this._onClickBlogType(data.value)}>{data.icon}</Button>) }
                        </Button.Group>

                        <Button.Group style={{marginRight: 10}}>
                            <Button onMouseDown={this._promptForDescription} type={ BlogType === 'CustomCodeBlock' ? 'primary':'' } icon={'edit'}>
                                { BlogType === 'CustomCodeBlock' ? 'Edit' : 'Add' } Description
                            </Button>
                            <Button icon={'delete'} onClick={() => this._onClickBlogType(changeBlogTypeElement.default)} onMouseDown={this.removeDescription}>
                                Remove Description
                            </Button>
                        </Button.Group>

                        <Tooltip placement="topLeft" title="Allowed Markdown">
                            <Button style={{marginRight: 10}}><GoMarkdown size={15} /></Button>
                        </Tooltip>

                        <Button icon={'info'} type={'primary'} shape={'circle'} style={{marginRight: 10}}/>
                    </div>
                </Affix>
                <Row gutter={8}>
                    <Col span={ showDesInput?12:24 }>
                        <div className={'editor'} onClick={this.focus}>
                            <Editor
                                decorators={this.state.decorators}
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
                        <Modal 
                            visible={showDesInput} 
                            title={'Insert Description'}
                            onOk={this._confirmDescription}
                            onCancel={() => this.setState({ showDesInput: false })}
                            footer={null}
                        >
                            <DescriptionInput _confirmDescription={this._confirmDescription} subDesButton={this.state.subDesButton} showInput={() => this.setState({ showDesInput: false })}>
                                <Input
                                    onChange={this.onDesChange}
                                    ref={"description"}
                                    className={'desInput'}
                                    type={"textarea"}
                                    placeholder={'Please enter your description'}
                                    value={desValue}
                                    onKeyDown={this._onDescriptionInputKeyDown}
                                />
                            </DescriptionInput>
                        </Modal>
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
    { value: 'header-three', text: 'h3' },
    { value: 'unstyled', text: 'unstyled' }
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

const findEntitiesElement = {
    description: 'DESCRIPTION',
    subDescription: 'SUB_DESCRIPTION'
}

const mapStateToProps = state => {
    return { editor: state.editor }
}

export default connect(mapStateToProps, actions)(BlogEditor)