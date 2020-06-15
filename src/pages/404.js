import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import NotFound from "../components/NotFound"

import { MainContent } from '../styles/base'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" 
    description="404: Not found"
    />
    <MainContent>
      <NotFound/>
    </MainContent>    
  </Layout>
)

export default NotFoundPage