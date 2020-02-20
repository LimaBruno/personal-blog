import React from "react"
import { Link } from "gatsby"
import propTypes from "prop-types"

import * as S from "./styled"

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage}) => (
    <S.PaginationWrapper>
        { !isFirst && <Link to={ prevPage } title="Página anterior">← Página anterior</Link> }

        <p>{ currentPage } de { numPages }</p>

        { !isLast && <Link to={ nextPage } title="Próxima página">Próxima página →</Link> }
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