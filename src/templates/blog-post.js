import React from "react"
import { graphql } from "gatsby"
/*2º - metodo BlogPost recebendo o valor 

*/
const BlogPost = ({ data }) => {
    const post = data.markdownRemark

    //Renderizando o post
    return (
        <>
            <h1>{post.frontmatter.title}</h1>
            {/*a div está recebendo o html do post.html, por ser dados HTML o Reacat informa
            que é arriscado passar html e tem que ter o total conhecimento do html, pois podem acontecer ataques de xss. O nome "dangerousylSetInnerHTML",
            substitui o "innerHTML". Então precisa estar garantido a etrutura do html antes de passar.  */}
            <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
        </>
    )
}
//1º - Executando a query e exportando 
export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
            title
        }
        html
        }
    }
`


export default BlogPost