import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../atoms'
import { colors, shadows } from '../variables'

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

const Navbar = ({ children }) => (
  <NavbarWrapper>
    {children}
  </NavbarWrapper>
)

export default Navbar