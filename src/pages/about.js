import React, { createRef } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import ReadingProgress from "../components/ReadingProgress"

import { MainContent, MarginDiv } from '../styles/base'

const target = createRef()

const AboutPage = () => (
  <div ref={target}>
    <Layout>
    <SEO
      title="Sobre mim"
      description="Quem é o Bruno César Lima?"
    />
    <ReadingProgress target={target} />
    <MainContent>
    
      <h1>Sobre mim</h1>
      <p>
        Prazer, eu sou o <strong>Bruno César Lima</strong> natural de Catalão-GO. Sou apaixonado pela tecnologia e acredito que
        uma das composições do meu sangue seja feito por dígitos binários! <span role="img" aria-label="rosto com coração">😍</span>
      </p>
      <p>
        Me graduei em <strong>Desenvolvimento Web</strong> pela faculdade de tecnologia de Catalão - FATECA em 2010. Em seguida especializando
        em <strong>Segurança da Informação</strong> pela universidade federal de Goiás - UFG em 2012. Cursei algumas matérias do mestrado
        <strong> Gestão Organizacional</strong> com ênfase em sistemas (stricto sensu) na UFG, mas não conclui por motivos de mudança para Brasília-DF a trabalho.
      </p>
      <p>
        Já atuei em diversas empresas como {' '} <a href="https://www.mitsubishimotors.com.br/" alt="Mitsubishi Motors" target="_blank" rel="noopener noreferrer">Mitsubishi Motors</a>, 
        {' '}<a href="https://www.truston.com.br/" alt="Datacom Consultoria em Sistemas" target="_blank" rel="noopener noreferrer">Datacom Consultoria em Sistemas (Truston)</a>, 
        {' '}<a href="http://www.itego.com.br/" alt="Instituto Tecnológico de Goiás" target="_blank" rel="noopener noreferrer">Instituto Tecnológico de Goiás</a>, ... entre outras.
        Atualmente atuo com consultorias e como freelancer em plataformas digitais como {' '}<a href="https://www.workana.com/" alt="Workana" target="_blank" rel="noopener noreferrer">Workana</a>, 
        {' '} <a href="https://www.99freelas.com.br/" alt="99freelas" target="_blank" rel="noopener noreferrer">99Freelas</a> e outras, atendendo diversos projetos (confira minhas skills abaixo).
      </p>
      <p>
        Estou constantemente em busca de conhecimentos, novidades e sou muito grato em compartilhar.
        Sinto-me orgulhoso, quando alguma contribuição minha consiga impactar ou gerar resultados positivos.
        E por isso nasceu esse blog, espero que você possa usufruir de alguma maneira e sua volta será sempre bem-vinda!
      </p>
      <p>
        O blog foi desenvolvido com tecnologias em alta no mercado front-end como React, Gatsby, GraphQL, Styled Components/Icons, e 
        consumindo back-end Github, Netlify, Algolia, Disqus e Netlify CMS. Desenvolvido através de cursos e contribuições das
        comunidades Front-end, StackOverflow e Youtube, sem eles a missão seria difícil, meus sinceros agradecimentos! <span role="img" aria-label="aplausos">👏🏽👏🏽</span>
      </p>
      
      <h2>Hard Skills</h2>
      <dl>
        <dt><strong>Metodologias:</strong></dt>
        <dd>Scrum, Kanban (Trello), Design Thinking, Google Design Sprint, Lean (UX, Startup), UML 2.5, PMBOK, ITIL, COBIT.</dd>
        <dt><strong>Gestão:</strong></dt>
        <dd>Governança T.I (ITSM Management), Gestão de Equipe Multidisciplinar, SLA, Definição de KPIs, Planejamento ROI, Gestão de Fornecedores, Brainstorming, Benchmarking.</dd>
        <dt><strong>Desenvolvimento:</strong></dt>
        <dd>PHP 5 e 7, Git, HTML5, CSS, Mobile First, Materialize, Acessibilidade, Python, Javascript, ReactJS (intermediário), SQL, UX/UI (Strategy, Analytics, Writing), User e Job Stories, MVP, SEO, Prototipagem AxureRP, Figma, Photoshop/Gimp (intermediário), Google Analytics/Events, CMS (Wordpress, Joomla), BPMN (Bizagi, Heflo).</dd>
        <dt><strong>Infraestrutura:</strong></dt>
        <dd>Equipamento CISCO, Linux (Debian, CentOs), Windows Server 03 e 08, Webserver Https (Apache, IIS), Docker, Zabbix, Amazon AWS.</dd>
        <dt><strong>Segurança da Informação:</strong></dt>
        <dd>Gestão da Segurança, Auditorias Aplicações WEB e ISO 27000, LGPD, Pentests (Kali Linux).</dd>
      </dl>

      <h2>Soft Skills</h2>
      <ul>
        <li>Observador;</li>
        <li>Líder</li>
        <li>Trabalho em Equipe;</li>
        <li>Empatíco;</li>
        <li>Persuasivo;</li>
        <li>Capacidade Analítica, Organizado;</li>
        <li>Criativo, Inovador;</li>
        <li>Ético, Integro;</li>
      </ul>
      </MainContent>
      <MarginDiv />
  </Layout>
  </div> 
)

export default AboutPage