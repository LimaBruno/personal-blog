import React from "react"

import * as S from "./styled"

const ContactForm = () => (
    <S.ContactWrapper>
        <S.ContactTitle>Vamos Conversar?</S.ContactTitle>
        <S.ContactDescription>
            Deseja falar comigo? Como posso ajudá-lo? Simples! Basta me procurar nas redes sociais
            ou se você preferir, poderá preencher o formulário abaixo com seus dados e mensagem. Estarei respondendo
            mais breve possível. Desde já, agradeço pelo seu contato!
        </S.ContactDescription>
        <S.ContactForm method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <S.ContactInput type="hidden" name="bot-field" />
            <S.ContactInput type="hidden" name="form-name" value="contact" />            
            <S.LabelMain for="name"><S.LabelName>Nome:</S.LabelName>
                <S.ContactInput type="text" name="name" id="name" alt="Campo Nome" placeholder="Seu nome"/>
            </S.LabelMain>               
            <S.LabelMain for="email"><S.LabelName>Email:</S.LabelName>
                <S.ContactInput type="email" name="email" id="email" alt="Campo Email" placeholder="Seu email" />
            </S.LabelMain>            
            <S.LabelMain for="message"><S.LabelName>Mensagem:</S.LabelName>
                <S.ContactArea name="message" id="message" rows="5" cols="33" alt="Campo Mensagem" placeholder="Sua mensagem ..."/>
            </S.LabelMain>
            <S.ContactButtonSend type="submit" aria-label="Enviar Formulário Email"><S.IconSend/>Enviar</S.ContactButtonSend>
            <S.ContactButtonRest type="reset" aria-label="Apagar Formulário Email"><S.IconRest/>Apagar</S.ContactButtonRest>                    
        </S.ContactForm>
        <S.MarginDiv/>
    </S.ContactWrapper>    
)

export default ContactForm