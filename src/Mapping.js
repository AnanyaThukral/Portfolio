import React from 'react'
import styled from 'styled-components'

const Mapping = ({title, text, img}) => {
    return (
        <Container>
            <span>{title}</span>
            <Text>{text}</Text>
            <ImageContainer>
                <Image src = {img}/>
            </ImageContainer>
        </Container>
    )
}

export default Mapping

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

const Image = styled.img`
    height: 100%;
    margin-top: 20px;
`

const Text = styled.div`
    margin-top: 10px;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 550px;
    margin: 20px;
    @media (max-width: 1300px){
        height: 500px;
    }
`

