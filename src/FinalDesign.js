import React from 'react'
import styled from 'styled-components'
import Connect from './Connect'
import Chat from './Chat'
import Dashboard from './Dashboard'
import Status from './Status'

const FinalDesign = () => {
    return (
        <Container>
            <span>final designs -- </span>
            <Text>After getting an idea of what the design flow is and main features in paper sketches that I want to integrate I designed wireframes and switched to my final web app design.</Text>
            <PrototypeContainer>
                <Dashboard/>
                <Connect/>
                <Chat/>
                <Status/>
            </PrototypeContainer>
        </Container>
    )
}

export default FinalDesign

const Container = styled.div`
    margin: 40px 0;
    min-width: 1100px;
    color: #14213D;
    span{
        font-size: 1.5rem;
    }
`

const PrototypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    margin-top: 30px;
`

const Text = styled.div`
    margin-top: 30px;
`