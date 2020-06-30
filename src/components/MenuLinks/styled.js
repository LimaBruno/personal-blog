import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const MenuLinksWrapper = styled.nav`
    ${media.lessThan("large")`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 3.4rem;
        height: 100vh;
        width: 100%;
        background: var(--backgroundMoblie);
        border-top: 2px solid var(--borders);
        position: absolute;
        top: 4.5rem;
        right: 0;
        transition: transform 300ms;
        transform: ${({nav}) => (nav ? "translateX(0)" : "translateX(100%)")};
        
    `}
`

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;

    ${media.lessThan("large")`
        font-size: 1.8rem;            
    `}
`

export const MenuLinksItem = styled.li`
    padding: 0.8rem 0;
  
    .active {
      color: var(--linksGeneral);
      font-weight: 700;
      padding: 0.2rem;
      border-bottom: 2px dashed var(--linksGeneral);     
    }

    ${media.lessThan("large")`
        padding: 1rem 0;        
    `}
`

export const MenuLinksLink = styled(AniLink)`
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;
    
    &:hover {
        color: var(--highlight);
    }
`