import React from "react"
import ContactForm from "../components/ContactForm"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { MainContent } from '../styles/base'

const ContactPage = () => (
  <Layout>
    <SEO title="Contato" description="Vamos conversar?" />
      <MainContent>
        <ContactForm />
      </MainContent>            
  </Layout>
)

export default ContactPage