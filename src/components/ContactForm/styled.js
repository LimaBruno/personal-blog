import styled from "styled-components"
import media from "styled-media-query"

import transitions from '../../styles/transitions'

import { MailSend as Mail } from "@styled-icons/remix-line/MailSend"
import { CancelCircle as Cancel } from "@styled-icons/icomoon/CancelCircle"

export const ContactWrapper = styled.section`
  align-items: center; 
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  transition: ${transitions.ALL};


  ${media.lessThan("large")`
  font-size: 1rem;
  min-height: auto;
  min-width: auto;
  padding: .2rem .5rem;
  margin-bottom: .7rem;
  `} 
`
export const ContactTitle = styled.h1`
font-size: 1.6rem;
font-weight: 700;
margin: 0.2rem 0 0.5rem;
`

export const LabelMain = styled.label`
    display: flex;
    flex-direction: column;    
    color: var(--texts);
    padding: 10px 0 10px 0;
          
`

export const LabelName = styled.p`
    display: flex;
    flex-direction: column;    
    color: var(--texts);
    padding: 10px 0 10px 0;
          
`

export const ContactForm = styled.form`
    width: 80%;
    ${media.lessThan("large")`
        width: 100%;
    `}
`

export const ContactInput = styled.input`
padding: 1rem;
border: 1px solid var(--texts);
border-radius: 4px;
border-left: 5px solid var(--progress-bar);
:focus{
    background: var(--formColor);
    transition: 0.5s;
}
`

export const ContactArea = styled.textarea`
padding: 1rem;
border: 1px solid var(--texts);
border-radius: 4px;
border-left: 5px solid var(--progress-bar);
:focus{
    background: var(--formColor);
    transition: 0.5s;
}
`
export const ContactButtonSend = styled.button`
    padding: 0.5rem;
    margin-top: 1.5rem;
    margin-right: 1rem;
    border: 1px solid var(--texts);
    border-left: 5px solid #1fa1f2;
    border-radius: 4px;
    font-weight: bold;
`
export const ContactButtonRest = styled.button`
    padding: 0.5rem;
    border: 1px solid var(--texts);
    border-left: 5px solid #d63031;
    border-radius: 4px;
    font-weight: bold;
`
export const IconSend = styled(Mail)`
    width: 15px;
    margin: -2px 10px 0 0;
    color: var(--highlight);
`

export const IconRest = styled(Cancel)`
    width: 15px;
    margin: -2px 10px 0 0;
    color: #d63031;
`