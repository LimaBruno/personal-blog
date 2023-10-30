import React, { createRef } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import ReadingProgress from "../components/ReadingProgress"

import { MainContent } from '../styles/base'

const target = createRef()

const AboutPage = () => (
  <div ref={target}>
    <Layout>
    <SEO
      title="Sobre mim"
      description="Quem é o Bruno César Lima?"
    />    
    <MainContent>
      <ReadingProgress target={target} />
      <h1>Sobre mim</h1>
      <p>
        Prazer, eu sou o <strong>Bruno César Lima</strong> natural de Catalão-GO. Sou apaixonado pela tecnologia e acredito que
        uma das composições do meu oxigênio seja feito por dígitos binários! <span role="img" aria-label="emoticon coração">❤️</span>
      </p>
      <p>
        Me graduei em <strong>Desenvolvimento Web</strong> pela faculdade de tecnologia de Catalão - FATECA em 2010. Em seguida especializando
        em <strong>Segurança da Informação</strong> pela universidade federal de Goiás - UFG em 2012. Cursei algumas matérias no mestrado
        <strong> Gestão Organizacional</strong> com ênfase em sistemas (stricto sensu) na UFG, mas não conclui por motivos de mudança para Brasília-DF a trabalho.
      </p>
      <p>
        Estou constantemente em busca de conhecimentos, novidades e sou muito grato em compartilhar.
        Sinto-me orgulhoso, quando alguma contribuição minha consiga impactar e gerar resultados positivos.
        E por isso nasceu esse blog, espero que você possa usufruir de alguma maneira e sua volta será sempre bem-vinda!
      </p>
      <p>
        O blog foi desenvolvido com tecnologias em alta no mercado front-end como React, Gatsby, GraphQL, Styled Components/Icons, e 
        consumindo back-end Github, Netlify, Algolia, Disqus e Netlify CMS. Desenvolvido através de cursos e contribuições das
        comunidades Front-end, StackOverflow e Youtube, sem eles a missão seria mais difícil, meus sinceros agradecimentos!
      </p>
      <p>
        Caso queira fazer um fork deste projeto ou mesmo request com alguma melhoria, basta acessar o meu <a href="https://bit.ly/46alf87" target="_blank" alt="Repositório Github" title="Repositório Github" rel="noreferrer noopener">repositório Github</a>.
      </p>
      
      <h2>Hard Skills</h2>
      <dl>
        <dt><strong>Metodologias/Práticas:</strong></dt>
        <dd>Scrum, Kanban (Trello/Jira), Design Thinking, Google Design Sprint, Lean (UX, Startup), UML 2.5, PMBOK, ITIL, COBIT, Benchmarking, Brainstorming, BPMN (Bizagi, Heflo).</dd>
        <dt><strong>Gestão:</strong></dt>
        <dd>Governança T.I (ITSM), Gestão de Equipe Multidisciplinar, Análise SLA, Indicadores KPIs, Ciclo PDCA, Matriz SWOT, Planejamento ROI, Gestão de Fornecedores.</dd>
        <dt><strong>Desenvolvimento:</strong></dt>
        <dd>PHP 5 e 7, Git Lab, HTML5, CSS, Mobile First, Materialize, Material Design, Acessibilidade, Python Django/Flask (intermediário), Javascript, ReactJS (intermediário), SQL, UX/UI (Strategy, Analytics, Writing), Requisitos (User Stories, Job Stories e User Case), MVP, SEO, Prototipagem Figma, Photoshop/Gimp (intermediário), Google Analytics/Events/Search, CMS (Wordpress, Joomla), Smoke Testing (Quality Assurance), SonarQube.</dd>
        <dt><strong>Infraestrutura:</strong></dt>
        <dd>Equipamentos CISCO, Linux (Debian, Red Hat), Windows Server 03/08, Webserver Http (Apache, IIS), Docker, Zabbix, Amazon AWS, RM Sistemas, SAP, Sankhya (client).</dd>
        <dt><strong>Segurança da Informação:</strong></dt>
        <dd>Gestão da Segurança, Auditorias Aplicações WEB e ISO 27000, LGPD, Pentests (Kali Linux), Security Headers.</dd>
      </dl>

      <h2>Soft Skills</h2>
      <ul>
        <li>Observador, Senso de dono (Ownership);</li>
        <li>Liderança, Planejador;</li>
        <li>Trabalho em Equipe;</li>
        <li>Mão na Massa (Hands on);</li>
        <li>Aprendizagem Contínua;</li>
        <li>Empático, Colaborativo;</li>
        <li>Analítico, Visão Sistêmica;</li>
        <li>Criativo, Inovador;</li>
        <li>Ético, Íntegro;</li>
      </ul>

      <h2>Mad Skills</h2>
      <ul>
        <li>Drones;</li>
        <li>Fotografias;</li>
        <li>Futebol;</li>
        <li>Jardinagem;</li>
        <li>Inglês;</li>
        <li>Andar sem rumo;</li>        
      </ul>
    </MainContent>      
  </Layout>
  </div> 
)

export default AboutPage