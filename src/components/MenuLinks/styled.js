import styled from "styled-components"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
    font-size: 1.2 rem;
    font-weight: 300;
`

export const MenuLinksItem = styled.li`
    padding: 0.5 rem 0;
    
    .active {
        color: var(--highlight);
    }
`
//styled(Link) = Por causa do import "Link" do gatsby
export const MenuLinksLink = styled(Link)`
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;
    
    &:hover {
        color: var(--highlight);
    }
`