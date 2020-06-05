import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const MenuLinksWrapper = styled.nav`
    ${media.lessThan("large")`
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100vh;
        width: 100%;
        background: #d7d7d7;
        position: absolute;
        top: 4.2rem;
        right: 0;
        transition: transform 300ms;
        transform: ${({nav}) => (nav ? "translateX(0)" : "translateX(100%)")};
    
        ul {
        list-style-type: none;
        }
    
        li {
        margin-top: 1rem;
        }
    
        a {
        text-decoration: none;
        color: #000;
        font-size: 1.5rem;
    
        :hover {
            color: #6ab4ff;
            transition: color 300ms;
        }
        }
    `}
`

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
`

export const MenuLinksItem = styled.li`
    padding: 0.5rem 0;
  
    .active {
      color: var(--highlight);
      text-decoration: underline;
    }
`

export const MenuLinksLink = styled(AniLink)`
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;
    
    &:hover {
        color: var(--highlight);
    }
`