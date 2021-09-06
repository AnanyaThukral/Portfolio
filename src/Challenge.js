import React from 'react'
import styled from 'styled-components'

const Challenge = () => {
    return (
        <Container>
            <span>the challenge -- </span>
                <Description>
                    <Intro>Every year 100,000+ International students come to Canada from more than 200+ countries with a dream to study and eventually work and become the permanent resident of Canada. To be able to work they must hold a work permit after graduation. To Attain a Work Permit the student must remain eligible and meet all the work permit requirements through out their <Bold>entire course of studies.</Bold></Intro>
                    <Brief>
                        Vast majority of International students are unaware of what's needed and required to be eligible to attain a work permit in Canada after graduation. They fail to meet their requirements as a student and have to face consequences while looking for a job in Canada. Most of these requirements want students to maintain a <Bold>Full time status in each semester through out their degree </Bold> and if they fail to do so - they might not be eligible for a work permit. As a result, they either have to leave the country or pursue one more degree in Canada. Therefore, it has become very significant to educate and provide students a platform to gain immigration related knowledge as early as possible.
                    </Brief>
                    <ProblemStatement>How might we keep International students on track with their <Bold>immigration requirements</Bold> and <Bold>work permit eligibility?</Bold> 
                    </ProblemStatement>
                </Description>
        </Container>
    )
}

export default Challenge

const Container = styled.div`
    margin-top: 20px;
    /* min-width: 1100px; */
    color: #14213D;
    span{
        font-size: 1.5rem;
    }
`

const ProblemStatement = styled.div`
    color: rgba(0, 0, 0, 0.58);
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1.2rem;
    margin: 10px 0;
`

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`

const Description = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Intro = styled.div``

const Brief = styled.div``

