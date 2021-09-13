import React from 'react'
import styled from 'styled-components'
import Insights from './Insights.js'

const AffinityFinding = () => {
    return (
        <Container>
            <span>discovered key insights from Affinity Mapping --</span>
            <InsightContainer>
                <Insights text = "Students attend 1-2 sessions and then start skipping or leaving the information sessions organized by International Advisors"/>
                <Insights text = "A trend found that students only look for eligibility requirements when they are close to graduation (Final Year)."/>
                <Insights text = "Students ONLY consider reaching to International Advisors ONLY when they are stuck."/>
                <Insights text = "Upper Year students prefer doing their own research and applying for immigration than relying on Advisors - reason being not good experience with Advisors."/>
                <Insights text = "Students mostly reach to program advisors before dropping courses."/>
            </InsightContainer>
        </Container>
    )
}

export default AffinityFinding

const Container = styled.div`
    margin: 40px 0;
    min-width: 1100px;
    color: #14213D;
    span{
        font-size: 1.7rem;
    }
    @media (max-width: 1300px){
        min-width: 900px;
    }
`

const InsightContainer = styled.div`
    background: rgba(255, 255, 255, 0.81);
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.58);
    font-weight: 600;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`