import * as types from '../actions/types.js'

let initialState = {
    professor: {},
    students: [],
    isLoading: false,
    errors: {
        login: '',
        register: '',
        fetch: '',
        add: '',
        delete: ''
    }
}

const resetErrors = () => {
    return{
        login: '',
        register: '',
        fetch: '',
        add: '',
        delete: ''
    }
}

const persistedData = localStorage.getItem('reduxState')
if(persistedData){
    initialState = JSON.parse(persistedData).professors
}
export const professors = (state=initialState, {type, payload}) => {
    switch (type) {
        case types.LOGIN_START:
        case types.REGISTER_PROFESSOR_START:
        case types.FETCH_STUDENTS_START:
        case types.ADD_STUDENT_START:
        case types.DELETE_STUDENT_START:
            return{
                ...state,
                isLoading: true
            }
        case types.LOGIN_SUCCESS: 
        case types.REGISTER_PROFESSOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                professor: {
                    ...payload
                },
                errors: resetErrors()
            }
        case types.LOGIN_FAIL: 
            return {
                ...state,
                isLoading: false,
                errors: {
                    ...state.errors,
                    login: payload
                }
            }
        case types.REGISTER_PROFESSOR_FAIL:
            return {
                ...state,
                isLoading: false,
                registerError: payload,
                errors: {
                    ...state.errors,
                    register: payload
                }
            }
        case types.FETCH_STUDENTS_SUCCESS:
        case types.ADD_STUDENT_SUCCESS:
        case types.DELETE_STUDENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errors: resetErrors(),
                students: [...payload]
            }
        case types.FETCH_STUDENTS_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: {
                    ...state.errors,
                    fetch: payload
                }
            }
        case types.ADD_STUDENT_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: {
                    ...state.errors,
                    add: payload
                }
            }
        case types.DELETE_STUDENT_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: {
                    ...state.errors,
                    delete: payload
                }
            }
        default:
            return state
    }
}