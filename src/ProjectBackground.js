import React from 'react'
import styled from 'styled-components'
import AdditionalProject from './AdditionalProject'

const ProjectBackground = () => {
    return (
        <Container>
            <span>project 01 --</span>
            <ProjectContainer>
                <DescriptionContainer>
                    <Description>
                        The goal was to create a visualization for the product team that can be used in the PMO  meetings to reflect on the team performance based on <Bold>how timely the tickets are being resolved and whether these tickets with certain severities are resolved within their target days</Bold>.
                    </Description>
                    <Description>
                        My approach to this project started with two questions - <Bold>what can be done and what all resources are available to me to make this possible?</Bold>
                    </Description>
                    <Description>
                        After brainstorming and researching articles online I came across the term <Bold>"Hit Rate"</Bold>. The Hit Rate was right performance tool for me as it describes the success rate of an effort. Besides this, the data for the tickets captured from <Bold>Jira and stored in the database</Bold> already had specific fields that I needed for hit rate calculation. Therefore, I saved time and effort to write extra lines of code and reused the already available dataset to do Hit Rate Calculation. 
                    </Description>
                        <ImageContainer>
                            <Image src = "./img/NokiaSLA3.png" />  
                        </ImageContainer>
                    <Description >
                        After reusing columns from <Bold>MySQL dataset</Bold>. I came up with the logic to find out the specific tickets within each severity that were resolved within the specific target days.  I made two visualizations in <Bold>PowerBI (Tabular and Graphical view).</Bold>
                    </Description>
                    <ImageContainer>
                        <Image style = {{marginLeft : "70px"}} src = "./img/NokiaSLA.png"/>
                    </ImageContainer>
                    <ImageContainer>
                        <Image src = "./img/NokiaSLA2.png"/>
                    </ImageContainer>
                </DescriptionContainer>
            </ProjectContainer>
            <AdditionalProjects>
            <span>additional projects--</span>
                <AdditionalProject/>
            </AdditionalProjects>
            <span>my take away from this internship --</span>
            <DescriptionContainer>
                <Description>
                    The most important lesson that I have learnt during my time at Nokia is - <Bold>no matter how big or difficult the project or problem is - if you break it into pieces and try to work with it in chunks - you can definitely solve it.</Bold> I have worked with brand new tools in this internship which i have never used in school or other jobs and hence I have realized that it's not about the coding language you choose or the tool you use - <Bold>it's all about problem solving and then finding the right tool and technology to solve that problem.</Bold>
                </Description>
            </DescriptionContainer>
        </Container>
    )
}

export default ProjectBackground

const Container = styled.div`
    margin: 40px 0;
    min-width: 1100px;
    color: #14213D;
    span{
        font-size: 2.0rem;
        color:  rgba(0, 0, 0, 0.58);
        font-weight: 700;
    }
    @media (max-width: 1300px){
        min-width: 900px;
    }
`

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Description = styled.div``

const Image = styled.img`  
    height: 100%;
`

const ImageContainer = styled.div`
   
`

const DescriptionContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`

const AdditionalProjects = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
`