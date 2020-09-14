import styled from "styled-components"
import media from "styled-media-query"

export const Title = styled.h2`
  
`

export const Icons = styled.dl`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0;

  ${media.lessThan("large")`
    justify-content: center;
  `}
`