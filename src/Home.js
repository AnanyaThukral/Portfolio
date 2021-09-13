import React from 'react'
import styled from 'styled-components'
import Projects from './Projects'
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <Container>
            <Heading>
                hello & namaste! i'm <Name> Ananya 🙏</Name> 
            </Heading>
            <SubHeading>
                {/* I <Name>design </Name>, <Name>code</Name> & listen to <Name>lofi music</Name> */}
                <Typewriter 
                        options={{
                            autoStart:true,
                            loop:true,
                            delay:40,
                            strings:[
                                "I design, code & listen to lofi music."
                            ]
                        }}
                />
            </SubHeading>
            <Text>
                I’m passionate about the crossroads between technology, people’s behaviour and to create interfaces that reflects the importance of <Bold>accessibilty</Bold> and <Bold>diversity</Bold>.
            </Text>
            <Work>
                Currently studying Computer Science  <University>@University of Guelph</University>
            </Work>
            <Projects/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    align-items: center;
    margin: 0 auto;
    margin-top: 120px;
    gap: 10px;
`

const Heading = styled.div`
    color: #14213D;
    font-size: 2.0rem;
    font-weight: 600;
    letter-spacing: 1px;
`

const SubHeading = styled.div`
     letter-spacing: 1px;
     font-style: italic;
`

const Name = styled.div`
    display: inline;
    color:#2A8BF2 ;
    letter-spacing: 1px;
`

const Text = styled.div`
    color: #14213D;
`

const Bold = styled.span`
    font-weight:bold;
`

const Work = styled.div`
`

const University = styled.span`
    color: #2A8BF2;
`

