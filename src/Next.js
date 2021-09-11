import React from 'react'
import styled from 'styled-components'

const Next = () => {
    return (
        <Container>
            <span>what's next?</span>
            <TextContainer>
                <Text>The vision of this idea is to have a <Bold>Advisor Dashboard</Bold> as well along with a <Bold>Student Dashboard</Bold>. The reason being - there was a concern raised by the international advisors while sharing the idea with them that as we are dealing with immigration that could potentially result in sharing lot of confidential information between students.</Text> 
                <Text>Therefore, I also want to include an Advisor dashboard which can give Advisors administrative rights. Further, I would like to <Bold>explore more ways to make this application secure.</Bold> Additionally, Advisors can have a broader view about the goals of students and their needs - based on that they can organize more events and workshops specific to those topics. </Text>
                <Text>Next milestone for me is <Bold>Usability Testing</Bold> with the initial Prototype. As this project and idea has been approved by the school of computer science at Guelph. I will be doing usability testing under the supervision of HCI faculty in F21 semester.</Text>
                <Text>After usability Testing and reflections on the design - I will be developing the <Bold>frontend of the website with latest, fast, scalable and simple Javascript framework - React JS.</Bold></Text>
                <Text>In preparation of working with React JS - I have cloned 3 big and popular applicaions like LinkedIn (Feed Feature), Slack (Chat & Channel Feature), Amazon (Working with Firebase and data). These designs and understanding how they have been implemented inspired me to give reality to my project.</Text>
            </TextContainer>
        </Container>
    )
}

export default Next

const Container = styled.div`
    margin: 40px 0;
    min-width: 1100px;
    color: #14213D;
    span{
        font-size: 1.7rem;
    }
`

const Text = styled.div``

const TextContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`