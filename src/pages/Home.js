import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Container, Brand } from '../components/atoms'
import { Navbar } from '../components/molecules'
import { colors, shadows } from '../components/variables'
import rocket from '../assets/rocket.png'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.background};
    box-sizing: border-box;
    font-family: 'Zilla Slab', serif;
  }
  #app {
    min-height: 100vh;
    width: 100%;
  }
`
const Logo = styled.img`
  object-fit: contain;
  height: 48px;
`

class Home extends React.Component {
  
  render() {
    return (
      <div>
        <GlobalStyles />
        <Navbar>
          <Container>
            <Logo src={rocket} />
            <Brand>Rocket</Brand>
          </Container>
        </Navbar>
        
      </div>
    )
  }
}

export default Home