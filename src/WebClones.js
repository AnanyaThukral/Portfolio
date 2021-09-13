import React from 'react'
import styled from 'styled-components'
import ProjectIntro from './ProjectIntro'
import GitHubIcon from '@material-ui/icons/GitHub';

const WebClones = () => {
    return (
        <Container>
            <Title> Web Inspiration</Title>
            <Description>Getting Inspired by popular web applications and learning how their key features are implemented.</Description>
            <ProjectIntroContainer>
                <ProjectIntro title = "projects" text = "Amazon, Slack, LinkedIn"/>
                <ProjectIntro title = "tech stack" text = "JavaScript, React JS, Styled Components, Redux, Firebase"/>
                <ProjectIntro title = "features built" text = "Backend Database usage of Amazon, Chat & Channel of Slack, Feed & Post of LinkedIn"/>
                <ProjectIntro title = "goal" text = "I developed the above clones with React JS in order to integrate them into my application. The code is available on my GitHub."/>
            </ProjectIntroContainer>
            <ToolContainer>
                <Tools>
                    <Tool>
                        <Image src = "./img/JS.png"/>
                    </Tool>
                    <Tool>
                        <Image src = "./img/React.png"/>
                    </Tool>
                    <Tool>
                        <Image src = "./img/Redux.png"/>
                    </Tool>
                    <Tool>
                        <Image src = "./img/Firebase.png"/>
                    </Tool>
                </Tools>
            </ToolContainer>
           <ImageContainer>
               <Image src = "./img/Amazon.png"/>
               <Image src = "./img/Slack.png"/>
               <Image src = "./img/Linkedin.png"/>
           </ImageContainer>
        </Container>
    )
}

export default WebClones

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: center;
    gap: 10px;
`

const ImageContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content:center;
    align-items: center;
`

const Image = styled.img`
    height: 100%;
`

const Title = styled.div`
    margin-top: 70px;
    color:  #fa99b2;
    font-size: 3rem;
    font-weight: 700;
`

const Description = styled.div`
    font-weight: 900;
`

const Text = styled.div``

const ProjectIntroContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const ToolContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Tool = styled.div`
    height: 50px;
`

const Tools = styled.div`
    display: flex;
`