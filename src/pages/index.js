import React from "react"
import { Link } from "gatsby" //Importando api de link do gatsby

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <ul>
      <li><Link to="/about" activeStyle={{ color: "red" }}>About do Gatsby</Link></li>
      <li><Link to="/" activeStyle={{ color: "red" }} >Home</Link></li>
      <li><a href="/about">About</a></li>
    </ul>
  </Layout>
)

export default IndexPage
