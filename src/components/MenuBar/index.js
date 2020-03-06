import React, { useState, useEffect } from "react" //importandos os Hooks do react

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "styled-icons/boxicons-regular/Bulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { ThList as List } from "styled-icons/typicons/ThList"

import * as S from "./styled"


//antes estava com parentes, e adiciando o return
const MenuBar = () => {

  //Depois que configurou o arquivo html.js configurar a variavel do array

  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  //fazendo testes logico se o theme é identico a 'dark' joga na variavel isDarkMode
  const isDarkMode = theme === 'dark'

   //fazendo testes logico se o theme é identico a 'dark' joga na variavel isDarkMode
   const isListMode = display === 'list'
  
  /* ============= EFEITOS PARA MUDANÇA DE TEMPLATE =============

  // window.__setPreferredTheme,  window.__onThemeChange,  setTheme(window.__theme), setTheme(window.__theme) = Vem do html.js
  // window.__setPreferredDisplay,  window.__onDisplayChange,  setDisplay(window.__display), setDisplay(window.__display) = Vem do html.js
  //Quando carregar o modulo vai executar userEffect()
  
  */
  useEffect(() => {
    
    setTheme(window.__theme)
    setDisplay(window.__display)
    
    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
      <S.MenuBarWrapper>
        <S.MenuBarGroup>
          <S.MenuBarLink to="/" cover direction="right" bg="var(--background)" duration={0.6} title="Home">
            <S.MenuBarItem>
              <Home />
            </S.MenuBarItem>
          </S.MenuBarLink>
          <S.MenuBarLink to="/search/" cover direction="right" bg="var(--background)" duration={0.6} title="Pesquisar">
            <S.MenuBarItem>
              <Search />
            </S.MenuBarItem>
          </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
          <S.MenuBarItem
            title="Mudar o tema"
            onClick={() => {
              window.__setPreferredTheme(isDarkMode ? "light" : "dark") //1º se o isDarkMode for verdadeiro ou seja "onClick= tema dark" mude para "light" se não muda para "dark"
            }}
            className={theme}        
          >
            <Light />
          </S.MenuBarItem>
          <S.MenuBarItem 
            title="Mudar visualização"
            onClick={() => {
              window.__setPreferredDisplay(isListMode ? "grid" : "list") //1º se o isDarkMode for verdadeiro ou seja "onClick= tema dark" mude para "light" se não muda para "dark"
            }}
            className="display"              
          >
            { isListMode ? <Grid /> : <List /> }
          </S.MenuBarItem>
          <S.MenuBarItem
            title="Ir para o Topo"
            onClick={() => {
              window.scroll({ top: 0, behavior: 'smooth' })
            }}
          >
            <Arrow />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarWrapper>
  )
  
}

export default MenuBar