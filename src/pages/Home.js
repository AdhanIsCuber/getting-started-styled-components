import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Navbar } from '../components/molecules'
import { PostCardList } from '../components/organisms'
import { colors } from '../components/variables'
import { Container } from '../components/atoms';

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

class Home extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Navbar />
        <Container>
          <PostCardList />
        </Container>
      </div>
    )
  }
}

export default Home