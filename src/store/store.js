import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

