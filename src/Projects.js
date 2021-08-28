import React from 'react'
import styled from 'styled-components'
import Project from './Project.js'

const Projects = () => {
    return (
        <Container>
            <Project image = "./img/tracker1.png" title = "intL Tracker" text = "UX Design | Front End Development" color =  "radial-gradient(#1fe4f5, #3fbafe)"/>
            <Project image = "" title = "Web Clones" text = "Front End Development | LinkedIn, Amazon, Slack" color = "radial-gradient(#60efbc, #58d5c9)"/>
            <Project image = "" title = "Web Clones" text = "Front End Development | LinkedIn, Amazon, Slack" color = "radial-gradient(#60efbc, #58d5c9)"/>
        </Container>
    )
}

export default Projects

const Container = styled.div`
    min-width: 1100px;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 50px;
    gap: 60px;
`