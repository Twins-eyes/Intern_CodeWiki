import { CHANGE_DESCRIPTION } from '../actions/types'

const INITIAL_STATE = {
    description: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_DESCRIPTION:
            return { description: action.payload }
        default:
            return state
    }
}