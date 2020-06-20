import React , { createRef } from "react"
import ContactForm from "../components/ContactForm"
import ReadingProgress from "../components/ReadingProgress"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { MainContent } from '../styles/base'
const target = createRef()

const ContactPage = () => (
  <div ref={target}>
    <Layout>
      <SEO title="Contato" description="Vamos conversar?" />
        <ReadingProgress target={target} />
        <MainContent>
          <ContactForm />
        </MainContent>            
    </Layout>
  </div>
)

export default ContactPage