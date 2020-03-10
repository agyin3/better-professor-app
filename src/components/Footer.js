import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    height: 5vh;
    color: #F3F9FB;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #113F67;
    padding: 2%;
    font-size: 1.6rem;
`

export const Footer = () => {
    return(
        <FooterContainer>
            <p style={{marginBottom: '0'}}>&copy; 2019 Buddy Agyin</p>
        </FooterContainer>
    )
}
