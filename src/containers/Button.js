import styled from 'styled-components'

export const Button = styled.button`
    background: ${props => props.background || '#113F67'};
    color: ${props => props.color || '#F3F9FB'};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width || '10rem'};
    padding: ${props => props.padding || '2% 0'};
    border-radius: 5px;
    font-size: ${props => props.size || '1.6rem'};
    margin: ${props => props.margin || 'auto'};

    &:hover {
        cursor: pointer;
        color: ${props => props.hover || '#87C0CD'};
    }
`