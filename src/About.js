import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <Container>
            <MainContainer>
                <ImageContainer>
                    <Image src = "./img/myphoto.jpg"/>
                </ImageContainer>
                <TextContainer>
                    <span>A little about me --</span>
                    <Text>
                    Nice to meet you! <Bold>I'm Ananya! 👋</Bold>
                    </Text>
                    <Text>
                    I'm a Final Year Computer Science Student at University of Guelph and expected to graduate in May 2022. 👩‍💻 
                    </Text>
                    <Text>
                    I'm curious and passionate about learning how the motivations and feelings of people impact their actions. I enjoy working at the crossroads of design and development and have the ability to communicate with engineers. I believe in technology that empowers, not detracts, the holistic experience. I'm learning and finding inspiration in new places everyday, and strive to grow day by day as both a <Bold>designer and developer.</Bold>
                    </Text>
                    <Text>
                        A lot happened in 2021 🚀 <Bold>Became the Cluster Leader for Computer Science</Bold> at the university. I'm currently working as a <Bold>Web Developer</Bold> at GryphHacks. <Bold>Teaching programming</Bold> courses to First year stduents.
                        <Bold> Upgrading</Bold> this portfolio website almost everyday which I coded from scratch.  <Bold> Finished designing</Bold> my passion project. 
                    </Text>
                    <Text>
                        Thank you for taking the time to get to know a little bit about me and my projects. <Bold>Always happy to chat over coffee or a cup of chai. </Bold> ☕
                    </Text>
                    <Connect>
                        <Text><Bold>Connect with me! 😎 </Bold></Text>
                            <SocialContainer>
                                <SocialLink>Github <Bold  onClick = {() => window.open("https://github.com/AnanyaThukral", "_blank")}style = {{color: "#2A8BF2", cursor: "pointer"}}>@ananya</Bold></SocialLink>
                                <SocialLink>LinkedIn <Bold onClick = {() => window.open("https://www.linkedin.com/in/ananya-thukral-576301178/", "_blank")} style = {{color: "#2A8BF2", cursor: "pointer"}}>@ananya</Bold></SocialLink>
                                <SocialLink>Email <Bold  onClick = {(event) => window.location.href = "mailto:ananya@uoguelph.ca"}style = {{color: "#2A8BF2" , cursor: "pointer"}}>@ananya</Bold></SocialLink>
                            </SocialContainer>
                    </Connect>
                </TextContainer>
            </MainContainer>
        </Container>
    )
}

export default About

const Container = styled.div``

const MainContainer = styled.div`
    margin-top: 60px;
    display: flex;
    gap: 60px;
    span{
        font-size: 1.7rem;
        color:  rgba(0, 0, 0, 0.58);
        font-weight: 700;
    }

`

const ImageContainer = styled.div`
    height: 500px;
    border: dotted;
    border-color: #14213d;
    padding: 9px;
    border-width: 2px;
`

const Image = styled.img`
    height: 100%;
`

const Text = styled.div`
    margin-top: 20px;
    letter-spacing: 0.3px;
`

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`

const TextContainer = styled.div`
`

const Connect = styled.div`
    margin-top: 20px;
`

const SocialContainer = styled.div`
    margin-top: 10px;
    display:flex;
    flex-direction: column;
    margin-bottom: 30px;
`

const SocialLink = styled.div``
