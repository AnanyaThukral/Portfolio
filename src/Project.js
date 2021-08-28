import React from 'react'
import styled from 'styled-components'

const Project = ({image, title, text, color}) => {
    return (
        <Container style = {{background: color}}>
            <Image src = {image}/>
            <Title>
                {title}
            </Title>
            <Text>
                {text}
            </Text>
        </Container>
    )
}

export default Project

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 450px;
    color: white;
    border-radius: 8px;
    padding-top: 30px;
    align-items: center;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.2s;
        :hover {
            box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
            transform: scale(1.01);
        }
    cursor: pointer;
`

const Image = styled.img`
    height: 300px;
`

const Title = styled.div``

const Text = styled.text``