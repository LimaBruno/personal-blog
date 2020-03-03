/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"; //Para controlar o comportamento dos efeitos de link
//TransitionPortal = Existe 3 tipos de level (top, middle, bottom)

import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"
//import styled from "styled-components" Importando o Stlyed-components - Não precisa mais, porque está chamadando do "layout/styled.js"
import * as S from "./styled" // Organizando, jogando todos os componentes de estilo do layout para o arquivo styled.js e colocando uma alias. "S"
import GlobalStyle from "../../styles/global" //importando o rest global


const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper> {/* Para organizar css colocou no styled.css e exportou "export" a const  */}
      <GlobalStyle /> {/* importando o rest global */}
      <TransitionPortal level="top"> {/* o top fica por cima do efeito  */}
        <Sidebar/>
      </TransitionPortal>      
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>  
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout