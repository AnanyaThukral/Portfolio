import React from 'react'
import styled from 'styled-components'

const Connect = () => {
    return (
        <Container>
            <DescriptionContainer>
                <ImageContainer>
                    <Image src="./img/Connect.png"></Image>
                </ImageContainer>
                <TextContainer>
                    <span>Connect Page</span>
                    <Text>The main feature of this "connect" page is the "Goal" section. The students can search for other students with similar goals and connect with them.</Text>
                    <Text> This gives students an ability to connect with other international students including senior international students and Alumni who have experience with immigration documents and have gone through similar process. 
                    </Text>
                </TextContainer>
            </DescriptionContainer>
        </Container>
    )
}

export default Connect

const Container = styled.div``

const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    @media (max-width: 1300px){
        font-size: 0.9rem;
    }
`

const Image = styled.img`
    height: 100%;
`

const ImageContainer = styled.div`
    height: 400px;
    @media (max-width: 1300px){
        height: 330px;
    }
`

const DescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;
    gap: 70px;
`

const Bold = styled.text`
    font-weight: 900;
    color: #14213D;
`

const TextContainer = styled.div`
    span{
        color: #14213D;
    }
`