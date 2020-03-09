import * as types from '../actions/types.js'

const initialState = {
    professor: {},
    students: [],
    isLoading: false,
    loginError: '',
    registerError: ''
}

export const professors = (state=initialState, {type, payload}) => {
    switch (type) {
        case types.LOGIN_START:
        case types.REGISTER_PROFESSOR_START:
            return{
                ...state,
                isLoading: false
            }
        case types.LOGIN_SUCCESS: 
        case types.REGISTER_PROFESSOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                professor: {
                    ...payload
                },
                loginError: '',
                registerError: ''
            }
        case types.LOGIN_FAIL: 
            return {
                ...state,
                isLoading: false,
                loginError: payload
            }
        case types.REGISTER_PROFESSOR_FAIL:
            return {
                ...state,
                isLoading: false,
                registerError: ''
            }
        default:
            return state
    }
}