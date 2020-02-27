import React from "react"

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';

import * as S from "./styled"

//Criou a const algolia para receber os dados do arquivo ".env" com a palavra "GATSBY_"
const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}
//Conforme a documentação esta pegando a chave do "app id" e chave publica "search only api key"
const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

const Search = () => (
    <S.SearchWrapper>
        <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
            <SearchBox autoFocus translations={{ placeholder: 'Pesquisar...'}}/>
            {/* Importando o Stats, abaixo do SearchBox vai mostra a mensagem "quanitade de posts" */}
            <Stats translations={{stats(nbHits, timeSpentMS){
                return `${nbHits} resultados encontrados em ${timeSpentMS}ms`
            }}}/> 
            <Hits />        
        </InstantSearch>
    </S.SearchWrapper>
)

export default Search

//depois da configuração compilar novamente