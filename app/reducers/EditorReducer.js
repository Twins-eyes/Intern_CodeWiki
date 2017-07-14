import { 
    CHANGE_DESCRIPTION, 
    STORE_EDITOR_STATE, 
    STORE_DECORATOR, 
    SAVE_DATA_EDITOR,
    STORE_BLOCK_RENDER,
    GET_TOPIC_DATA
} from '../actions/types'
import { EditorState, convertToRaw } from 'draft-js'
import { Map } from 'immutable'

const INITIAL_STATE = Map({
    description: '',
    editorState: convertToRaw(EditorState.createEmpty().getCurrentContent()),
    decorator: undefined,
    editorData: {},
    blockRender: undefined,
    allTopic: []
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_DESCRIPTION:
            return state.set('description', action.payload)
        case STORE_EDITOR_STATE:
            return state.set('editorState', action.payload)
        case STORE_DECORATOR:
            return state.set('decorator', action.payload)
        case SAVE_DATA_EDITOR:
            return state.set('editorData', action.payload)
        case STORE_BLOCK_RENDER:
            return state.set('blockRender', action.payload)
        case GET_TOPIC_DATA:
            return state.set('allTopic', action.payload)
        default:
            return state
    }
}
