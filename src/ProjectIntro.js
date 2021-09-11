import React from 'react'
import styled from 'styled-components'

const ProjectIntro = ({title,text}) => {
    return (
        <Container>
            <span>{title} -- </span>
            <Text>{text}</Text>
        </Container>
    )
}

export default ProjectIntro

const Container = styled.div`
        span{
        color:  rgba(0, 0, 0, 0.58);
        font-weight: 700;
    }
`
const Text = styled.div`
    display: inline;
`

