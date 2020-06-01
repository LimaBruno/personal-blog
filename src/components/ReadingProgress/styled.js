import styled from "styled-components"
import media from "styled-media-query"

export const ReadingProgressBar = styled.div`
  position: fixed;
  height: 5px;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin-bottom: 0;
  background-color: var(--progress-bar);
  display: block;
  width: ${props => props.width};
  z-index: 9999;
  ${media.lessThan("large")`
    top: 68px;
    bottom: 0;
  `}
`