import React from "react"
import { useForm } from "react-hook-form";

import * as S from "./styled"

const ContactForm = () => {
  
  const { register, errors, handleSubmit } = useForm({
      mode: "onChange"
  });
  const onSubmit = (data, e) => { 
    console.log(JSON.stringify(data)) 
    e.target.submit()
  }
   
  return(
    <S.ContactWrapper>
        <S.ContactTitle>Vamos Conversar?</S.ContactTitle>
        <S.ContactDescription>
            Deseja falar comigo? Como posso ajudá-lo? Simples! Basta me procurar nas redes sociais ou
            poderá preencher o formulário abaixo com seus dados e mensagem. Estarei respondendo
            mais breve possível. Desde já, agradeço pelo seu contato!
        </S.ContactDescription>
        <S.ContactForm  onSubmit={handleSubmit(onSubmit)} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <S.ContactInput type="hidden" name="bot-field" />
            <S.ContactInput type="hidden" name="form-name" value="contact" />            
            <S.LabelMain for="name"><S.LabelName>Nome:</S.LabelName>
                <S.ContactInput 
                  type="text" 
                  name="name" 
                  id="name" 
                  alt="Campo Nome" 
                  placeholder="Seu nome"
                  ref={register({
                    required: "Campo obrigatório",
                    maxLength: {
                        value: 30,
                        message: "No máximo 30 caracteres"
                    }
                  })}
                />
                {errors.name && <S.Error>{errors.name.message}</S.Error>}
            </S.LabelMain>               
            <S.LabelMain for="email"><S.LabelName>Email:</S.LabelName>
                <S.ContactInput 
                  type="email" 
                  name="email" 
                  id="email"  
                  alt="Campo Email" 
                  placeholder="Seu email" 
                  ref={register({
                   required: "Campo obrigatório",
                   pattern: {
                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                     message: "E-mail inválido"
                    }
                  })}
                />
                {errors.email && <S.Error>{errors.email.message}</S.Error>}
            </S.LabelMain>            
            <S.LabelMain for="message"><S.LabelName>Mensagem:</S.LabelName>
                <S.ContactArea 
                  name="message"
                  id="message"
                  rows="5"
                  cols="33"
                  alt="Campo Mensagem"
                  placeholder="Sua mensagem ..."
                  ref={register({
                    required: "Campo obrigatório",
                    maxLength: {
                        value: 180,
                        message: "No máximo 180 caracteres"
                    }
                  })}
                />
                {errors.message && <S.Error>{errors.message.message}</S.Error>}
            </S.LabelMain>            
            <S.ContactButtonSend type="submit" aria-label="Enviar Formulário Email"><S.IconSend/>Enviar</S.ContactButtonSend>
            <S.ContactButtonRest type="reset" aria-label="Apagar Formulário Email"><S.IconRest/>Apagar</S.ContactButtonRest>                    
        </S.ContactForm>
        <S.MarginDiv/>
    </S.ContactWrapper>
  )
}
export default ContactForm