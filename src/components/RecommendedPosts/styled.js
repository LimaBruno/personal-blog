import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const RecommendedWrapper = styled.section`
  font-weight: bold;
  border-bottom: 2px solid var(--borders);
  border-top: 2px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: var(--mediumBackground);
  color: var(--texts);
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    background: var(--recommendPost);
  }
  &.previous {
    border-right: 2px solid var(--borders);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`