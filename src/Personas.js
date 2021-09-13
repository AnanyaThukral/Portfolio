import React from 'react'
import styled from 'styled-components'

const Personas = () => {
    return (
        <Container>
            <span>personas --</span>
            <Text>From the research learnings and pillars, I created personas to embody <Bold>needs, desires and frustations</Bold> surrounding the pillars that I had found.</Text>
            <PersonaContainer>
                <ImageContainer>
                    <Image src = "./img/Chia_Persona.png"/>
                 </ImageContainer>
                 <ImageContainer>
                    <Image src = "./img/Natasha_Persona.png"/>
                 </ImageContainer>
            </PersonaContainer>
        </Container>
    )
}

export default Personas

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
     @media (max-width: 1300px){
        height: 500px;
    }
`

const PersonaContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    @media (max-width: 1300px){
        margin-top: 40px;
        align-items: center;
        gap: 40px;
    }

`

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`
