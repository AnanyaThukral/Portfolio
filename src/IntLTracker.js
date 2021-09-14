import React from 'react'
import styled from 'styled-components'
import ProjectIntro from './ProjectIntro'
import Challenge from './Challenge'
import Solution from './Solution'
import Process from './Process'
import Research from './Research'
import DataAnalysis from './DataAnalysis'
import Mapping from './Mapping'
import AffinityFinding from './AffinityFinding'
import Personas from './Personas'
import Ideation from './Ideation'
import Design from './Design'
import FinalDesigns from './FinalDesigns'
import FinalDesign from './FinalDesign'
import Next from './Next'

const IntLTracker = () => {
    return (
        <Container>
            <Name>intL Tracker</Name>
            <Text>One Stop Progress Tracking Web App for International Students in Canada to fulfill all their immigration needs</Text>
            <Description>
                <ProjectIntro title = "role" text = "UX Designer & Front End Developer"/>
                <ProjectIntro title = "duration" text = "Summer 2021 (4 Months)"/>
            </Description>
            <Image src ="./img/tracker.png"/>
            <Challenge/>
            <Solution/>
            <Process/>
            <Research/>
            <DataAnalysis/>
            <Mapping title = "empathy mapping --" text = "To get a deeper understanding of user needs I decided to build empathy maps." img = "./img/Chia_EMAP.png"/>
            <Mapping title = "affinity mapping --" text = "After dividing the data into smaller buckets for each user in the empathy map process - I decided to build Affinity map and categorize and sort the key findings. To reach the user end goals - Divided the Data into 7 Buckets and then built 2 buckets out of them - (Pains and Gains)" img = "./img/Affinity_Map.png"/>
            <AffinityFinding/>
            <Personas/>
            <Ideation/>
            <Design/>
            <FinalDesign/>
            <FinalDesigns/>
            <Next/>
        </Container>
    )
}

export default IntLTracker

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    span{
        color:  rgba(0, 0, 0, 0.58);
        font-weight: 700;
    }
`
const Name = styled.div`
    font-size: 3rem;
    font-weight: 700;
    color: #2A8BF2;
`

const Image = styled.img`
`
const Text = styled.div`
    font-weight: 900;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 30px;
    gap: 10px;
`

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`


