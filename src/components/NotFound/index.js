import React from "react"

import * as S from "./styled"

const NotFound = () => (
    <>
        <h1>Error 404</h1>
        <p>Ops... Esta página não foi encontrada! <span role="img" aria-label="emoticon triste">😥</span></p>
        <S.BackgroundImage/>       
    </>
)

export default NotFound