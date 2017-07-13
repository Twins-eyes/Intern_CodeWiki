import { Map } from 'immutable'
import { GET_USER_DATE } from '../actions/types'

const INITIAL_STATE = Map({
    user: { a: 2 }
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER_DATE:
            return state.set('c', action.payload)
        default:
            return state
    }
}