import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem.js'
import {
    NavLink as Link
} from "react-router-dom"

const Header = () => {
    return (
        <Container>
            <NavLink to = "/">
                <Logo>at</Logo>
            </NavLink>
            <Menu>
                <NavLink to = "/home" className = "main-nav">
                    <MenuItem item = "projects"/>
                </NavLink>
                <NavLink to = "/about">
                    <MenuItem item = "about"/>
                </NavLink>
                <MenuItem item = "resume"/>
            </Menu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    font-weight: 700;
    font-size: 2.4rem;
    color: #14213D;
    cursor: pointer;
    :hover{
        color: #2A8BF2;
    }
`

const Menu = styled.div`
    display: flex;
    gap: 40px;
    color: #14213D;
    font-weight: 500;
    font-size: 1rem;
`
const NavLink = styled(Link)`
    color: #14213D;
    text-decoration:none;
    &.active{
        color: #2A8BF2;
    }
`