import React from 'react'
import styled from 'styled-components'
import Project from './Project.js'
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";
  import {useHistory} from 'react-router-dom' 

const Projects = () => {
    const history = useHistory()
    return (
        <Container>
            <Heading>my projects 🖥️</Heading>
            <ProjectContainer>
                <Project onClick = {()=> history.push('/IntLTracker')} image = "./img/tracker1.png" title = "intL Tracker" text = "International Students make better immigration decisions!" color =  "radial-gradient(#1fe4f5, #3fbafe)" tags = {["UX Research", "UX/UI Design", "ReactJS", "Firebase"]}/>
                <Project onClick = {()=> history.push('/NokiaCoop')} image = "./img/Nokia.png" title = "Nokia Co-op" text = "Project Management and Data Analysis" color = "radial-gradient(#60efbc, #58d5c9)" tags = {["Agile", "Python", "PowerBI", "SQL", "MySQL Database"]}/>
                <Project onClick = {()=> history.push('/WebClones')} image = "./img/SlackMain.png" title = "Web Clones" text = "Amazon, Slack, LinkedIn Key features Integrated" color = "radial-gradient(#fbc1cc, #fa99b2)" tags = {["UI Design", "React JS", "Firebase Auth", "Firebase Database"]}/>  
                <Project image = "./img/facedetector.png" title = "Face Detector" text = "Face Detector built using Python's OpenCV library" color = "radial-gradient(#f588d8, #c0a3e5)" tags = {["Python", "Machine Learning", "OpenCV", "Harcass Alogorithm"]}/>    
            </ProjectContainer>
        </Container>
    )
}

export default Projects

const Container = styled.div`
    margin-top: 120px;
`

const ProjectContainer = styled.div`
    min-width: 1100px;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 50px;
    gap: 60px;
    margin-bottom:60px;
`

const Heading = styled.span`
    font-size: 2rem;
    color: #14213D;
`