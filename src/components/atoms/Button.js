import styled from 'styled-components'
import { shadows, colors } from '../variables'

const OutlineButton = styled.button`
  margin: 8px;
  min-width: 160px;
  height: 42px;
  border-radius: ${props => props.rounded ? '42px' : '0'};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${shadows.idle};
  border: 1px solid ${colors.primary};
  outline: none;
  &:active {
    box-shadow: ${shadows.focus};
  }
`

const defaultButton = styled.button`
  min-width: 160px;
  height: 42px;
  border-radius: 8px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${shadows.idle};
  outline: none;
  &:active {
    box-shadow: ${shadows.focus};
  }
`

const Button = styled(defaultButton)`
  margin: ${({ margin }) => margin || '8px'};
  color: ${props => props.inverted ? colors.primary : colors.white };
  background-color: ${props => props.inverted ? colors.white : colors.primary };
  &:active {
    background-color: ${props => props.inverted ? colors.white : colors.primaryDark };
  }
`


export {
  Button,
  OutlineButton
}