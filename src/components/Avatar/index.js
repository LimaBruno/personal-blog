import React from "react"
import { useStaticQuery, graphql } from "gatsby"


import { AvatarWrapper } from "./styled"

const Avatar = () => {
   const { avatarImage } = useStaticQuery(graphql`
        query {
            avatarImage: file(relativePath: { eq: "bruno-cesar-lima.png" }){
                childImageSharp {
                    fluid(maxWidth: 100, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG

                    }
                }

            }
        }
   `)
   
   return <AvatarWrapper fluid={avatarImage.childImageSharp.fluid} alt="Foto do Bruno Lima"/>

}

export default Avatar