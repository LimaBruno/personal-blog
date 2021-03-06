import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Calendar } from "@styled-icons/boxicons-solid/Calendar"
import { Time } from "@styled-icons/boxicons-regular/Time"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: color 0.5s;  
  &:hover {
    color: var(--highlight);    
  }
`
export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 2px solid var(--borders);
  display: flex;
  padding: 1.5rem;
  width: 100%;

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const PostItemTag = styled.div`
  color: var(--white);
  align-items: center;
  background: ${props => props.background ? props.background : 'var(--highlight)' };
  border-radius: 10%;
  border: 2px solid var(--profileColor);  
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 60px;
  min-width: 70px;
  text-transform: uppercase;

  ${media.lessThan("large")`
    border-radius: 12%;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .3rem .5rem;
    margin-bottom: .7rem;
  `}

`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2;
`

export const CalendarIcon = styled(Calendar)`
  width: 15px;
  margin: -3px 0 0 0;  
`
export const TimeIcon = styled(Time)`
  width: 15px;
  margin: -3px 0 0 0;  
`