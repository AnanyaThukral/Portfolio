import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem.js'

const Header = () => {
    return (
        <Container>
            <Logo></Logo>
            <Menu>
                <MenuItem item = "projects"/>
                <MenuItem item = "about"/>
                <MenuItem item = "resume"/>
            </Menu>
        </Container>
    )
}

export default Header

const Container = styled.div``

const Logo = styled.img``

const Menu = styled.div``