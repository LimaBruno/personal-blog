import React, { useState, useEffect } from "react"

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt as Search } from "@styled-icons/boxicons-regular/SearchAlt"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Sun as Light } from "@styled-icons/boxicons-solid/Sun"
import { Moon } from "@styled-icons/boxicons-solid/Moon"


import * as S from "./styled"


const MenuBar = () => {

  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  
  const isDarkMode = theme === 'dark'
    
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
        
          <S.MenuBarItem
            title="Mudar o tema"
            onClick={() => {
              window.__setPreferredTheme(isDarkMode ? "light" : "dark")

              if (window.DISQUS !== undefined) {
                window.setTimeout(() => {
                  window.DISQUS.reset({
                    reload: true
                  })
                }, 300)
              }
            }}
            className={theme}        
          >
            {isDarkMode ? <Light/> : <Moon/> }
          </S.MenuBarItem>
          <S.MenuBarItem
            title="Ir para o Topo"
            onClick={() => {
              window.scroll({ top: 0, behavior: 'smooth' }) //efeito
            }}
          >
            <Arrow />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarWrapper>
  )
  
}

export default MenuBar