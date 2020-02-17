import React from "react"
import PropTypes from "prop-types" //Proptypes serve para validar o tipo de valor que será recebido ex(string, bool, int ...)

import * as S from "./styled"
/*
O PostItem vai receber valores nas variaveis definido na "função" e depois "alimentar os dados"
*/
const PostItem = ({slug, background, category, date, timeToRead, title, description}) => (
    <S.PostItemLink to={ slug }>
        <S.PostItemWrapper>
            <S.PostItemTag background={ background }>
                {category}
            </S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>{ date } - { timeToRead }</S.PostItemDate>
                <S.PostItemTitle>{ title }</S.PostItemTitle>
                <S.PostItemDescription>
                   { description }
                </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

/*
Chamando a classe com as propriedades definidas "PostItem" e chamando a biblioteca "PropTypes"
para validar os tipos dos dados ".propTypes" em forma de objeto.
*/
PostItem.propTypes = {
    //Nome da variavel: Chamando a propriedade.TipoDoVariavel.É obgrigatório
    slug: PropTypes.string.isRequired,
    /*Nome da variavel background: Chamando a propriedade.TipoDoVariavel.NÃO É obgrigatório
    Neste caso que "não é obrigatório" existe uma condição ternario no "estilo" para caso
    não informar o valor do background! 
    */
    background: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

}
export default PostItem