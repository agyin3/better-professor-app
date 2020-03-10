import * as types from './types.js'
import { axiosWithAuth } from '../utils/axiosWithAuth.js'
import axios from 'axios'


export const userLogin = (type, credentials, history) => dispatch => {
    dispatch({type: types.LOGIN_START})
    axiosWithAuth()
        .post(`/auth/login/?type=${type === 'professor' ? 'p' : 's'}`, credentials)
        .then(res => {
            dispatch({type: types.LOGIN_SUCCESS, payload: res.data.data.user})
            localStorage.setItem('token', res.data.data.token)
            history.push('/professor/dashboard')
        })
        .catch(() => {
            dispatch({type: types.LOGIN_FAIL, payload: 'Incorrect username/password'})
        })
}

export const professorRegister = (info, history) => dispatch => {
    dispatch({type: types.REGISTER_PROFESSOR_START})
    axiosWithAuth()
    .post(`auth/register`, info)
    .then(res => {
        dispatch({type: types.REGISTER_PROFESSOR_SUCCESS, payload: res.data.data.user})
        localStorage.setItem('token', res.data.data.token)
        history.push('/professor/dashboard')
    })
    .catch(err => {
        console.log(err)
        dispatch({type: types.REGISTER_PROFESSOR_FAIL, payload: 'Username or email is already in the system'})
    })
}

export const registerStudent = (info, history) => dispatch => {
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
            history.push('/student/dashboard')
        })
        .catch(err => {
            console.log(err)
            dispatch({type: types.REGISTER_STUDENT_FAIL, payload: 'Username or email is already in the system'})
        })
}

export const fetchStudents = (id) => dispatch => {
    dispatch({type: types.FETCH_STUDENTS_START})
    axiosWithAuth()
        .get(`/users/professor/${id}/students`)
        .then(res => {
            console.log(res.data)
            dispatch({type: types.FETCH_STUDENTS_SUCCESS, payload: res.data.data.students})
        })
        .catch(() => {
            dispatch({type: types.FETCH_STUDENTS_FAIL, payload: 'There was an error getting your students'})
        })
}

export const addStudent = (id, student) => dispatch => {
    console.log(student)
    dispatch({type: types.ADD_STUDENT_START})
    axiosWithAuth()
        .post(`/users/professor/${id}/students`, student)
        .then(() => {
            axiosWithAuth()
                .get(`/users/professor/${id}/students`)
                .then(res => {
                    dispatch({type: types.ADD_STUDENT_SUCCESS, payload: res.data.data.students})
                })
        })
        .catch(err => {
            console.log(err)
            dispatch({type: types.ADD_STUDENT_FAIL, payload: 'Error adding new student'})
        })
}