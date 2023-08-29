import styled from "styled-components"
import media from "styled-media-query"

import { MailSend as Mail } from "@styled-icons/remix-line/MailSend"

export const ContactWrapper = styled.section`
`
export const ContactTitle = styled.h1`
`
export const ContactDescription = styled.p` 
`

export const LabelMain = styled.label`
    display: flex;
    flex-direction: column;    
    padding: 10px 0 10px 0;              
`

export const LabelName = styled.p`
    display: flex;
    flex-direction: column;       
    margin: 0px !important;
    font-weight: bold !important;             
`

export const ContactFormMain = styled.form`       
`

export const ContactInput = styled.input`
    padding: 1rem;
    border: 1px solid var(--formBorder);
    border-left: 5px solid var(--progress-bar);
    border-radius: 4px;    
    margin: 0.5rem 20rem 0 1.5rem;    
    :focus{
        background: var(--formColor);
        transition: 0.5s;
    }
    ${media.lessThan("large")`
        margin: 0 1rem;       
    `}
`

export const Error = styled.span`
    color: #bf1650;
    font-weight: 600;
    margin: 0.5rem 1.5rem;
    :before {
        display: inline;
        content: "⚠ ";
    }
`

export const ContactArea = styled.textarea`
    padding: 1rem;
    border: 1px solid var(--formBorder);
    border-left: 5px solid var(--progress-bar);
    border-radius: 4px;    
    margin: 0.5rem 20rem 0 1.5rem;   
    :focus{
        background: var(--formColor);
        transition: 0.5s;
    }
    ${media.lessThan("large")`
        margin: 0 1rem; 
    `}
`

export const ContactButtonSend = styled.button`
    padding: 1rem;
    padding-right: 2rem;
    margin: 0rem 2rem 0 1.5rem;    
    border: 1px solid var(--formBorder);
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    color: var(--btnColor);
    background-color: #1fa1f2;
    cursor: pointer;
    ${media.lessThan("large")`
        margin-left: 1rem;        
    `}
`

export const ContactButtonRest = styled.button`
    padding: 1rem;
    padding-right: 2rem;
    border: 1px solid var(--btnBorder);
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    background-color: #d63031;
    color: var(--btnColor);
    cursor: pointer;
`

export const IconSend = styled(Mail)`
    width: 20px;
    margin: -2px 10px 0 0;
    color: var(--btnColor);
`

export const Recaptcha = styled.div`
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
  ${media.lessThan("large")`
    margin-left: 1rem;
  `}  
`