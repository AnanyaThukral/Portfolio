import React from 'react'
import styled from 'styled-components'

const Insights = ({text}) => {
    return (
        <Container>
            <ul>
                <li>{text}</li>
            </ul>
        </Container>
    )
}

export default Insights

const Container = styled.div`
    ul{
       display: flex;
       flex-direction: column;
       padding: 15px;
    }

`