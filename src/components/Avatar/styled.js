import styled from "styled-components"
import Img from "gatsby-image" // importando a imagem da biblioteca gatsby-image
/*
1º instalar o "styled-media-query" conforme a documentação

https://github.com/morajabi/styled-media-query

Existe 3 tipos de metodos

lessThan = (menor que)
greaterThan = (maior que)
between = (entre a condição x e a condição y)

*/
import media from "styled-media-query"

export const AvatarWrapper = styled(Img)`
    border-radius: 50%;
    height: 3.75rem;
    margin: auto;
    width: 3.75rem;

    ${media.lessThan("large")`
        height: 1.875rem;
        width: 1.875rem;
    `}
`