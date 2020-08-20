import React, { useRef, useEffect, useState } from "react"
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

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY
const encode = (data) => {
	return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
}
const ContactForm = () => {
	const { register, handleSubmit, errors, setValue } = useForm({
		mode: "onChange"
	})
	const [ feedbackMsg, setFeedbackMsg ] = useState(null)
	//const [ captchaMsg, setCaptchaMsg ] = useState(null)
	let captchaRef = useRef(null)

	useEffect(
		() => {
			register({ required: 'Required', name: 'g-recaptcha-response' })
		},
		[ register ]
	)
	const onSubmit = (data, e) => {
		e.preventDefault()
		const captchaValue = captchaRef.current.getValue()
		
		if (!captchaValue) {
			console.log('CAPTCHA Missing!');
			//setCaptchaMsg('Selecione "Não sou um robô"')
			setFeedbackMsg('⚠ Selecione "Não sou um robô"')
			return;
		}
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'contact',
				'g-recaptcha-response': captchaValue,
				...data
			})
		})
			.then((response) => {
				// console.log(response);
				e.target.reset();
				setFeedbackMsg(`😀 Sua mensagem foi enviada com sucesso!`)
			})
			.catch((error) => {
				setFeedbackMsg('😥 Oops, Erro! Por favor, tente novamente mais tarde.')
				console.log(error)
			})
	}
	return (
    <ContactWrapper>
        <ContactTitle>Vamos Conversar?</ContactTitle>
        <ContactDescription>
            Deseja falar comigo? Como posso ajudá-lo? Simples, basta preencher o formulário abaixo com seus dados e mensagem. Estarei respondendo
            mais breve possível. Desde já, agradeço pelo seu contato!
        </ContactDescription>
		<ContactFormMain
			onSubmit={handleSubmit(onSubmit)}
			name="contact"
			method="post"
			data-netlify-recaptcha="true"
			netlify-honeypot="bot-field"
			data-netlify="true"
		>
			<ContactInput type="hidden" name="bot-field"/>
			<ContactInput type="hidden" name="form-name" value="contact"/>
			<LabelMain for="name"><LabelName>Nome:</LabelName>
				<ContactInput
				  type="text"
				  id="name"
				  name="name"
				  placeholder="Seu nome"
				  aria-label="name"
				  ref={register({
					required: "Campo NOME obrigatório",
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
				  type="text"
				  id="email"
				  placeholder="Seu email" 
				  name="email"
				  aria-label="email"
				  ref={register({
					required: "Campo EMAIL obrigatório",
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
          		  aria-label="message"
          		  placeholder="Sua mensagem ..."
          		  ref={register({
            		required: "Campo MENSAGEM obrigatório",
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
				  name="g-recaptcha-response"
				  ref={captchaRef}
				  sitekey={RECAPTCHA_KEY}
				  onChange={(val) => {
					setValue('g-recaptcha-response', val, true)
				  }}
				/>
      		</Recaptcha>
			{/*{captchaMsg && <Error>{captchaMsg}</Error>}
      		<br/>*/}
      		{feedbackMsg && <h3>{feedbackMsg}</h3>}
      		<br/>
			<ContactButtonSend type="submit" aria-label="Enviar Formulário Email"><IconSend/>Enviar</ContactButtonSend>
      		<ContactButtonRest type="reset" aria-label="Apagar Formulário Email"><IconRest/>Apagar</ContactButtonRest>
		</ContactFormMain>
    	<MarginDiv/>
    </ContactWrapper>
	)
}

export default ContactForm