import React from "react"
import ContactForm from "../components/ContactForm"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from '../styles/base'

const ContactPage = () => (
  <Layout>
    <SEO title="Contato" description="Vamos conversar?" />
      <S.MainContent>
        <ContactForm />
      </S.MainContent>            
  </Layout>
)

export default ContactPage