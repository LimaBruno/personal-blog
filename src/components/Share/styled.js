import styled from "styled-components"
import media from "styled-media-query"

export const Title = styled.h2`
  
`

export const Icons = styled.dl`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  ${media.lessThan("large")`
    justify-content: center;
  `}
`