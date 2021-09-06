import React from 'react'
import styled from 'styled-components'

const Personas = () => {
    return (
        <Container>
            <span>personas --</span>
            <Text>From the research learnings and pillars, I created personas to embody <Bold>needs, desires and frustations</Bold> surrounding the pillars that I had found.</Text>
            <PersonaContainer>
                 <Image src = "./img/Chia_Persona.png"/>
                 <Image src = "./img/Natasha_Persona.png"/>
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
        font-size: 1.5rem;
    }
`

const Text = styled.div`
    margin-top: 20px;
`

const Image = styled.img`
`

const PersonaContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 35px;

`

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`
