import * as types from './types.js'
import { axiosWithAuth } from '../utils/axiosWithAuth.js'


export const userLogin = (type, credentials) => dispatch => {
    dispatch({type: types.LOGIN_START})
    axiosWithAuth()
        .post(`/auth/login/?type=${type === 'professor' ? 'p' : 's'}`, credentials)
        .then(res => {
            console.log(res.data)
            dispatch({type: types.LOGIN_SUCCESS, payload: res.data.data.user})
            localStorage.setItem('token', res.data.data.token)
        })
        .catch(() => {
            dispatch({type: types.LOGIN_FAIL, payload: 'Incorrect username/password'})
        })
}

export const professorRegister = (info) => dispatch => {
    dispatch({type: types.REGISTER_PROFESSOR_START})
    axiosWithAuth()
    .post(`auth/register`, info)
    .then(res => {
        dispatch({type: types.REGISTER_PROFESSOR_SUCCESS, payload: res.data.data.user})
        localStorage.setItem('token', res.data.data.token)
    })
    .catch(err => {
        console.log(err)
        dispatch({type: types.REGISTER_PROFESSOR_FAIL, payload: 'Username or email is already in the system'})
    })
}

export const registerStudent = (info) => dispatch => {
    dispatch({type: types.REGISTER_STUDENT_START})
    axiosWithAuth()
        .put(`/students/${info.id}?register=true`, {
            username: info.username,
            password: info.password,
            email: info.email,
            registered: true
        })
        .then(res => {
            dispatch({type: types.REGISTER_STUDENT_SUCCESS, payload: res.data.data.student})
            localStorage.setItem('token', res.data.data.token)
        })
        .catch(err => {
            console.log(err)
            dispatch({type: types.REGISTER_STUDENT_FAIL, payload: 'Username or email is already in the system'})
        })
}