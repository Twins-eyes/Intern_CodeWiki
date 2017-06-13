import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducers'

exports.configureStore = () => {
    let store = createStore(reducer, applyMiddleware(thunk))

    return store
}