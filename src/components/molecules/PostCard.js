import React from 'react'
import styled from 'styled-components'
import { Wrapper, Subtitle, Text } from '../atoms'
import { colors, shadows } from '../variables'

const PostCardWrapper = styled(Wrapper)`
  width: 100%;
  box-shadow: ${shadows.idle};
  border-radius: 16px;
  background-color: ${colors.white};
  overflow: hidden;
  margin-bottom: 24px;
  &:hover {
    box-shadow: ${shadows.focus};
  }
`
const PostCaptionWrapper = styled(Wrapper)`
  padding: 16px 24px;
`
const Image = styled.img`
  width: 100%;
`

const PostCard = ({data: {id, name, caption, url}}) => (
  <PostCardWrapper key={id}>
    <Image src={url} />
    <PostCaptionWrapper>
      <Subtitle>{name}</Subtitle>
      <Text>{caption}</Text>
    </PostCaptionWrapper>
  </PostCardWrapper>
) 

export default PostCard