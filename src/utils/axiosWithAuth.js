import axios from 'axios'

export const axiosWithAuth = () => {
    return(
        axios.create({
            baseURL: 'https://better-professor-app-1.herokuapp.com/',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
    )
}