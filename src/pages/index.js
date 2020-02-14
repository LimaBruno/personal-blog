import React from "react"
//import { Link } from "gatsby" Importando api de link do gatsby

import Layout from "../components/Layout" //depois que mudou a pasta alterar para "Layout - 'L' maisucluo DE TODOS"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    
  </Layout>
)

export default IndexPage