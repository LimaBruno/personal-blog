import React from "react"
import { useStaticQuery, graphql } from "gatsby" // criar querys e não fixo
//import Img from "gatsby-image" importando a imagem da biblioteca gatsby-image - não precisa mais porque está chamando tudo do styled.js do avatar

import * as S from "./styled"

// Existe outros estilos "...GatsbyImageSharpFixed"
const Avatar = () => {
   const { avatarImage } = useStaticQuery(graphql`
        query {
            avatarImage: file(relativePath: { eq: "profile-photo.png" }){
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed

                    }
                }

            }
        }
   `)
   {/* Retornando do styled.js*/}
   return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} alt="Foto do Bruno Lima" title="Bruno Lima" />

}

export default Avatar