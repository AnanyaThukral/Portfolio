import React from 'react'
import styled from 'styled-components'

const TagItem = ({tag}) => {
    return (
        <Container>
            {tag}
        </Container>
    )
}

export default TagItem

const Container = styled.div`
    border-radius: 5px;
    padding: 5px 8px; 
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    background-color: transparent;
    border: 0.3px solid; 
    :hover{
        box-shadow: 0 0.5em 0.5em -0.4em var(#e5ff60);
        transform: translateY(-0.25em);
    }
    :focus{
        box-shadow: 0 0.5em 0.5em -0.4em var(#e5ff60);
        transform: translateY(-0.25em);
    }
    @media (max-width: 1300px){
       font-size: 12px;
       width: fit-content;
       text-align: center;
       vertical-align: center;
       white-space:nowrap;
       padding: 5px 16px;
    }
`