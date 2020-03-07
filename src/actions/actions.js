import * as types from './types.js'


export const userLogin = (type, credentials) => dispatch => {
    dispatch({type: types.LOGIN_START})
    axiosWithAuth()
        .post(`/auth/login/?type=${type === professor ? 'p' : 's'}`, credentials)
        .then(res => {
            dispatch({type: types.LOGIN_SUCCESS, payload: res.data.data})
            localStorage.setItem('token', res.data.data.token)
        })
        .catch(err => {
            console.log(err)
            dispatch({type: types.LOGIN_FAIL, payload: 'Invalid username or password'})
        })
}