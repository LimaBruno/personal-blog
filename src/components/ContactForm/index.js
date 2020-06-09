import React from "react"

import * as S from "./styled"

const ContactForm = () => (
    <S.ContactWrapper>
        
        <S.ContactForm method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />        
            
            
            <S.LabelMain for="name"><S.LabelName>Nome:</S.LabelName>
                <S.ContactInput type="text" name="name" id="name" placeholder="Seu nome"/>
            </S.LabelMain>
               
            <S.LabelMain for="email"><S.LabelName>Email:</S.LabelName>
                <S.ContactInput type="email" name="email" id="email" placeholder="Seu email" />
            </S.LabelMain>
            
            <S.LabelMain for="message"><S.LabelName>Mensagem:</S.LabelName>
            <S.ContactArea name="message" id="message" rows="5" cols="33" placeholder="Sua mensagem ..."/>
            </S.LabelMain>
            <p>
                <S.ContactButtonSend type="submit"><S.IconSend/>Enviar</S.ContactButtonSend>
                <S.ContactButtonRest type="reset"><S.IconRest/>Apagar</S.ContactButtonRest>
            </p>          
      </S.ContactForm>
    </S.ContactWrapper>
    
)

export default ContactForm