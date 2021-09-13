import React from 'react'
import styled from 'styled-components'
import Data from './Data'


const DataAnalysis = () => {
    return (
        <Container>
            <span>data synthesis --</span>
            <Text>After conducting the primary research, I generated a substantial amount of data points to
                synthesize. The general insights extrapolated from these data points helped guide the direction for the next steps towards ideation. 
            </Text>
            <DataContainer>
                <Data img = "./img/Data_Points.png" text = "184 DataPoints"/>
                <Data img = "./img/data.jpg" text = "8  Clusters"/>
            </DataContainer>
        </Container>
    )
}

export default DataAnalysis

const Container = styled.div`
    margin-bottom: 40px 0;
    min-width: 1100px;
    color: #14213D;
    span{
        font-size: 1.7rem;
    }
    @media (max-width: 1300px){
        min-width: 900px;
    }
`

const Text = styled.div`
    margin-top: 10px;
`

const DataContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 40px 0;
    border-radius: 5px;
`