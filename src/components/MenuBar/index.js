import React, { useState, useEffect } from "react" //importandos os Hooks do react

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "styled-icons/boxicons-regular/Bulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"

import * as S from "./styled"

//antes estava com parentes, e adiciando o return
const MenuBar = () => {

  const [theme, setTheme] = useState(null)
  //fazendo testes logico se o theme é identico a 'dark' joga na variavel isDarkMode
  const isDarkMode = theme === 'dark'
  
  // window.__setPreferredTheme,  window.__onThemeChange,  setTheme(window.__theme), setTheme(window.__theme) = Vem do html.js
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
      <S.MenuBarWrapper>
        <S.MenuBarGroup>
          <S.MenuBarLink to="/" title="Home">
            <S.MenuBarItem>
              <Home />
            </S.MenuBarItem>
          </S.MenuBarLink>
          <S.MenuBarLink to="/search/" title="Pesquisar">
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
          <S.MenuBarItem title="Mudar visualização">
            <Grid />
          </S.MenuBarItem>
          <S.MenuBarItem title="Ir para o Topo">
            <Arrow />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarWrapper>
  )
  
}

export default MenuBar