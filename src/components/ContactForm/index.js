import React from "react"

import * as S from "./styled"

const ContactForm = () => (
    <S.ContactWrapper>
        <S.ContactTitle>Vamos conversar?</S.ContactTitle>
        <p>
        Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. 
        Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Proin bibendum ullamcorper rutrum.
        </p>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />        
            
            <S.LabelMain for="name">Nome:
                <S.ContactInput name="name" id="name" placeholder="Seu nome"/>
            </S.LabelMain>
                    
            <S.LabelMain for="email">Email:
                <S.ContactInput name="email" id="email" placeholder="Seu email" />
            </S.LabelMain>
            
            <S.LabelMain for="message">Mensagem:
                <S.ContactArea name="message" id="message" rows="5" cols="33" placeholder="Sua mensagem ..." />
            </S.LabelMain>
            <p>
                <S.ContactButtonSend type="submit"><S.IconSend/>Enviar</S.ContactButtonSend>
                <S.ContactButtonRest type="reset"><S.IconRest/>Apagar</S.ContactButtonRest>
            </p>          
      </form>
    </S.ContactWrapper>
    
)

export default ContactForm