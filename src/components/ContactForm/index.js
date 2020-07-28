import React from "react"
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha"

import {
  ContactWrapper,
  ContactTitle,
  ContactDescription,
  ContactFormMain,
  ContactInput,
  ContactArea,
  LabelMain,
  LabelName,
  Error,
  Recaptcha,
  ContactButtonSend,
  IconSend,
  ContactButtonRest,
  IconRest,
  MarginDiv,
} from "./styled"

const ContactForm = () => {
  
  const { register, errors, handleSubmit } = useForm({
      mode: "onChange"
  });
  const onSubmit = (data, e) => { 
    console.log(JSON.stringify(data)) 
    e.target.submit()
  }

  const onChange = (value) => {
    console.log("Captcha value:", value);
  }
   
  return(
    <ContactWrapper>
        <ContactTitle>Vamos Conversar?</ContactTitle>
        <ContactDescription>
            Deseja falar comigo? Como posso ajudá-lo? Simples! Basta me procurar nas redes sociais ou
            poderá preencher o formulário abaixo com seus dados e mensagem. Estarei respondendo
            mais breve possível. Desde já, agradeço pelo seu contato!
        </ContactDescription>
        <ContactFormMain onSubmit={handleSubmit(onSubmit)} name="contact" method="post" data-netlify-recaptcha="true" netlify-honeypot="bot-field" data-netlify="true">
            <ContactInput type="hidden" name="bot-field" />
            <ContactInput type="hidden" name="form-name" value="contact" />            
            <LabelMain for="name"><LabelName>Nome:</LabelName>
                <ContactInput 
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
                {errors.name && <Error>{errors.name.message}</Error>}
            </LabelMain>               
            <LabelMain for="email"><LabelName>Email:</LabelName>
                <ContactInput 
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
                {errors.email && <Error>{errors.email.message}</Error>}
            </LabelMain>            
            <LabelMain for="message"><LabelName>Mensagem:</LabelName>
                <ContactArea 
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
                {errors.message && <Error>{errors.message.message}</Error>}
            </LabelMain>
            <Recaptcha>
            <ReCAPTCHA
              sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
              onChange={onChange}
            />
            </Recaptcha>
            <ContactButtonSend type="submit" aria-label="Enviar Formulário Email"><IconSend/>Enviar</ContactButtonSend>
            <ContactButtonRest type="reset" aria-label="Apagar Formulário Email"><IconRest/>Apagar</ContactButtonRest>                    
        </ContactFormMain>
        <MarginDiv/>
    </ContactWrapper>
  )
}
export default ContactForm