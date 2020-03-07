import * as types from '../actions/types.js'

const initialState = {
    student: {},
    reminders: [],
    projects: {}
}

export const students = (state=initialState, {type, payload}) => {
    switch (type) {
        default:
            return state
    }
}