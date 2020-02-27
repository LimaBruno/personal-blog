/*Pasta chamada "utils" conforme a documentação
https://www.gatsbyjs.org/docs/adding-search-with-algolia/ */

//Renomeando a query para "posts"
//objectId = Pegando o "ID" de cada post, e atribuindo para objectId ou seja uma "alias"
//excerpt(pruneLength: 5000) = Buscar por um resumo do conteudo do post até 5000 caracteres. (importante limitar por causa da performance)

const postQuery = `{
    posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
      edges {
        node {
          objectID: id
          fields {
            slug
          }
          frontmatter {
            title
            category
            date_timestamp: date
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`
  //date_timestamp: parseInt = Convertendo para o formato "timestamp" do algolia
  const flatten = arr =>
    arr.map(({ node: { frontmatter, ...rest } }) => ({
      ...frontmatter,
      date_timestamp: parseInt(
        (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
      ),
      ...rest,
    }))
  //settings = Limitando por consulta 20 itens.
  const settings = { attributesToSnippet: [`excerpt:20`] }
  //transformer: São os dados que está sendo enviado para o site Algolia
  //indexName: Qual indicie vai receber os dados o nome deve ser igual foi criado o index no Algolia.com
  //query = selecionando a query
  const queries = [
    {
      query: postQuery,
      transformer: ({ data }) => flatten(data.posts.edges),
      indexName: `Posts`,
      settings,
    },
  ]
  
  module.exports = queries

//feita a configuração, devera o configurar o "gatsby-config.js"

/*
Após finalização das configurações do algolia, deverá rodar um "bulid"
o Algolia só funciona apenas com a build construido.

executar: "gatsby build"

Depois entrar no site do Algolia, será indexado os inidices, podendo realizar
pesquisa dentro do algolia.

============== CONFIGURAÇÃO BACKEND ALGOLIA ==============
- Após a "import" da query no index, deverá realizar a configuração, de quais
campos que deverá ser permitido que o usuário pode fazer a pesquia. Dentro do site do algolia,
em "index, configuration, searchable attributes" e selecionar quais os campos que permitira o
usuario a pesquisar. Depois em "Ranking and Sorting", vai escolher como "ordernar os posts",
selecionando a opção "+ Add sort-by attribute"  e escolher o "date_timestamp" que criou na query, 
com a opção "Descending" (order by). Depois em "+ Add custom ranking attribute", para adiciona
qual é o critetiro mais importante, por exemplo: procurar primeiro em "titulo"
Configuração de linguagem em Language: Brazilian.
*/

//12 - Criar a pagina "search" (reaproveitando o codigo do about) e também criar o componente (index e styled)



/*
============== CONFIGURAÇÃO FRONTEND ALGOLIA ==============

Deverá serguir a documentação:

https://www.algolia.com/doc/guides/building-search-ui/installation/react/

1º - Instalar os components:

npm install algoliasearch react-instantsearch-dom

2º - Utilizar um exemplo de configuração (tem na documentação) esse arquivo é componente Search.

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

//Criou a const algolia para receber os dados do arquivo ".env" com a palavra "GATSBY_"
const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}
//Conforme a documentação esta pegando a chave do "app id" e chave publica "search only api key"
//Para não ficar escrevendo os valores das chaves, cria a const "algolia".
const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

//import * as S from "./styled"

const Search = () => (
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox />
        <Hits />
    </InstantSearch>
)

export default Search



*/