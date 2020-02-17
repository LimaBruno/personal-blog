import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: #8899a6;
  display: flex;
  text-decoration: none;
  
  &:hover {
    color: #1fa1f2;
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid #38444d;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
`
/*Background vai receber na variavel "props" a propriedade definida chamada "background" 
da variavel de estilo "PostItemTag", ou seja dentro da tag <PostItem background="">. Essa tecnica chama "adereço - props"
(Passando propriedades) - Documentação - https://styled-components.com/docs/basics#adapting-based-on-props

No componetente PostItem, é usado a biblioteca "PropTypes" para validar o tipo de dado (int, bool....)
a variavel background "não é obritário" informar. Então a variavel background de estilo é tratada ou seja
se informar o background "coloca a cor informada" se não será a cor definida "#1fa1f2"
*/

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => props.background ? props.background : '#1fa1f2' };
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`