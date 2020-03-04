import React from "react"
import { useStaticQuery, graphql } from "gatsby" // criar querys e não fixo
//import { Link } from "gatsby"
//import Img from "gatsby-image" importando a imagem da biblioteca gatsby-image - não precisa mais porque está chamando tudo do styled.js do avatar

import * as S from "./styled"
// imagem pode ser fixed (valor fixo) ou fluid (valor não fixo - usar para telas responsivel) 
// Existe outros estilos "...GatsbyImageSharpFixed" 
const Avatar = () => {
   const { avatarImage } = useStaticQuery(graphql`
        query {
            avatarImage: file(relativePath: { eq: "profile-photo.png" }){
                childImageSharp {
                    fluid(maxWidth: 60) {
                        ...GatsbyImageSharpFluid

                    }
                }

            }
        }
   `)
   {/* Retornando do styled.js*/}
   return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} alt="Foto do Bruno Lima" title="Bruno Lima" />

}

export default Avatar