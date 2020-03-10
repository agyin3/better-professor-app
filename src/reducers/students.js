import * as types from '../actions/types.js'

let initialState = {
    student: {},
    reminders: [],
    projects: {},
    isLoading: false,
    registerError: '',
    loginError: ''
}

const persistedData = localStorage.getItem('reduxState')
if(persistedData){
    initialState = JSON.parse(persistedData).students
}

export const students = (state=initialState, {type, payload}) => {
    switch (type) {
        case types.REGISTER_STUDENT_START:
        case types.LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case types.REGISTER_STUDENT_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                student: {
                    ...payload
                },
                isLoading: false,
                loginError: '',
                registerError: ''
            }
        case types.REGISTER_STUDENT_FAIL:
            return {
                ...state,
                isLoading:false,
                registerError: payload
            }
        case types.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                loginError: payload
            }
        default:
            return state
    }
}