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
    ContentState 
} from 'draft-js'
import Immutable from 'immutable'
import { 
    FaBold, 
    FaItalic, 
    FaUnderline, 
    FaCode, 
    FaStrikethrough,
    FaListOl,
    FaListUl
} from 'react-icons/lib/fa'
import '../assets/editor.css'

class BlockEditor extends Component {
    constructor(props) {
        super(props)

        const decorator = new CompositeDecorator([
            {
                strategy: this.findLinkEntities,
                component: this.Link.bind(this),
            },
        ])

        this.state = {
            editorState: EditorState.createEmpty(decorator),
            showURLInput: false,
            urlValue: '',
            description: ''
        }

        this.focus = () => this.refs.editor.focus()
        this.onChange = (editorState) => this.setState({editorState})
        this.logState = () => {
            const content = this.state.editorState.getCurrentContent()
            console.log(convertToRaw(content))
        }

        this.promptForLink = this._promptForLink.bind(this)
        this.onURLChange = (e) => this.setState({urlValue: e.target.value})
        this.confirmLink = this._confirmLink.bind(this)
        this.onLinkInputKeyDown = this._onLinkInputKeyDown.bind(this)
        this.removeLink = this._removeLink.bind(this)
        this._onClickInlineStyle = this._onClickInlineStyle.bind(this)
        this._onClickBlogType = this._onClickBlogType.bind(this)

    }

    _promptForLink(e) {
        e.preventDefault()
        const {editorState} = this.state
        const selection = editorState.getSelection()
        if (!selection.isCollapsed()) {
            const contentState = editorState.getCurrentContent()
            const startKey = editorState.getSelection().getStartKey()
            const startOffset = editorState.getSelection().getStartOffset()
            const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey)
            const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset)
            let description = ''
            if (linkKey) {
                const linkInstance = contentState.getEntity(linkKey)
                description = linkInstance.getData().description
            }
            this.setState({
                showURLInput: true,
                urlValue: description,
            }, () => {
                setTimeout(() => this.refs.description.focus(), 0)
            })
        }
    }

    _confirmLink(e) {
        e.preventDefault()
        const {editorState, urlValue} = this.state
        const contentState = editorState.getCurrentContent()
        const contentStateWithEntity = contentState.createEntity(
            'LINK',
            'MUTABLE',
            {description: urlValue}
        )
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity })
        this.setState({
        editorState: RichUtils.toggleLink(
            newEditorState,
            newEditorState.getSelection(),
            entityKey
        ),
        showURLInput: false,
        urlValue: '',
        }, () => {
            setTimeout(() => this.refs.editor.focus(), 0)
        })
    }
    _onLinkInputKeyDown(e) {
        if (e.which === 13) {
            this._confirmLink(e)
        }
    }
    _removeLink(e) {
        e.preventDefault()
        const {editorState} = this.state
        const selection = editorState.getSelection()
        if (!selection.isCollapsed()) {
            this.setState({
                editorState: RichUtils.toggleLink(editorState, selection, null),
            })
        }
    }

    _onClickInlineStyle(event) {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, event))
    }

    _onClickBlogType(event) {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, event))
    }

    findLinkEntities(contentBlock, callback, contentState) {
        contentBlock.findEntityRanges(
            (character) => {
                const entityKey = character.getEntity() 
                return (
                    entityKey !== null &&
                    contentState.getEntity(entityKey).getType() === 'LINK'
                ) 
            },
            callback
        ) 
    }

    Link(props) {
        const {description} = props.contentState.getEntity(props.entityKey).getData() 
        return (
            <code style={styles.link} onMouseOver={() => this.props.changeDescription(description)}>
                {props.children}
            </code>
        ) 
    }


    render() {
        let urlInput
        if (this.state.showURLInput) {
        urlInput =
            <div style={styles.urlInputContainer}>
                <Row>
                    <Col span={20}>
                        <Input
                            onChange={this.onURLChange}
                            ref={"description"}
                            style={styles.urlInput}
                            type={"textarea"}
                            placeholder={'Please enter your description'}
                            value={this.state.urlValue}
                            onKeyDown={this.onLinkInputKeyDown}
                        />
                    </Col>
                    <Col span={4}>
                        <Button onMouseDown={this.confirmLink}>
                            Confirm
                        </Button>
                    </Col>
                </Row>
            </div>
        }
        
        return (
            <div style={styles.root}>
                <div style={{marginBottom: 10}}>
                    Select some text, then use the buttons to add or remove description
                    on the selected text.
                </div>
                <div style={styles.buttons}>
                    <Button.Group style={{marginRight: 10}}>
                        <Button onClick={() => this._onClickBlogType(changeBlogTypeElement.h1)}>h1</Button>
                        <Button onClick={() => this._onClickBlogType(changeBlogTypeElement.h2)}>h2</Button>
                        <Button onClick={() => this._onClickBlogType(changeBlogTypeElement.h3)}>h3</Button>
                        <Button onClick={() => this._onClickBlogType(changeBlogTypeElement.default)}>default</Button>
                    </Button.Group>

                    <Button.Group style={{marginRight: 10}}>
                        <Button onClick={() => this._onClickInlineStyle(changeInlineElement.bold)}><FaBold size={12} /></Button>
                        <Button onClick={() => this._onClickInlineStyle(changeInlineElement.italic)}><FaItalic size={11} /></Button>
                        <Button onClick={() => this._onClickInlineStyle(changeInlineElement.underline)}><FaUnderline size={12} /></Button>
                        <Button onClick={() => this._onClickInlineStyle(changeInlineElement.code)}><FaCode size={15} /></Button>
                        <Button onClick={() => this._onClickInlineStyle(changeInlineElement.strikethrough)}><FaStrikethrough size={13} /></Button>
                    </Button.Group>

                    <Button.Group style={{marginRight: 10}}>
                        <Button onClick={() => this._onClickBlogType(changeBlogTypeElement.ol)}><FaListOl size={12} /></Button>
                        <Button onClick={() => this._onClickBlogType(changeBlogTypeElement.ul)}><FaListUl size={12} /></Button>
                    </Button.Group>

                    <Button.Group style={{marginRight: 10}}>
                        <Button onMouseDown={this.promptForLink} type={'primary'}>
                            Add Description
                        </Button>
                        <Button onMouseDown={this.removeLink}>
                            Remove Description
                        </Button>
                    </Button.Group>

                    <Button icon={'info'}/>
                </div>
                {urlInput}
                <Row gutter={8}>
                    <Col span={12}>
                        <div style={styles.editor} onClick={this.focus}>
                            <Editor
                                editorState={this.state.editorState}
                                onChange={this.onChange}
                                placeholder={"Enter some text..."}
                                ref={"editor"}
                            />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div style={styles.editor}>
                            {this.props.editor.description}
                        </div>
                    </Col>
                </Row>
                <Button
                    onClick={this.logState}
                    style={{marginTop: 10}}
                >Log State</Button>
            </div>
        )
    }
}



const styles = {
    root: {
        //fontFamily: '\'Georgia\', serif',
        padding: 20,
        // width: 600,
    },
    buttons: {
        marginBottom: 10,
    },
    urlInputContainer: {
        marginBottom: 10,
    },
    urlInput: {
        //fontFamily: '\'Georgia\', serif',
        marginRight: 10,
        padding: 3,
    },
    editor: {
        borderRadius: 2,
        border: '1px solid #ddd',
        cursor: 'text',
        minHeight: 80,
        padding: 10,
        boxSizing: 'border-box',
        boxShadow: 'inset 0px 1px 8px -3px #ABABAB',
    },
    button: {
        marginTop: 10,
        textAlign: 'center',
    },
    link: {
        color: 'black',
        backgroundColor: '#ddd',
        padding: 2,
        marginBottom: 3,
        borderRadius: 2
        // +Math.floor(Math.random()*16777215).toString(16)
    },
} 

const changeInlineElement = {
    bold: 'BOLD',
    italic: 'ITALIC',
    code: 'CODE',
    underline: 'UNDERLINE',
    strikethrough: 'STRIKETHROUGH'
}

const changeBlogTypeElement = {
    h1: 'header-one',
    h2: 'header-two',
    h3: 'header-three',
    blockquote: 'blockquote',
    codeBlock: 'code-block',
    ul: 'unordered-list-item',
    ol: 'ordered-list-item',
    default: 'unstyled'
}

const mapStateToProps = state => {
    return { editor: state.editor }
}

export default connect(mapStateToProps, actions)(BlockEditor)