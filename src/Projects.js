import React from 'react'
import styled from 'styled-components'
import Project from './Project.js'

const Projects = () => {
    return (
        <Container>
            <Project image = "./img/tracker.png" title = "intL Tracker" text = "UX Design | Front End Development"/>
            <Project image = "" title = "Web Clones" text = "Front End Development | LinkedIn, Amazon, Slack"/>
        </Container>
    )
}

export default Projects

const Container = styled.div`
    min-width: 1100px;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 50px;
`