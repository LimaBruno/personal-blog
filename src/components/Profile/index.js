import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"

import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription
} from "./styled"

const Profile = () => {
    const {
        site: {
            siteMetadata: {title, position, authorDescription},
        },
    } = useStaticQuery(graphql`
            query MyQuery {
                site {
                    siteMetadata {
                        title
                        position
                        authorDescription
                    }
                }
            }       
    
        `)
    return(
        <ProfileWrapper>
            <ProfileLink to="/" cover direction="left" bg="var(--background)" duration={0.6}>
                <Avatar />
                <ProfileAuthor>
                    {title}
                    <ProfilePosition>{position}</ProfilePosition>
                </ProfileAuthor>                
            </ProfileLink>
            <ProfileDescription>{authorDescription}</ProfileDescription>
        </ProfileWrapper>
    )
}

export default Profile