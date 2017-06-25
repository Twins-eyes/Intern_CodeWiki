import { 
    CHANGE_DESCRIPTION, 
    STORE_EDITOR_STATE, 
    STORE_DECORATOR, 
    SAVE_DATA_EDITOR 
} from '../actions/types'
import { EditorState, convertToRaw } from 'draft-js'

const INITIAL_STATE = {
    description: '',
    editorState: convertToRaw(EditorState.createEmpty().getCurrentContent()),
    decorator: undefined,
    editorData: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_DESCRIPTION:
            return { ...state, description: action.payload }
        case STORE_EDITOR_STATE:
            return { ...state, editorState: action.payload }
        case STORE_DECORATOR:
            return { ...state, decorator: action.payload }
        case SAVE_DATA_EDITOR:
            return { ...state, editorData: action.payload }
        default:
            return state
    }
}
