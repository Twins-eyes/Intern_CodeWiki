import axios from 'axios'
import { Redirect } from 'react-router-dom'
import {
    CHANGE_DESCRIPTION, 
    STORE_EDITOR_STATE, 
    SAVE_DATA_EDITOR,
    GET_TOPIC_DATA,
    EDITOR_DATA_BY_ID,
    GET_MY_TOPIC,
    CLEAR_EDITOR_STATE
} from './types'
import { 
    POST_DATA_EDITOR, 
    GET_ALL_TOPIC, 
    GET_EDITOR_DATA, 
    SEARCH_TOPIC, 
    SEARCH_MY_TOPIC
} from '../api'

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

export const clearEditorState = () => {
    return {
        type: CLEAR_EDITOR_STATE
    }
}

export const saveDataFromEditor = (editorSate, title, tags, ownerId, ownerName) => {
    return function(dispatch) {
        return axios.post(POST_DATA_EDITOR, {
            'editorRaw': editorSate,
            'title': title,
            'ownerId': ownerId,
            'ownerName': ownerName,
            'tags': tags
        }, {
            headers: { "Authorization": localStorage.getItem('key') }
        }).catch(error => {
            console.log(error)
        })
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

export const detailDisplayById = editorData => {
    return {
        type: EDITOR_DATA_BY_ID,
        payload: editorData
    }
}

export const getEditorById = data => dispatch => {
    return axios.post(GET_EDITOR_DATA, {
        '_id': data.id
    }).then(response => {
        dispatch(detailDisplayById(response.data.editor))
    }).catch(error => {
        console.log(error)
    })
}

export const searchTopic = search => dispatch => {
    return axios.post(SEARCH_TOPIC, {
        'searchText': search
    }).then(response => {
        dispatch(allTopic(response.data.topic))
    }).catch(error => {
        console.log(error)
    })
}

export const searchMyTopic = id => dispatch => {
    return axios.post(SEARCH_MY_TOPIC, {
        'id': id
    }).then(response => {
        return dispatch(myTopicDispatch(response.data.topics))
    }).catch(error => {
        console.log(error)
    })
}

export const myTopicDispatch = topics => {
    return {
        type: GET_MY_TOPIC,
        payload: topics
    }
}