import React from 'react'
import Header from '../containers/Header'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const Logo = styled.img`
    width: 15%;
`

const LoginHeader = () => {
     return(
         <Header>
             <Logo src={logo} />
         </Header>
     )
}

export default LoginHeader