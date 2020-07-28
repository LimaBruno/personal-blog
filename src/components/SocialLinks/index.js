import React from "react"

import Icons from "./icons"
import links from "./content"

import {
  SocialLinksWrapper,
  SocialLinksList,
  SocialLinksItem,
  SocialLinksLink,
  IconWrapper,
} from "./styled"

const SocialLinks = () => (
  <SocialLinksWrapper>
    <SocialLinksList>
      {
        links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <SocialLinksItem key={i}>
            <SocialLinksLink
              href={link.url}
              alt={"Icone do " + link.label}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </SocialLinksLink>
          </SocialLinksItem>
        )
      })}
    </SocialLinksList>
  </SocialLinksWrapper>
)

export default SocialLinks