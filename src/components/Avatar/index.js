import React from "react"
import { useStaticQuery, graphql } from "gatsby"


import * as S from "./styled"

const Avatar = () => {
   const { avatarImage } = useStaticQuery(graphql`
        query {
            avatarImage: file(relativePath: { eq: "bruno-cesar-lima.jpg" }){
                childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG

                    }
                }

            }
        }
   `)
   
   return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} alt="Foto do Bruno Lima"/>

}

export default Avatar