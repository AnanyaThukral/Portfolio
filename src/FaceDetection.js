import React from 'react'
import styled from 'styled-components'

const FaceDetection = () => {
    return (
        <Container>
            <Detector>
                <span>my approach -- </span>
                <MainContainer>
                    <Text>
                        This project is done with this fantastic "Open Source Computer Vision Library", the OpenCV. I used the Haar feature-based cascade object detection method -  <Bold>Haar Cascade Algorithm</Bold> to detect the faces.
                    </Text>
                    <ImageContainer>
                        <Image src = "./img/FaceDetectionProcess.png"/>
                    </ImageContainer>
                </MainContainer>
            </Detector>
            <Detector>
                <span>coming soon -- </span>
                <MainContainer>
                    <Text>
                        I am currently working on building Covid-19 Mask Detection with Tensorflow and Deep Learning. I divided this project into two parts <Bold>Detect Face Masks in Images</Bold> and <Bold>Detect Face Masks in real-time video.</Bold>
                    </Text>
                    <ImageContain>
                        <ImageContainer>
                            <Image src = "./img/MaskDetectionProcess.png"/>
                        </ImageContainer>
                        <ImageContainer>
                            <Image src = "./img/Mask Detection.gif"/>
                        </ImageContainer>
                    </ImageContain>
                </MainContainer>
            </Detector>
        </Container>
    )
}

export default FaceDetection

const Container = styled.div`
    margin: 40px 0;
    min-width: 1100px;
    color: #14213D;
    span{
        font-size: 2rem;
        color:  rgba(0, 0, 0, 0.58);
        font-weight: 700;
    }
`

const MainContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1300px){
        min-width: 900px;
    }
`

const Image = styled.img`
   height: 100%;
`

const ImageContainer = styled.div`
   margin-top: 30px;
`

const Text = styled.div``

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`

const ImageContain = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
`

const Detector = styled.div`
    margin-top: 40px;
`