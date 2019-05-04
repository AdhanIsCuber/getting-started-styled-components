import styled from 'styled-components'
import { colors } from '../variables' 

export const Title = styled.h1`
  color: ${({ color }) => color || colors.primaryDark };
  font-size: ${({ fontSize }) => fontSize || '24px'};
  margin:${({ margin }) => margin || 0};
`

export const Brand = styled(Title)`
  font-size: ${({ fontSize }) => fontSize || '32px'};
  text-transform: uppercase;
`

export const Subtitle = styled.h3`
  color: ${({ color }) => color || colors.primaryDark };
  font-size: ${({ fontSize }) => fontSize || '16px'};
  margin: 0 0 8px 0;
`

export const Text = styled.p`
  color: ${({ color }) => color || colors.primaryDark };
  font-size: ${({ fontSize }) => fontSize || '14px'};
  margin: 0 0 8px 0;
`