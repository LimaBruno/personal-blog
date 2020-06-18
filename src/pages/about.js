import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { MainContent } from '../styles/base'

const AboutPage = () => (
    <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Prazer, eu sou o Bruno Lima natural de Catalão-GO. Sou um apaixonado por tecnologia da informação e acredito que
        uma das composições do meu sangue seja feito por digitos binários!
      </p>
      <p>
        Me graduei em <strong>Desenvolvimento Web</strong> pela faculdade de tecnologia de Catalão - FATECA em 2010. Em seguida especializando
        em <strong>Segurança da Informação</strong> pela universidade federal de Goiás - UFG em 2012. Cursei algumas matérias do mestrado
        <strong> Gestão Organizacional</strong> com enfase em sistemas (stricto sensu) na UFG, mas não conclui por motivos de mudança para Brasília-DF á trabalho.
      </p>
      <p>
        Atualmente atuo com consultorias e como freelancer em plataformas digitais como Workana, 99Freelas e entre outras, atendendo diversos projetos.
        Também trabalhos na área de marketing digital como gestão de campanhas, analise e desenvolvimento de plano estratégico (Data-Driven).
      </p>
      <p>
        Estou sempre em busca de adquirir conhecimentos, novidades e também sou muito grato em compartilhar.
        Fico orgulhoso, quando alguma contribuição minha (por mais que seja pequena ou simples) consiga impactar ou gerar resultados positivos na vida de alguém.
        E por isso nasceu esse blog, espero que você possa usufruir de alguma maneira, sua volta será sempre bem-vinda!
      </p>

      <h2>Hard Skills</h2>
      <dl>
        <dt><strong>Metodologias:</strong></dt>
        <dd><li>Scrum, Kanban (Trello), Design Thinking, Google Design Sprint, Lean (UX, Startup), UML 2.5, BPM (Bizagi), PMBOK, ITIL, COBIT.</li></dd>
        <dt><strong>Gestão:</strong></dt>
        <dd><li>Governança T.I, Equipe Multidisciplinar, SLA, Definição de KPIs, Planejamento ROI, Gestão de Fornecedores, Brainstorming, Benchmarking.</li></dd>
        <dt><strong>Desenvolvimento:</strong></dt>
        <dd><li>PHP 5 e 7, Git, HTML5, CSS, Materialize, Acessibilidade, Python, Javascript, ReactJS (intermediário), SQL, UX/UI (Strategy, Analytics, Writing), User e Job Stories, MVP, SEO, Prototipagem AxureRP, Figma, Photoshop (intermediário), Google Analytics, CMS (Wordpress, Joomla).</li></dd>
        <dt><strong>Infraestrutura:</strong></dt>
        <dd><li>Equipamento CISCO e HP, Linux (Debian, CentOs), Webserver Https (Apache, IIS), Docker, Amazon AWS.</li></dd>
        <dt><strong>Segurança da Informação:</strong></dt>
        <dd><li>Gestão da Segurança, Auditoria WEB e ISO, LGPD, Pentests (Kali Linux), pfSense, Squid.</li></dd>      
      </dl>

      <h2>Soft Skills</h2>
      <ul>
        <li>Observador;</li>
        <li>Líder;</li>
        <li>Trabalho em Equipe;</li>
        <li>Empatíco;</li>
        <li>Persuasivo</li>
        <li>Capacidade analítica;</li>
        <li>Criativo, inovador;</li>
        <li>Ético, integro;</li>
      </ul>
      </MainContent>
  </Layout>
    
)

export default AboutPage