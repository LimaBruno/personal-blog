import React from "react"

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'
import Hit from "./Hit"

import {
  SearchWrapper,
  SearchTitle,
  AlgoliaIcon  
} from "./styled"

const Search = ({ algolia }) => {
 const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);
  return(
    <SearchWrapper>
        <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
            {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
            <SearchBox autoFocus translations={{ placeholder: 'Pesquisar...'}}/>
            <Stats translations={{stats(nbHits, timeSpentMS){
                return nbHits === 1
                ? `${nbHits} resultado encontrado em ${timeSpentMS}ms`
                : `${nbHits} resultados encontrados em ${timeSpentMS}ms`
            }}}/> 
            <Hits hitComponent={Hit}/>      
        </InstantSearch>
        <SearchTitle>
            Search by Algolia
            <AlgoliaIcon />
        </SearchTitle>        
    </SearchWrapper>
  )
}
export default Search