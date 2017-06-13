import { CHANGE_DESCRIPTION } from './types'

export const changeDescription = description => {
    return {
        type: CHANGE_DESCRIPTION,
        payload: description
    }
}
