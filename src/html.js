/**
O arquvio "html.js" é o arquivo "pai" que inicia todo os componentes do gatbsy
e também customizar. Para criar o arquivo executar o comando:


cp .cache/default-html.js src/html.js

https://www.gatsbyjs.org/docs/custom-html/


=========Efeito Dark===========

Utilizar o script do "Dan Abramov’s"

Site: https://markoskon.com/dark-mode-in-react/


O CODIGO TEM NO SITE
ATENÇÃO O CODIGO "darkQuery" FUNCIONA APENAS NO MAC OS (NAO COLOCAR!)

 var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();

Alterando as informações devera compilar novamente
*/

import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="dark">
      {/* _onThemeChange = Alteração de Tema, __onDisplayChange = Alteração do grid de post
       document.body.className = newTheme;
       document.body.id = newDisplay;

       Não utilizar mais de um className, pode dar problemas.
      */}
      <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              window.__onThemeChange = function() {};
              function setTheme(newTheme) {
                window.__theme = newTheme;
                preferredTheme = newTheme;
                document.body.className = newTheme;
                window.__onThemeChange(newTheme);
              }
              var preferredTheme;
              try {
                preferredTheme = localStorage.getItem('theme');
              } catch (err) { }
              window.__setPreferredTheme = function(newTheme) {
                setTheme(newTheme);
                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) {}
              }
              setTheme(preferredTheme || 'dark');


              window.__onDisplayChange = function() {};
              
              function setDisplay(newDisplay) {
                window.__display = newDisplay;
                preferredDisplay = newDisplay;
                document.body.id = newDisplay;
                window.__onDisplayChange(newDisplay);
              }
              var preferredDisplay;
              try {
                preferredDisplay = localStorage.getItem('display');
              } catch (err) { }
              window.__setPreferredDisplay = function(newDisplay) {
                setDisplay(newDisplay);
                try {
                  localStorage.setItem('display', newDisplay);
                } catch (err) {}
              }
              setDisplay(preferredDisplay || 'list');
            })();
          `,
          }}
        />
        {props.preBodyComponents}
        {/* Adicionando MANUALMENTE <NOSCRIPT> */}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled =)
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
