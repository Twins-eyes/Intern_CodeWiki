import { CHANGE_DESCRIPTION, STORE_EDITOR_STATE, STORE_DECORATOR } from './types'

export const changeDescription = description => {
    return {
        type: CHANGE_DESCRIPTION,
        payload: description
    }
}

export const storeEditorState = editorState => {
    return {
        type: STORE_EDITOR_STATE,
        payload: editorState
    }
}

export const storeDecorator = decorator => {
    return {
        type: STORE_DECORATOR,
        payload: decorator
    }
}