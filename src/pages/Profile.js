import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, OutlineButton } from '../components/atoms'
import { colors } from '../components/variables'

const Section = styled.div`
  padding: 32px;
`

const ButtonLink = styled(Link)`
  min-width: 160px;
  height: 42px;
  border-radius: 8px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.primary};
`


class Profile extends React.Component {
  render() {
    return (
      <div>
        <div style={{ padding: '32px' }}>
          <Section>
            <h4>Adapting based on props</h4>
            <OutlineButton>Rectangle</OutlineButton>
            <OutlineButton rounded>Rounded Button</OutlineButton>
          </Section>
          <hr />
          <Section>
            <h4>Extending Styles</h4>
            <Button>MAN</Button>
            <Button inverted>WOMAN</Button>
            <br />
            <Button as="a" href="/">INI LINK</Button>
          </Section>
          <hr />
          <Section>
            <h4>Styling any components</h4>
            <ButtonLink to="/" target="_blank" >GO TO HOME</ButtonLink>
          </Section>
        </div>
      </div>
    )
  }
}

export default Profile


