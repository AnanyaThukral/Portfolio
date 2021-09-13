import React from 'react'
import styled from 'styled-components'
import Prototype from './Prototype'

const FinalDesigns = () => {
    return (
        <Container>
            <span>final Prototypes -- </span>
           <PrototypeContainer>
               <Prototype image = "./prototype/AddSemester.gif" title = "01. Add new Semester" description = " Allowing users to add a new semester and check their status (Full-time/ Part-time) based on the credits added."/>
               <Prototype image = "./prototype/Status Table.gif" title = "02. Filtered View for Status" description = "Ability to filter across various years, semesters, courses, credits and Status (Full Time/Part Time)"/>
               <Prototype image = "./prototype/Connect.gif" title = "03. Connect" description = "Connect with other international students, provides the filtered list of students depending on the search. For example - if the user needs help in work permit then the app provides the user with recommendation of students who recently applied for work permit."/>
               <Prototype image = "./prototype/Chat.gif" title = "04. Direct Chat & Channels" description = "Ability to create channels and initiate coversations and gain info on specific topics with access to resources. "/>
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
        font-size: 1.7rem;
    }
    @media (max-width: 1300px){
        min-width: 900px;
    }
   
`

const PrototypeContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`