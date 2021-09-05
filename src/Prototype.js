import React from 'react'
import styled from 'styled-components'

const Prototype = ({image, title,description}) => {
    return (
        <Container>
             <KeyFeatures>
                <PrototypeContainer>
                    <Image src = {image}/>
                </PrototypeContainer>
                <TextFeature>
                    <span>{title}</span>
                    <Description>
                        {description}
                    </Description>
                </TextFeature>
            </KeyFeatures>
        </Container>
    )
}

export default Prototype

const Container = styled.div``
const KeyFeatures = styled.div`
    
    span{
        font-size: 1.3rem;
        font-weight: 900;
    }

    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
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

const Description = styled.div``

const Image = styled.img`
    height: 100%;
`

const PrototypeContainer = styled.div`
    height: 400px;
`
