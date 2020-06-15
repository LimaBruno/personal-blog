import styled from "styled-components"
import media from "styled-media-query"

export const BackgroundImage = styled.section`
    background-image: url("/assets/img/deckfail.png");
    background-repeat: no-repeat;
    background-size: 280px;
    height: 100vh;
    width: 100vw;
    ${media.lessThan("large")`
        background-position-x: center;
   `}
`