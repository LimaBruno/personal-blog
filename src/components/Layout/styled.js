import styled from "styled-components" //Importando o Stlyed-components


// Layot total
export const LayoutWrapper = styled.section`
  display: flex;  
`


//Layout Principal
/*
1º - Efeito grid

No layout main, onde mostra os os posts:

body#grid & {
    grid-template-areas: //definindo as areas do grid
    "posts"
    "pagination";
  }

  São dividas em "dois" grids "posts" e "pagination", se fosse um ao lado do outro
  iria ficar um ao lado do outro desta forma, tudo na mesma aspas: "posts | pagination"
  body#grid & = Quer dizer que é filho do LayoutMain
  & body#grid = Quer dizer que junto ao LayoutouMain


*/
export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  body#grid & {
    grid-template-areas:
    "posts"
    "pagination";
  }
`