import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  // Buttons
  FacebookShareButton as FacebookButton,
  LinkedinShareButton as LinkedinButton,
  TwitterShareButton as TwitterButton,
  WhatsappShareButton as WhatsappButton,
  TelegramShareButton as TelegramButton,

  // Icons
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share"

import {Icons, Title } from "./styled"

// All social share
const social = [
  { Component: TwitterButton, Icon: TwitterIcon },
  { Component: FacebookButton, Icon: FacebookIcon },
  { Component: WhatsappButton, Icon: WhatsappIcon },
  { Component: TelegramButton, Icon: TelegramIcon },
  { Component: LinkedinButton, Icon: LinkedinIcon },
];

const Share = ({ title, slug }) => {
  const {
    site: { siteMetadata: data }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            siteUrl
          }
        }
      }
    `
  )

  const { siteUrl, author } = data
  const url = `${siteUrl}${slug}`

  return (
    <> 
      <Title>Compartilhe:</Title>     
      <Icons>        
        {social.map(({ Component, Icon }, index) => (
          <dd key={`share_${index}`}>
            <Component url={url} title={`${title} por ${author}`}>
              <Icon size={38} round />
            </Component>
          </dd>
        ))}
      </Icons>
    </>
  )
}

export default Share