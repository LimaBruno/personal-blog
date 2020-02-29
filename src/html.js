/**
O arquvio "html.js" é o arquivo "pai" que inicia todo os componentes do gatbsy
e também customizar. Para criar o arquivo executar o comando:


cp .cache/default-html.js src/html.js

https://www.gatsbyjs.org/docs/custom-html/


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
      {/* definindo a className principal do site, esta classe esta definida em global.js */}
      <body {...props.bodyAttributes} className="dark">
        {props.preBodyComponents}
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
