import React from 'react'
import styled from 'styled-components'
import Prototype from './Prototype'

const FinalDesigns = () => {
    return (
        <Container>
            <span>final Designs -- </span>
            <Text>After getting an idea of what the design flow is and main features in paper sketches that I want to integrate I designed wireframes and switched to my final web app design.</Text>
           <PrototypeContainer>
               <Prototype image = "./prototype/AddSemester.gif" title = "01. Add new Semester" description = " Allowing users to add a new semester and check their status (Full-time/ Part-time) based on the credits added."/>
           </PrototypeContainer>
        </Container>
    )
}

export default FinalDesigns

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

const PrototypeContainer = styled.div`
    display: flex;
    flex-direction: column;
`