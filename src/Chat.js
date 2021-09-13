import React from 'react'
import styled from 'styled-components'

const Chat = () => {
    return (
        <Container>
            <DescriptionContainer>
                <ImageContainer>
                    <Image src="./img/ChatChannel.png"></Image>
                </ImageContainer>
                <TextContainer>
                    <span>Chat Page & Channels</span>
                    <Text>
                        The Chat page not only allows for Direct Messages but lets the student create channels for discussions on specific topics. This allows students to share resources, chat with other students with similar interest.
                    </Text>
                </TextContainer>
            </DescriptionContainer>
        </Container>
    )
}

export default Chat

const Container = styled.div``

const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    @media (max-width: 1300px){
        font-size: 0.9rem;
    }
`

const Image = styled.img`
    height: 100%;
`

const ImageContainer = styled.div`
    height: 400px;
    @media (max-width: 1300px){
        height: 330px;
    }
`


const DescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;
    gap: 70px;
`

const Bold = styled.text`
    font-weight: 900;
    color: #14213D;
`

const TextContainer = styled.div`
    span{
        color: #14213D;
    }
`