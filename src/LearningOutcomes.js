import React from 'react'
import styled from 'styled-components'


const LearningOutcomes = () => {
    return (
        <Container>
            <span>Goals & Learning Outcomes -- </span>
            <GoalsContainer>
                <Goal><Bold>Communication - </Bold>The ability to effectively communicate my ideas and explain complex technological issues.</Goal>
                <Goal><Bold>Technological Literacy - </Bold>Develop new skills for automation of recurring tasks. Additionally, improve UX/UI Design skills by creating accessible and user friendly reports.</Goal>
                <Goal><Bold>Critical & Creative Thinking - </Bold>Develop novel or unorthodox solutions that do not depend wholly on past or current solutions.</Goal>
            </GoalsContainer>
        </Container>
    )
}

export default LearningOutcomes

const Container = styled.div`
    min-width: 1100px;
    margin-top: 70px;
    span{
        font-size: 1.7rem;
        color:  rgba(0, 0, 0, 0.58);
        font-weight: 700;
    }
`

const GoalsContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap : 20px ;
`

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`
const Goal = styled.div``

