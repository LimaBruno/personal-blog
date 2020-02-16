import React from "react"
//import { Link } from "gatsby" Importando api de link do gatsby

import Layout from "../components/Layout" //depois que mudou a pasta alterar para "Layout - 'L' maisucluo DE TODOS"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    
  </Layout>
)

export default IndexPage