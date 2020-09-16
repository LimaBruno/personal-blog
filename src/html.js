import React from "react"
import PropTypes from "prop-types"

const noscriptStyle = `
.gatsby-noscript {
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  height: 100vh;
  width: 100vw;
  position: fixed;  
  left: 0;
  right: 0;
  color: #2e3c42;
  background: #fff;
  line-height: 2rem;
  z-index: 10000;
}
a {
  color: #2980b9;
  text-decoration: none;
  border-bottom: 2px dashed #2e3c42;
  padding-bottom: 0.2rem;
  transition: 0.5s all;
}
a:hover {    
  color: #1fa1f2;
}
`

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
        <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com"/>
        <link rel="preconnect" href="https://www.google-analytics.com"/>
        <link rel="preconnect" href="https://www.googletagmanager.com"/>        
      </head>
      <body {...props.bodyAttributes} className="dark">      
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
            })();
          `,
          }}
        />
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript" className="gatsby-noscript">
          <style>{noscriptStyle}</style>
          😥 Esse site não funciona sem JavaScript.
          <p>Você poderá <a href="https://enable-javascript.com/pt/" alt="Habilitar JavaScript" target="_blank" rel="noopener noreferrer">
            habilitar o JavaScript no seu navegador</a></p>
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
  postBodyComponents: PropTypes.array,}