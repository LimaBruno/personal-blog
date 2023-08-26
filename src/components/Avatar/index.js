import React from "react"
import { useStaticQuery, graphql } from "gatsby"


import * as S from "./styled"

const Avatar = () => {
 const { avatarImage } = useStaticQuery(graphql`
  query {
   avatarImage: file(relativePath: { eq: "bruno-cesar-lima-profile.png" }){
    childImageSharp {
     gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
    }
   }
  }
 `)

 return <S.AvatarWrapper image={avatarImage.childImageSharp.gatsbyImageData} alt="Foto do Bruno Lima" />

}

export default Avatar