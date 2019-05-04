import styled from 'styled-components'
import { Brand, Title, Subtitle, Text } from './Typography'
import { Button, OutlineButton } from './Button'

const Wrapper = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || undefined};
  align-items: ${({ alignItems }) => alignItems || undefined};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column' };
`

const Container = styled.div`
  margin: 0 auto;
  width: inherit;
  max-width: 640px;
  @media (max-width: 768px) {
    max-width: 480px;
  }
`

export {
  Wrapper,
  Container,
  Brand,
  Title,
  Subtitle,
  Text,
  Button,
  OutlineButton
}