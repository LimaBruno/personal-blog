import styled from "styled-components"
import media from "styled-media-query"

import { Link } from "gatsby"

//definido o background de cada post
export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  
  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`
/*
3 - Efeito Grid
flex-direction: column; = Vai ficar em coluna e não lado a lado.
*/
export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;

    ${media.lessThan("large")`
      align-items: flex-start;
      flex-direction: column;
      padding: 2rem 1rem;
    `}
  }
`
/*Background vai receber na variavel "props" a propriedade definida chamada "background" 
da variavel de estilo "PostItemTag", ou seja dentro da tag <PostItem background="">. Essa tecnica chama "adereço - props"
(Passando propriedades) - Documentação - https://styled-components.com/docs/basics#adapting-based-on-props

No componetente PostItem, é usado a biblioteca "PropTypes" para validar o tipo de dado (int, bool....)
a variavel background "não é obritário" informar. Então a variavel background de estilo é tratada ou seja
se informar o background "coloca a cor informada" se não será a cor definida "var(--highlight)"
*/

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => props.background ? props.background : 'var(--highlight)' };
  border-radius: 50%;
  color: var(--postColor);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`
//Removendo os espaços do titulo da grid
export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`