import React from 'react'
import styled from 'styled-components'

export const Ideation = () => {
    return (
        <Container>
            <span>ideation -- </span>
            <Text>User Scenarios and Story Boarding :</Text>
            <IdeationContainer>
                <Scenario>
                    <ImageContainer>
                        <Image src = "./img/Scenario.png"/>
                    </ImageContainer>
                    {/* <ScenarioContainer>
                        <Text>Other Scenarios</Text>
                        <Button>Scenario #1</Button>
                        <Button>Scenario #2</Button>
                    </ScenarioContainer> */}
                </Scenario>
                <StoryBoarding>
                    <Brief>I created storyboards that depict a potential user scenario that was based on the research findings and analysis. I went through scenarios where I would see users finding an opportunity to use my solution to tackle the problem they’re in. <Bold>My storyboards involve student checking their semester status on spot. </Bold></Brief>
                    <ImageContainer>
                        <Image src = "./img/Natasha_StoryBoard.png"/>
                    </ImageContainer>
                </StoryBoarding>
            </IdeationContainer>
        </Container>
    )
}

export default Ideation

const Container = styled.div`
    margin: 20px 0;
    min-width: 1100px;
    color: #14213D;
    span{
        font-size: 1.7rem;
    }
    @media (max-width: 1300px){
        min-width: 900px;
    }
`

const Text = styled.div`
    font-weight: 900;
    font-size: 1.2rem;

`

const StoryBoarding = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`

const Brief = styled.div`
    margin-bottom: 20px;
`

const Image = styled.img`
    height: 100%;
`

const ImageContainer = styled.div`
    @media (max-width: 1300px){
        height: 400px;
        display:flex;
        justify-content: center;
    }
`

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`
const Scenario = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 50px;
`

const ScenarioContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Button = styled.button`
    padding: 10px;
    border-radius: 4px;
    border: none;
    background: rgba(0,0,0,0.58);
    color: white;
    font-weight: 700;
`

const IdeationContainer = styled.div`
    margin-top: 20px;
    @media (max-width: 1300px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`