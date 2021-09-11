import React from 'react'
import styled from 'styled-components'

const Dashboard = () => {
    return (
        <Container>
            <DescriptionContainer>
                <Image src="./img/Dashboard.png"></Image>
                <TextContainer>
                    <span>A comprehensive Student Dashboard</span>
                    <Text>Providing information on -  Upcoming immigration sessions,  Semester Status (Full Time/Part Time) with an ability to filter,
                    Document Expiry Date with corresponding ongoing processing Time taken by immigration office,
                    To do list and Side bar with "Connect to other international students" as one of the options.
                    </Text>
                </TextContainer>
            </DescriptionContainer>
        </Container>
    )
}

export default Dashboard

const Container = styled.div``

const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

const Image = styled.img`
    height: 400px;
`

const DescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;
    gap: 70px;
`

const Bold = styled.p`
    font-weight: 900;
    color: #14213D;
    display: inline;
`

const TextContainer = styled.div`
    span{
        color: #14213D;
    }
`

