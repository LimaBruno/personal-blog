import React from "react"
//import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import propTypes from "prop-types"

import * as S from "./styled"

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage}) => (
    <S.PaginationWrapper>
        { !isFirst && <AniLink to={ prevPage } cover direction="left" bg="#16202c" duration={0.6} title="Página anterior">← Página anterior</AniLink> }

        <p>{ currentPage } de { numPages }</p>

        { !isLast && <AniLink to={ nextPage } cover direction="right" bg="#16202c" duration={0.6} title="Próxima página">Próxima página →</AniLink> }
    </S.PaginationWrapper>
)
//validando que tipo é a variavel
Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.string,
    nextPage: propTypes.string,

}

export default Pagination