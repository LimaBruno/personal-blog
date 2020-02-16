import React from "react"

import * as S from "./styled"

const PostItem = () => (
    <S.PostItemLink to="/slug/">
        <S.PostItemWrapper>
            <S.PostItemTag background="#47650b">
                Misc
            </S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>16 de Fevereiro de 2020 - 4 Minutos de leitura</S.PostItemDate>
                <S.PostItemTitle>Diga não ao Medium</S.PostItemTitle>
                <S.PostItemDescription>
                    Algumas razões para você ter sua própria plataforma ao invés de 
                    soluções como o Medium.
                </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem