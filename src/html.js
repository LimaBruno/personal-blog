import React from "react"
import PropTypes from "prop-types"

const noscriptStyle = `
  .gatsby-noscript {    
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: block;
    padding: 15px;
    background: #ff3838;
    color: #f7f1e3;
    z-index: 10000;
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
          Esse site não funciona sem JavaScript, habilite 😎
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