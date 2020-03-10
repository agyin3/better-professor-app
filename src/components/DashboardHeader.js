import React from 'react'
import Header from '../containers/Header'
import logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../containers/Container'

const Logo = styled.img`
    width: 15%;
`

const DashboardHeader = () => {
    const { pathname } = useLocation()
    const signOut = () => {
        localStorage.clear()
    }
    return(
        <Header justify='space-between' padding='1% 2%'>
            <Logo src={logo} />
            <Container 
            background='inherit' 
            padding='0'
            width='30%'
            justify='space-between'
            >
                {pathname.includes('professor') ? 
                    <>
                    <Link className='nav-links' to='/professor/dashboard'>Dashboard</Link>
                    <Link className='nav-links' to='/professor/settings'>Settings</Link>
                    <Link className='nav-links' onClick={signOut} to='/'>Sign Out</Link> 
                    </>
                :   
                    <>
                    <Link className='nav-links' to='/student/dashboard'>Dashboard</Link>
                    <Link className='nav-links' to='/student/settings'>Settings</Link>
                    <Link className='nav-links' onClick={signOut} to='/'>Sign Out</Link> 
                    </>  
            } 
            </Container>
        </Header>
    )
}

export default DashboardHeader