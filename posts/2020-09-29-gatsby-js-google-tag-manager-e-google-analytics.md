---
layout: post
title: Gatsby JS, Google Tag Manager e Google Analytics
description: Utilize o Tag Manager para gerenciar o Analytics e outras tags.
date: 2020-09-29 06:06:58
thumbnail: /assets/img/gatsby-google-tag-manager-analytics.png
category: dev
background: "#EA2027"
---
Depois que desenvolvi meu blog em **React/Gatsby**, optei em utilizar o **Google Tag Manager** para gerenciar o **Google Analytics** e outras tags, como por exemplo o **Google Optimize** e **Hotjar** com intuito de obter métricas e consequentemente melhorias no código, conteúdo e estratégia. Em meu ponto de vista, é a maneira mais eficiente de se trabalhar com diferentes aplicações de terceiros “Third Party”, pois você adiciona apenas uma única vez o script em seu código e gerência em uma aplicação separada.

Lembrando que, **você poderá utilizar o Google Tag Manager em “diversas linguagens web”**. O intuito deste post é a instalação e configuração (básica) no Gatsby.

## Contas do Google Tag Manager e Google Analytics

Neste post não irei entrar em detalhe de como criar uma conta e configurar do Google Analytics, para não ficar muito grande. Abaixo disponibilizo um link que poderá auxiliar na criação da Tag. O modelo do ID tem o formato (**UA-XXXXXXXXX-X**).

<a href="https://support.google.com/analytics/answer/1009694?hl=pt-BR" alt="Criar Conta no Google Analytics" title="Criar Conta no Google Analytics" target="_balnk" rel="noreferrer noopener">https://support.google.com/analytics/answer/1009694?hl=pt-BR</a>

Com o código do Analytics em mãos vamos <a href="https://tagmanager.google.com/#/home" alt="Criar Conta no Google Tag Manager" title="Criar Conta no Google Tag Manager" target="_balnk" rel="noreferrer noopener">criar uma conta no Tag Manager</a> com as informações do seu site, abaixo um exemplo.

![Google Tag Manager - Criar Conta](/assets/img/google-tag-manager-criar.png "Google Tag Manager - Criar Conta")

Em seguida **escolha o Idioma e marque a caixa** informando que está de acordo com os termos e pronto!

A próxima tela, será gerado sua tag **GTM-ID** pronto para ser configurada em sua aplicação GATSBY, conforme o print abaixo:

![Google Tag Manager - Tag GTM criada](/assets/img/google-tag-manger-id.png "Google Tag Manager - Tag GTM criada")

No próximo passo, vamos adicionar a Tag do Analytics no Tag Manager. Para isto, escolha à opção “**Adicionar uma nova Tag**”.

![Google Tag Manager - Escolher Tipo de Tag](/assets/img/google-tag-manager-adicionar-nova-tag.png "Google Tag Manager - Escolher Tipo de Tag")

Ao adiciona a Tag, escolha a opção “**Google Analytics: Universal Analytics**” e adicione uma “**Nova Variável**” conforme o print.

![Google Tag Manager - Adicionando Google Analytics](/assets/img/google-tag-manager-google-analytics-gatsby.png "Google Tag Manager - Adicionando Google Analytics")

Ao clicar em “**Nova Variável**”, você deverá preencher com o seu código do Google Analytics. Informe um nome na variável e clique em “**Salvar**” **e também sua tela anterior**.

![Google Tag Manager - Adicionando Tag Google Analytics](/assets/img/google-tag-manager-tag-google-analytics.png "Google Tag Manager - Adicionando Tag Google Analytics")

**Após salvar**, as configurações vamos “**Adicionar acionador**” e em seguida selecionar “**All Pages**” e “**Salve**” novamente.

![Google Tag Manager - Adicionar acionador](/assets/img/google-tag-manager-acionador.png "Google Tag Manager - Adicionar acionador")

Agora falta apenas “**Enviar**” todas nossas configurações clicando no botão “**Enviar**” e na próxima tela “**Publicar**”, aguarde alguns instantes e pronto!

![Google Tag Manager - Publicar](/assets/img/google-tag-manager-fianalizar.png "Google Tag Manager - Publicar")

## Existem duas maneiras de utilizar o Tag Manager no Gatsby

Abaixo é apresentado duas maneiras de como utilizar o Google Tag Manager em sua aplicação. Você poderá optar em configurar **manualmente ou através de plugins** da comunidade Gatsbsy.

Eu estava utilizando a primeira opção no meu blog “manualmente”, mas logo acabei optando pela segunda opção. A configuração manual eu não recomendo, pois quando você está em modo de desenvolvimento local “**gatsby develop**” é contabilizado nas métricas do Google Analytics. **E outro detalhe, você deverá incluir códigos de scripts “na mão”** 😕. Enfim, caso queira utilizar basta seguir a leitura abaixo ou poderá pular diretamente para a opção “**2ª – Instalação de Plugin**”.

### 1ª – Incluir Script Manualmente

### 1.1	– HTML.JS

Para configurar manualmente, você deverá ter primeiramente o arquivo **html.js** em sua aplicação. Caso não tenha, basta executar o comando no terminal de sua preferência.

```
cp .cache/default-html.js src/html.js
```

Caso tenha alguma dúvida, você poderá conferir na <a href="https://www.gatsbyjs.com/docs/custom-html/" alt="Gatsby - Customizing html.js" title="Gatsby - Customizing html.js" target="_balnk" rel="noreferrer noopener">documentação oficial html.js</a>.

### 1.2 – Incluir Script

No arquivo html.js, basta incluir o código abaixo **antes de fechar a tag ```</head>```.**

```jsx
<script dangerouslySetInnerHTML={{
  __html: 
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({
    'gtm.start': new Date().getTime(),event:'gtm.js'
    });
    var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),
    dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })
  (window,document,'script','dataLayer','GTM-SEU_ID');
  </script>`,
}}
/>
```

Também deverá inserir o script baixo **antes de fechar a tag ```</body>```.**

```jsx
<noscript dangerouslySetInnerHTML={{
  __html: 
  `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-SEU_ID" height="0" width="0"
  style="display:none;visibility:hidden"></iframe>
  `,
}}
/>
```

**Observação:** Deverá incluir seu próprio ID onde está especificado **GTM-SEU_ID**, localizado em ambos códigos citados.

### 1.3	– Executar Teste

Execute o seu projeto localmente “gatsby develop” ou envie para produção. Após o procedimento, vá no Google Analytics, “Em tempo real” e em seguida “Visão Geral”. Pronto!!! O Google Analytics está funcionando corretamente! Caso não esteja apresentando, basta atualizar a página “refresh” que você terá sua métrica disponível.

### 2ª – Instalação de Plugin

Como havia informado, para mim esta é a melhor opção, pois é mais fácil e simplificada de configurar. 😉

### 2.1 – Plugin

Basta instalar o plugin “<a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/" alt="package gatsby-plugin-google-tagmanager" title="package gatsby-plugin-google-tagmanager" target="_balnk" rel="noreferrer noopener">gatsby-plugin-google-tagmanager</a>” que está disponível no repositório da comunidade em seu projeto (node).

```jsx
npm install --save gatsby-plugin-google-tagmanager
```

### 2.2 – Configuração

Inclua a configuração abaixo no arquivo “**gatsby-config.js**”, dentro do objeto plugins. E apenas para seu conhecimento, a opção abaixo “**includeInDevelopment: false**”, não permite incluir o script do Google Tag Manager em modo de desenvolvimento.

```jsx
plugins: [
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: “GTM-SEU_ID”,
      includeInDevelopment: false,
    },
  },
]
```

**Dica:** Utilizo variável de ambiente, ou seja, arquivo “.env”. Você poderá criar na variável de ambiente e chamar dentro do gatsby-config. Isto com intuito de deixar o código mais "clean".😎

### Exemplo no arquivo “.env”

```
GATSBY_GOOGLE_TAG_MANAGER=GTM-SEU_ID
```

### E no gatsby-config.js terá a seguinte configuração:

```jsx
plugins: [
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: process.env.GATSBY_GOOGLE_TAG_MANAGER,
      includeInDevelopment: false,
    },
  },
]
```

**Observação:** Não esqueça de criar a variável de ambiente em produção contendo sua tag “**GTM-SEU_ID**”.

### 2.3 – Executar Teste

Para você fazer um simples teste, basta compilar seu projeto com os comandos no terminal:

```jsx
gatsby build && gatsby serve
```

No Google Analytics, “Em tempo real”, clique em “Visão Geral”.  Pronto!! O Google Analytics está funcionando corretamente! Caso não esteja apresentando, basta atualizar a página (refresh) que você terá sua métrica. Percebeu que não inserimos nenhuma linha de código (apenas configuração padrão) e ficou tudo mais simples. 😛

## Bônus:

Utilizo o plugin preconnect, para apenas “informar a prioridade de uso do servidor”, adicionando **rel="preconnect"** na chamada do servidor.

Exemplo:

```jsx
<link rel="preconnect" href="https://googletagmanager.com" crossorigin>
```

Você poderá conferir mais na <a href="https://web.dev/preconnect-and-dns-prefetch/" alt="Document about Preconnect" title="Document about Preconnect" target="_balnk" rel="noreferrer noopener">documentação sobre o preconnect</a>.

### 3.1 – Instalação (Node)

```jsx
npm install --save gatsby-plugin-preconnect
```

Confira a <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-preconnect/?=gatsby-plugin-preconnect" alt="gatsby-plugin-preconnect" title="gatsby-plugin-preconnect" target="_balnk" rel="noreferrer noopener">documentação do plugin preconnect</a>.

### 3.2 – Configuração

Configuração no arquivo gatsby-config.js:

```jsx
plugins: [
  { 
    resolve: "gatsby-plugin-preconnect",
    options: {
      domains: [
        "https://www.google-analytics.com",
        "https://www.googletagmanager.com",
      ],
    },
  },
]
```

**Observação:** A configuração do plugin preconnect "**não altera o tempo de cache no navegador**". Por padrão, o Google Tag Manager possui apenas 15 minutos.

<br>

\---FIM---