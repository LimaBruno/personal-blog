import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import transitions from '../../styles/transitions'

export const MenuBarWrapper = styled.aside`
align-items: center;
background: var(--mediumBackground);
border-top: 2px solid var(--borders);
display: flex;
flex-direction: row;
width: 100vw;
justify-content: space-between;
padding: 0 0.6rem;
position: fixed;
left: 20rem;
bottom: 0;
  transition: ${transitions.ALL};

  ${media.lessThan("large")`
    justify-content: center;
    align-items:center;
    border-top: 2px solid var(--borders);
    bottom: 0;
    left:0;
    flex-direction: row;
    height: auto;    
    position: fixed;
    width: 100vw;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: row;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &.dark {
    color: #d4d400;
    &:hover {
      color: #e2e240;
    }
  }
  &.light {
    color: var(--highlight);
  }
  
  &:hover {
    color: var(--highlight);
    transition: 0.5s;
  }
  
  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }
  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`