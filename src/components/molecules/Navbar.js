import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Wrapper, Container, Brand } from '../atoms'
import { colors, shadows } from '../variables'
import rocket from '../../assets/rocket.png'
import profile from '../../assets/user.svg'

const NavbarWrapper = styled(Wrapper)`
  width: 100%;
  height: 64px;
  background-color: ${colors.primary};
  box-shadow: ${shadows.focus};
  z-index: 1;
  position: fixed;
  top: 0;
  padding: 8px 16px;
  margin: 0 auto;
`

const Logo = styled.img`
  object-fit: contain;
  height: 48px;
`

const Icon = styled.img`
  width: ${({ size }) => size || undefined};
  height: ${({ size }) => size || undefined};
`

const NavbarItems = styled(Wrapper)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Anchor = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  &:hover {
    background-color: ${colors.primaryDark};
  }
`

const Navbar = () => (
  <NavbarWrapper>
    <Container>
      <NavbarItems>
        <Logo src={rocket} />
        <Brand>Rocket</Brand>
        <Anchor to="/about" >
          <Icon size="36px" src={profile} />
        </Anchor>
      </NavbarItems>
    </Container>
  </NavbarWrapper>
)

export default Navbar