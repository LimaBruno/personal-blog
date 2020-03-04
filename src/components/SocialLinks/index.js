import React from "react"

import Icons from "./icons" //Componente de icones
import links from "./content" // Componente de links

import * as S from "./styled" // Importando todos os estilos definidos
//SocialLinks esta sendo importada para o sidebar
const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {/* Percorrendo o array definido no content "links" com a função map
       e jogando os valores na variavel "link". A função "map" ela retorna*/}
      {
        links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink
              href={link.url}
              alt={"Icone do " + link.label}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks