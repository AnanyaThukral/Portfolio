import React from 'react'
import styled from 'styled-components'

const Status = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src = "./img/StatusList.png"/>
            </ImageContainer>

            
        </Container>
    )
}

export default Status

const Container = styled.div`
   
`
const ImageContainer = styled.div`
    display: flex;
    @media (max-width: 1300px){
        height: 500px;
    }
`

const Image = styled.img`
    height: 100%;
`