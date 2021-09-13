import React from 'react'
import styled from 'styled-components'
import ProjectIntro from './ProjectIntro'
import FaceDetection from './FaceDetection'

const MaskDetector = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>Real Time</Title>
                <Title>Face Detection</Title>
            </TitleContainer>
            <Description>
                Built a real time face detector with Python's Computer Vision library.
            </Description>
            <ProjectContainer>
                <ProjectIntro title = "projects" text = "AI Computer Vision"/>
                <ProjectIntro title = "tech Stack" text = "Python, OpenCV, IBM Watson (Model Training), Tensorflow"/>
            </ProjectContainer>
                <ImageContain>
                <ImageContainer>
                    <Image src = "./img/detect1.png"/>
                </ImageContainer>
                <ImageContainer>
                    <Image src = "./img/detect2.png"/>
                </ImageContainer>
                <ImageContainer>
                    <Image src = "./img/detect4.png"/>
                </ImageContainer>
            </ImageContain>
            <FaceDetection/>
        </Container>
    )
}

export default MaskDetector

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: center;
`

const Title = styled.div`
    font-size: 3.0rem;
    font-weight: 700;
    color: #f588d8;
`

const TitleContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Description = styled.div`
    font-weight: 900;
    margin: 10px 0 20px 0;
`

const ImageContainer = styled.div`
    margin-top: 50px;
    height: 200px;
`

const Image = styled.img`
    height: 100%;
`

const ImageContain = styled.div`
    display: flex;
    gap: 30px;
`
const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const TextContainer = styled.div`
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`

const Text = styled.div``
