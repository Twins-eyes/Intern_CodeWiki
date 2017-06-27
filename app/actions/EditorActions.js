import axios from 'axios'
import {
    CHANGE_DESCRIPTION, 
    STORE_EDITOR_STATE, 
    STORE_DECORATOR, 
    SAVE_DATA_EDITOR 
} from './types'
import { POST_DATA_EDITOR } from '../api'

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

export const saveDataFromEditor = editorSate => {
    return function(dispatch) {
        return axios.post(POST_DATA_EDITOR, {
            "editorRaw": editorSate, 
        }).then(response => {
            console.log(response.data)
            // return {
            //     type: SAVE_DATA_EDITOR,
            //     payload: data
            // }
        }).catch(error => {
            console.log(error)
        })
    }
}