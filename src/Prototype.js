import React from 'react'
import styled from 'styled-components'

const Prototype = ({image, title,description}) => {
    return (
        <Container>
                <PrototypeContainer>
                    <Image src = {image}/>
                </PrototypeContainer>
                <TextFeature>
                    <span>{title}</span>
                    <Description>
                        {description}
                    </Description>
                </TextFeature>
        </Container>
    )
}

export default Prototype

const Container = styled.div`
    
    span{
        font-size: 1.7rem;
        font-weight: 900;
        @media (max-width: 1300px){
        font-size: 1.3rem;
    }
    }

    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
`

const TextFeature = styled.div`
    margin-top: 30px;
    background: radial-gradient(#1fe4f5, #3fbafe);
    border-radius: 4px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Description = styled.div`
    @media (max-width: 1300px){
        font-size: 0.9rem;
    }
`

const Image = styled.img`
    height: 100%;
`

const PrototypeContainer = styled.div`
    height: 400px;
    @media (max-width: 1300px){
        height: 330px;
    }
`
