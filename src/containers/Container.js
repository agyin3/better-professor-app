import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    padding: ${props => props.padding || '2%'};
    min-height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
    background: ${props => props.background || '#fff'};
    margin: ${props => props.margin || '0'}
`

export const Container = (props) => {
    return(
        <MainContainer 
        direction={props.direction}
        justify={props.justify}
        align={props.align}
        padding={props.padding}
        height={props.height}
        width={props.width}
        background={props.background}
        margin={props.margin}
        >
            {props.children}
        </MainContainer>
    )
}