import React from 'react'
import styled from 'styled-components'

const Data = ({img,text}) => {
    return (
        <Container>
            <Image src = {img}/>
            <Text>{text}</Text>
        </Container>
    )
}

export default Data

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const Image = styled.img`
    height: 300px;
`

const Text = styled.text`
    color: rgba(0,0,0,0.58);
    font-size: 1.5rem;
    font-weight: 700;
`