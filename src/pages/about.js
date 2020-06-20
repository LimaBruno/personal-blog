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
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <ReadingProgress target={target} />
    <MainContent>
    
      <h1>Sobre mim</h1>
      <p>
        Prazer, eu sou o Bruno Lima natural de Catalão-GO. Sou um apaixonado por tecnologia da informação e acredito que
        uma das composições do meu sangue seja feito por dígitos binários!
      </p>
      <p>
        Me graduei em <strong>Desenvolvimento Web</strong> pela faculdade de tecnologia de Catalão - FATECA em 2010. Em seguida especializando
        em <strong>Segurança da Informação</strong> pela universidade federal de Goiás - UFG em 2012. Cursei algumas matérias do mestrado
        <strong> Gestão Organizacional</strong> com ênfase em sistemas (stricto sensu) na UFG, mas não conclui por motivos de mudança para Brasília-DF á trabalho.
      </p>
      <p>
        Já atuei em diversas empresas como Mitsubishi Motors, Datacom Consultoria em Sistemas (Truston), Instituto Tecnológico de Goiás, ... entre outras, atuando
        como analista, professor substituto, gestor (confira minhas skills mais abaixo).
      </p>      
      <p>
        Atualmente atuo com consultorias e como freelancer em plataformas digitais como Workana, 99Freelas e entre outras, atendendo diversos projetos.
        Também trabalhos na área de marketing digital como gestão de campanhas, analise e desenvolvimento de plano estratégico (Data-Driven).
      </p>
      <p>
        Estou sempre em busca de adquirir conhecimentos, novidades e também sou muito grato em compartilhar.
        Fico orgulhoso, quando alguma contribuição minha consiga impactar ou gerar resultados positivos.
        E por isso nasceu esse blog, espero que você possa usufruir de alguma maneira e sua volta será sempre bem-vinda!
      </p>
      <p>
        O blog foi feito com as tecnologias atuais do mercado front-end como React, Gatsby, GraphQL, Styled Components/Icons e outros.
        Também está consumindo back-end como Github, Netlify, Algolia, Disqus, Netlify CMS. O blog foi desenvolvido através de cursos e ajuda das
        comunidades Front-end, Gatsby, StackOverflow e Youtube, sem eles a missão seria difícil, meus sinceros agradecimentos!
      </p>
      
      <h2>Hard Skills</h2>
      <dl>
        <dt><strong>Metodologias:</strong></dt>
        <dd>Scrum, Kanban (Trello), Design Thinking, Google Design Sprint, Lean (UX, Startup), UML 2.5, BPM (Bizagi, Helfo), PMBOK, ITIL, COBIT.</dd>
        <dt><strong>Gestão:</strong></dt>
        <dd>Governança T.I (ITSM Management), Equipe Multidisciplinar, SLA, Definição de KPIs, Planejamento ROI, Gestão de Fornecedores, Brainstorming, Benchmarking.</dd>
        <dt><strong>Desenvolvimento:</strong></dt>
        <dd>PHP 5 e 7, Git, HTML5, CSS, Mobile First, Materialize, Acessibilidade, Python, Javascript, ReactJS (intermediário), SQL, UX/UI (Strategy, Analytics, Writing), User e Job Stories, MVP, SEO, Prototipagem AxureRP, Figma, Photoshop/Gimp (intermediário), Google Analytics/Events, CMS (Wordpress, Joomla).</dd>
        <dt><strong>Infraestrutura:</strong></dt>
        <dd>Equipamento CISCO, Linux (Debian, CentOs), Windows Server 03 e 08, Webserver Https (Apache, IIS), Docker, Zabbix, Amazon AWS.</dd>
        <dt><strong>Segurança da Informação:</strong></dt>
        <dd>Gestão da Segurança, Auditoria WEB e ISO 27000, LGPD, Pentests (Kali Linux), pfSense, Squid.</dd>
        <dt><strong>Marketing Digital:</strong></dt>
        <dd>Matriz SWOT, Copywriting, teste a/b, Gestão ADS (Google, Facebook, Instagram), Data-Driven, Google Search Console, Google Trends/Optimize, SEMrush (básico).</dd>      
      </dl>

      <blockquote>
        <strong>"20% dos conhecimentos que possuo em T.I, são responsáveis por 80% dos resultados positivos" - Princípio de Pareto</strong>
      </blockquote>

      <h2>Soft Skills</h2>
      <ul>
        <li>Observador;</li>
        <li>Líder;</li>
        <li>Trabalho em Equipe;</li>
        <li>Empatíco;</li>
        <li>Persuasivo;</li>
        <li>Capacidade analítica, organizado;</li>
        <li>Criativo, inovador;</li>
        <li>Ético, integro;</li>
      </ul>
      </MainContent>
  </Layout>
  </div> 
)

export default AboutPage