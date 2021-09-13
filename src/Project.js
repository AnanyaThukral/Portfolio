import React from 'react'
import styled from 'styled-components'
import TagItem from './TagItem'

const Project = ({onClick, image, title, text, color, tags}) => {
    return (
        <Container onClick = {onClick} style = {{background: color}}>
            <Image src = {image}/>
            <Title>
                {title}
            </Title>
            <Text>
                {text}
            </Text>
            { <Tag>
                {
                    tags.map(tag=>(
                        <TagItem tag = {tag}/>
                    ))
                }
            </Tag> }
        </Container>
    )
}

export default Project

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    color: white;
    border-radius: 8px;
    padding-top: 30px;
    align-items: center;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.2s;
        :hover {
            box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
            transform: scale(1.01);
        }
    cursor: pointer;
    @media (max-width: 1300px){
       height: 420px;
       padding: 30px 20px
    }
    
`

const Image = styled.img`
    height: 300px;
    @media (max-width: 1300px){
       height: 200px;
    }
`

const Title = styled.div`
    font-size: 2rem;
    font-weight: 700;
    @media (max-width: 1300px){
     font-size: 1.5rem;
    }
`

const Text = styled.text`
    font-size: 1rem;
    text-align:center;
    @media (max-width: 1300px){
     font-size: 0.9rem;
    }
`

const Tag = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 15px;
    @media (max-width: 1300px){
        flex-wrap: wrap;
        justify-content: center;
    }
`