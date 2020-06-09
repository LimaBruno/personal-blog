import React from "react"
import ContactForm from "../components/ContactForm"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contato" description="" />
      <ContactForm />      
  </Layout>

)

export default ContactPage