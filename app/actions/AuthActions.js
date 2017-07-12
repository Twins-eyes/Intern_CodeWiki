import axios from 'axios'
import { POST_SIGNIN, POST_SIGNUP } from '../api'

export const signIn = (username, password) => {
    return function(dispatch) {
        return axios.post(POST_SIGNIN, {
            "username": username,
            "password": password
        }).then(response => {
            localStorage.setItem('key', response.data.token)
            // return {
            //     type: SAVE_DATA_EDITOR,
            //     payload: data
            // }
        }).catch(err => {
            console.log(err)
        })
    }
}

export const signUp = (username, email, password) => {
    return function(dispatch) {
        return axios.post(POST_SIGNUP, {
            'username': username,
            'email': email,
            'password': password
        }).then(response => {
            localStorage.setItem('key', response.data.token)
        }).catch(err => {
            console.log(err)
        })
    }
}
