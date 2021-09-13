import React from 'react'
import styled from 'styled-components'

const Process = () => {
    return (
        <Container>
            <span>my process -- how did I reach this solution?</span>
            <ProcessContainer>
                <ImageContainer>
                    <Image src= "./img/Process.png"/>
                </ImageContainer>
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
    @media (max-width: 1300px){
        min-width: 900px;
    }
`
const ProcessContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`

const Image = styled.img`
   height: 100%;
`

const ImageContainer = styled.div`
     margin-top: 30px;
     @media (max-width: 1300px){
        height: 140px;
    }
`