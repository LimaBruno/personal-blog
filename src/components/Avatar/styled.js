import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"

export const AvatarWrapper = styled(Img)`
    border: 2px solid var(--profileColor);
    border-radius: 10%;
    height: 5.5rem;    
    width: 5.5rem;
    margin: auto;

    ${media.lessThan("large")`
        height: 2.5rem;
        width: 2.5rem;
    `}

    ${media.between("small","medium")`
        height: 2.5rem;
        width: 2.5rem;
    `}
`