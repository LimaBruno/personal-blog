/* https://styled-icons.js.org/

1º Instalar no projeto

npm install styled-icons --save


2º - Procurar o icone no site

- Quando ciclar no icone será copiado o endereço para importar no projeto 
exemplo: "styled-icons/boxicons-logos/Github"


- Importar pra dentro do projeto informando o caminho

import { Github } from "styled-icons/boxicons-logos/Github"
*/

import { Github } from "styled-icons/boxicons-logos/Github"
import { Twitter } from "styled-icons/boxicons-logos/Twitter"
import { Youtube } from "styled-icons/boxicons-logos/Youtube"
import { Unsplash } from "styled-icons/boxicons-logos/Unsplash"
import { Instagram } from "styled-icons/boxicons-logos/Instagram"

const Icons = {
  Github,
  Twitter,
  Youtube,
  Unsplash,
  Instagram,
}

export default Icons