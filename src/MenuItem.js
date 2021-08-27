import React from 'react'
import styled from 'styled-components'

const MenuItem = ({item}) => {
    return (
        <Container>
            <div>{item}</div>
        </Container>
    )
}

export default MenuItem

const Container = styled.div``