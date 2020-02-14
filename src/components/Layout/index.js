/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"

//import styled from "styled-components" Importando o Stlyed-components - Não precisa mais, porque está chamadando do "layout/styled.js"

import * as S from "./styled" // Organizando, jogando todos os componentes de estilo do layout para o arquivo styled.js e colocando uma alias. "S"
import GlobalStyle from "../../styles/global" //importando o rest global


const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper> {/* Para organizar css colocou no styled.css e exportou "export" a const  */}
      <GlobalStyle /> {/* importando o rest global */}
      <aside>
        <Sidebar/>
      </aside>
      <S.LayoutMain>{children}</S.LayoutMain>
      </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout