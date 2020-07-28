import React from "react"

import links from "./content"

import {
    MenuLinksWrapper,
    MenuLinksList,
    MenuLinksItem,
    MenuLinksLink,

} from "./styled"

const MenuLinks = ({nav}) => (
    <MenuLinksWrapper nav={nav}> 
        <MenuLinksList>
            {links.map((link, i) => (
                <MenuLinksItem key={i}>
                    <MenuLinksLink cover direction="left" bg="var(--background)" duration={0.6} to={link.url} alt={link.label} activeClassName="active">
                        {link.label}
                    </MenuLinksLink>
                </MenuLinksItem>
            ))
            }
        </MenuLinksList>
    </MenuLinksWrapper>

)

export default MenuLinks