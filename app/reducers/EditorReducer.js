import { 
    CHANGE_DESCRIPTION, 
    STORE_EDITOR_STATE, 
    SAVE_DATA_EDITOR,
    GET_TOPIC_DATA,
    EDITOR_DATA_BY_ID
} from '../actions/types'
import { EditorState, convertToRaw } from 'draft-js'
import { Map } from 'immutable'

const INITIAL_STATE = Map({
    description: '',
    editorState: convertToRaw(EditorState.createEmpty().getCurrentContent()),
    editorData: {},
    allTopic: [],
    detailDisplay: {
        _id: 0,
        tags: [],
        editorRaw: convertToRaw(EditorState.createEmpty().getCurrentContent())
    }
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_DESCRIPTION:
            return state.set('description', action.payload)
        case STORE_EDITOR_STATE:
            return state.set('editorState', action.payload)
        case SAVE_DATA_EDITOR:
            return state.set('editorData', action.payload)
        case GET_TOPIC_DATA:
            return state.set('allTopic', action.payload)
        case EDITOR_DATA_BY_ID:
            return state.set('detailDisplay', action.payload)
        default:
            return state
    }
}
