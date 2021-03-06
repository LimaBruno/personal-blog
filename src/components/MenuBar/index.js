import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt as Search } from "@styled-icons/boxicons-regular/SearchAlt"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Sun as Light } from "@styled-icons/boxicons-solid/Sun"
import { Moon } from "@styled-icons/boxicons-solid/Moon"

import {
  MenuBarWrapper,
  MenuBarGroup,
  MenuBarLink,
  MenuBarItem,

} from "./styled"

const MenuBar = () => {

  const [theme, setTheme] = useState(null)  
  const isDarkMode = theme === 'dark'
    
  useEffect(() => {    
    setTheme(window.__theme)        
    window.__onThemeChange = () => setTheme(window.__theme)    
  }, [])

  return (
      <MenuBarWrapper>
        <MenuBarGroup>
          <MenuBarLink to="/" cover direction="right" bg="var(--background)" duration={0.6} alt="Home" title="Home" activeClassName="active">
            <MenuBarItem>
              <Home />
            </MenuBarItem>
          </MenuBarLink>
          <MenuBarLink to="/search" cover direction="right" bg="var(--background)" duration={0.6} alt="Pesquisar posts" title="Pesquisar posts" activeClassName="active">
            <MenuBarItem>
              <Search />
            </MenuBarItem>
          </MenuBarLink>        
          <MenuBarItem
            alt={`Mudar o tema para ${isDarkMode ? "LIGHT" : "DARK"}`}
            title={`Mudar o tema para ${isDarkMode ? "LIGHT" : "DARK"}`}
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
            isDarkMode={isDarkMode}       
          >
            {isDarkMode ? <Light/> : <Moon/> }
          </MenuBarItem>
          <MenuBarItem
            alt="Ir para o topo"
            title="Ir para o topo"
            onClick={() => {
              window.scroll({ top: 0, behavior: 'smooth' }) //effect
            }}
          >
            <Arrow />
          </MenuBarItem>
        </MenuBarGroup>
      </MenuBarWrapper>
  )  
}

export default MenuBar