import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    height: 10vh;
    display: flex;
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    background: #113F67;
    padding: ${props => props.padding || '1%'}
`

const Header = (props) => {
    return(
        <HeaderContainer 
        align={props.align} 
        justify={props.justify} 
        padding={props.padding}
        >
            {props.children}
        </HeaderContainer>
    )
}

export default Header