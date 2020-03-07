import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component}) => {
    const token = localStorage.getItem('token')
    return(
        <Route>
            {token ? 
                <Component /> : 
                <Redirect to='/' />   
        }
        </Route>
    )
}