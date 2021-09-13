import React from 'react'
import styled from 'styled-components'

const Design = () => {
    return (
        <Container>
            <span>low-fidelity -- Paper Sketches</span>
            <Text>
            The very first screen design was done on paper based on the user flow diagram. I confirmed the user flow diagram logic and then moved onto creating a digital version. My Design and problem solving was inspired by popular applications like LinkedIn and Slack. 
            </Text>
            <ImageContainer>
                <Image src= "./img/Paper_Sketch.jpg"/>
            </ImageContainer>
        </Container>
    )
}

export default Design

const Container = styled.div`
    margin: 40px 0;
    min-width: 1100px;
    color: #14213D;
    span{
        font-size: 1.7rem;
    }
    @media (max-width: 1300px){
        min-width: 900px;
    }
    
`

const Text = styled.div`
    margin-top: 20px;
`

const Image = styled.img`
    height: 100%;
`

const ImageContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    height: 600px;
    @media (max-width: 1300px){
        height: 450px;
    }
`
