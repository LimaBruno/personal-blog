import React from "react"   //1º - Parent

import links from "./content" // 2º - Componente

import * as S from "./styled" //3º - Estilo

const MenuLinks = () => (
    <S.MenuLinksWrapper> 
        <S.MenuLinksList>
            {/* Percorrendo dentro do array "links, em content" com a função Map
            e jogando os dados na variavel "link" e o indicie "i", nesse caso não vai
            retornar outros dados os icones do sociailinks */}
            {links.map((link, i) => (
                //Eslilo do "<li>" e passou o indice 
                <S.MenuLinksItem key={i}>
                    {/* Estilo do link "a href", quando ativo vai chamar a classe .active */}
                    <S.MenuLinksLink cover direction="left" bg="#16202c" duration={0.6} to={link.url} title={link.label} activeClassName="active">
                        {link.label}
                    </S.MenuLinksLink>
                </S.MenuLinksItem>
            ))
            }
        </S.MenuLinksList>
    </S.MenuLinksWrapper>

)

export default MenuLinks