import React from "react"
import { Link } from "gatsby" //Sempre trabalhar com link importar o pacote

const AboutPage = () => (
    <>
        <h1>About Page</h1>
            <ul>
                <li><Link to="/about" activeStyle={{ color: "red" }}>About do Gatsby</Link></li>
                <li><Link to="/" activeStyle={{ color: "red" }} >Home</Link></li>
                <li><a href="/about">About</a></li>
            </ul>
    </>
    
)

export default AboutPage