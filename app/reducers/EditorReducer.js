import { CHANGE_DESCRIPTION, STORE_EDITOR_STATE, STORE_DECORATOR } from '../actions/types'
import { EditorState } from 'draft-js'

const INITIAL_STATE = {
    description: '',
    editorState: undefined,
    decorator: undefined
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_DESCRIPTION:
            return { ...state, description: action.payload }
        case STORE_EDITOR_STATE:
            return { ...state, editorState: action.payload }
        case STORE_DECORATOR:
            return { ...state, decorator: action.payload }
        default:
            return state
    }
}
