import * as types from '../actions/types.js'

const initialState = {
    professor: {},
    students: []
}

export const professors = (state=initialState, {type, payload}) => {
    switch (type) {
        default:
            return state
            break;
    }
}