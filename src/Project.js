import React from 'react'
import styled from 'styled-components'

const Project = ({image, title, text}) => {
    return (
        <Container>
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
    height: 500px;
    background-color: #14213D;
    color: white;
`

const Image = styled.img``

const Title = styled.div``

const Text = styled.text``