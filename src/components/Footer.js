import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    height: 5vh;
    color: #F3F9FB;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #113F67;
    padding: 1%;
`

export const Footer = () => {
    return(
        <FooterContainer>
            <p>&copy; 2019 Buddy Agyin</p>
        </FooterContainer>
    )
}
