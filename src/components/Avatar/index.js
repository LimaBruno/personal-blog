import React from "react"
import { useStaticQuery, graphql } from "gatsby" // criar querys e não fixo
import Img from "gatsby-image" // importando a imagem da biblioteca gatsby-image



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
   return <Img fixed={avatarImage.childImageSharp.fixed} alt="Foto do Bruno Lima" title="Bruno Lima" />

}

export default Avatar