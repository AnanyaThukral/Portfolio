import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Link from 'react-router-dom'

const Footer = () => {
    return (
        <Container>
            <Text>
                Thanks for stopping by! Feel free to connect with me through email or LinkedIn 😎
            </Text>
            <Contact>
                <Email onClick = {(event)=> window.location.href = "mailto:ananya@uoguelph.ca"}>ananya@uoguelph.ca</Email>
                <Social>
                    <LinkedInIcon onClick = {() => window.open("https://www.linkedin.com/in/ananya-thukral-576301178/", "_blank")}  style = {{fontSize: "2rem", cursor:"pointer"}}/>
                    <EmailIcon onClick = {(event) => window.location.href = "mailto:ananya@uoguelph.ca"}  style = {{fontSize: "2rem", cursor:"pointer"}}/>
                    <GitHubIcon onClick = {() => window.open("https://github.com/AnanyaThukral", "_blank")}  style = {{fontSize: "2rem", cursor:"pointer"}}/>
                </Social>
            </Contact>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:center;
`
const Text = styled.div`
    color:#14213D;
`

const Contact = styled.div`
`

const Email = styled.div`
    color: #2A8BF2;
    font-weight: 500;
    cursor: pointer;
    :hover{
        font-weight: 700;
    }
`

const Social = styled.div`
    padding: 15px;
    display: flex;
    justify-content: center;
    gap: 8px;
`