import React from 'react'
import styled from 'styled-components'
import ProjectIntro from './ProjectIntro'
import ProjectBackground from './ProjectBackground'
import LearningOutcomes from './LearningOutcomes'


const NokiaCoop = () => {
    return (
        <Container>
            <HeadingContainer>
                <Heading>Nokia</Heading>
                <Heading>Project Management Internship</Heading>
            </HeadingContainer>
            <Text>
                I had an incredible opportunity to intern at Nokia with Project Management team within Nokia Software Foundation (NSW)
            </Text>
            {/* updates for work term term report */}
            <ProjectIntro title = "duration" text = "8 Months (Jan 2021 - Aug 2021)"/>
            <ProjectIntro title = "tech stack" text = "Python, Excel (VBA), PowerBI, Jira, Jira REST API, Confluence, Sharepoint, Git, GitLab"/>
            {/* updates for work term term report */}
            <LearningOutcomes/>
            <ProjectBackground/>
        </Container>
    )
}

export default NokiaCoop

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: center;
    gap: 20px;
`

const Heading = styled.div`
    font-size: 3.0rem;
    font-weight: 700;
    color: #58d5c9;
`

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`

const Image = styled.img`
    height: 400px;
`

const HeadingContainer = styled.div`
    margin-top: 60px;
    text-align: center;
`

const Text = styled.div`
    font-weight: 900;
    @media (max-width: 1300px){
        font-size: 0.9rem;
    }
`

