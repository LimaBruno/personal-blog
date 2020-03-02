import styled from "styled-components"

/*
2º - Efeito grid 

Limitando a quanitdade de colunas automaticamente,
grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
ou seja repete tudo "auto-fit", e define o tamanho minimo "380px" e o max "1fr" (1 fração da tela).
Se o espaço do ultimo post for menor que 380px ele vai passar o post para proxima linha e os demais que ficou
vai passar ser 1 fraçao cada um.

Para definir manualmente seria por exemplo:
grid-template-columns: 300px 300px 300px 200px (totalizando 4 colunas)

grid-gap = esta dando um espaço entre um post e o outro de "1px" e
adicionando um background-color para preencher a borda. Desta forma,

*/
export const ListWrapper = styled.section`
    body#grid & {
        background-color: var(--borders);
        border-bottom: 1px solid var(--borders);
        display: grid;
        grid-area: posts;
        grid-gap: 1px;
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    }

`