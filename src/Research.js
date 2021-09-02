import React from 'react'
import styled from 'styled-components'

const Research = () => {
    return (
        <Container>
            <span>Primary Research -- </span>
            <Text>
                Conducted a <Bold> Survey with 48 participants and 7 virtual user interviews</Bold>. The interviews consisted of students from different years including (students in <Bold>1st year and students going into final year of studies)</Bold>. 
            </Text>
            <ResearchContainer>
                <SurveyContainer>
                <span><Bold>Survey Goals</Bold></span>
                <p>What is their current <Bold>year of study?</Bold></p>
                <p>Have they done any <Bold>Part-time</Bold> study semester?</p>
                <p>How many students know the <Bold>eligibility requirements</Bold> for work permit?</p>
                <p>What percentage of students are <Bold>willing to apply</Bold> for a work permit after graduation?</p>
                <p></p>
                </SurveyContainer>
                <SurveyContainer>
                    <span><Bold>Interview Goals</Bold></span>
                    <p>Are they aware of <Bold>negative imapacts of Part time</Bold> studies as an International Student?</p>
                    <p>Have they <Bold>dropped</Bold> any courses that resulted in <Bold>Part time</Bold> studies?</p>
                    <p>Did they reach out to <Bold>Program Advisor or International Advisor</Bold> before dropping courses?</p>    
                    <p>How many students are <Bold>satisfied</Bold> with the information received by the <Bold>University International Advisors on immigration?</Bold></p>
                </SurveyContainer>
            </ResearchContainer>
            <ResponseContainer>
                <SurveyContainer>
                <span><Bold>Key Insights</Bold></span>
                    <ul>
                        <li><p>48 + 8 = <Bold>56%</Bold> Students are <Bold>unsure</Bold> of the work permit eligibility requirements.</p></li>
                        <li><p>Around <Bold>48%</Bold> Students <Bold>want</Bold> to apply work permit right after graduation</p></li>
                        <li><p>They are <Bold>not actively</Bold> attending any info sessions organized by International Advisors.</p></li>
                        <li><p>Majority of them are unsure how <Bold>Full Time/Part Time status</Bold> could impact their eligibility.</p></li>
                        <li><p>Students often reach out to program advisor before dropping the courses but <Bold>Program Adviosors are not redirecting students to talk International Advisors about how dropping courses could impact their student status.</Bold></p></li>
                    </ul>
                </SurveyContainer>
            </ResponseContainer>
            
        </Container>
    )
}

export default Research

const Container = styled.div`
    margin: 40px 0;
    min-width: 1100px;
    color: #14213D;
    span{
        font-size: 1.5rem;
    }
`
const ResearchContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    gap: 50px;
    margin: 30px 0;
`

const Text = styled.div`
    margin-top: 10px;
`

const Bold = styled.text`
    font-weight: 900;
    color: #14213D;
`

const SurveyContainer = styled.div`
    background: rgba(255, 255, 255, 0.81);
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.58);
    font-weight: 600;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    ul{
       display: flex;
       flex-direction: column;
       gap: 20px;
       padding: 15px;
    }
`

const ResponseContainer = styled.div`
    display: flex;
    gap: 40px;
`

