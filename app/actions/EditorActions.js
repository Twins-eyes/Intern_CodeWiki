import axios from 'axios'
import {
    CHANGE_DESCRIPTION, 
    STORE_EDITOR_STATE, 
    STORE_DECORATOR, 
    SAVE_DATA_EDITOR,
    STORE_BLOCK_RENDER,
    GET_TOPIC_DATA
} from './types'
import { POST_DATA_EDITOR, GET_ALL_TOPIC } from '../api'

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
            'editorRaw': editorSate,
            'title': 'sun',
            'ownerId': 'sun',
            'tags': ['abc','cba','java','javascript','hello','world']
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

export const customBlockRender = blockRenderMap => {
    return {
        type: STORE_BLOCK_RENDER,
        payload: blockRenderMap
    }
}

export const allTopic = topics => {
    return {
        type: GET_TOPIC_DATA,
        payload: topics
    }
}

export const getAllEditorData = () => dispatch => {
    return axios.get(GET_ALL_TOPIC).then(response => {
        dispatch(allTopic(response.data.editor))
    }).catch(error => {
        console.log(error)
    })
}