import React from 'react'
import styled from 'styled-components'

const Process = () => {
    return (
        <Container>
            <span>my process -- how did I reach this solution?</span>
            <ProcessContainer>
                    <Image src= "./img/Process.png"/>
            </ProcessContainer>
        </Container>
    )
}

export default Process

const Container = styled.div`
    min-width: 1100px;
    margin-top: 70px;
    span{
        font-size: 1.7rem;
    }
`
const ProcessContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`

const Image = styled.img`
    margin-top: 30px;
`