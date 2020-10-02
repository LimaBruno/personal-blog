import styled from "styled-components"
import media from "styled-media-query"

import transitions from '../../styles/transitions'

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
  transition: ${transitions.ALL};
  ${media.lessThan("large")`
    top: 72px;
    bottom: 0;
  `}
`