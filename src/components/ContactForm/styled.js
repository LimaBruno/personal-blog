import styled from "styled-components"
import media from "styled-media-query"

import { MailSend as Mail } from "@styled-icons/remix-line/MailSend"
import { CancelCircle as Cancel } from "@styled-icons/icomoon/CancelCircle"

export const ContactWrapper = styled.section`
    
`

export const ContactTitle = styled.h1`
   
`

export const ContactDescription = styled.p` 
 
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
    margin: 0px !important;            
`

export const ContactForm = styled.form`       
    
`

export const ContactInput = styled.input`
    padding: 1rem;
    border: 1px solid var(--texts);
    border-left: 5px solid var(--progress-bar);
    border-radius: 4px;    
    margin: 0.5rem 0 0 2rem;    
    :focus{
        background: var(--formColor);
        transition: 0.5s;
    }
    ${media.lessThan("large")`
        margin: 0 1rem;       
    `}
`

export const ContactArea = styled.textarea`
    padding: 1rem;
    border: 1px solid var(--texts);
    border-left: 5px solid var(--progress-bar);
    border-radius: 4px;    
    margin: 0.5rem 0 0 2rem;    
    :focus{
        background: var(--formColor);
        transition: 0.5s;
    }
    ${media.lessThan("large")`
        margin: 0 1rem; 
    `}
`

export const ContactButtonSend = styled.button`
    padding: 0.5rem;
    padding-right: 2rem;
    margin: 1.5rem 2rem 0 2rem;    
    border: 1px solid var(--texts);
    border-left: 5px solid var(--btnSendColor);
    border-radius: 4px;
    font-weight: bold;
    color: var(--btnColor);
    cursor: pointer;
    ${media.lessThan("large")`
        margin-left: 1rem;        
    `}
`

export const ContactButtonRest = styled.button`
    padding: 0.5rem;
    padding-right: 2rem;
    border: 1px solid var(--texts);
    border-left: 5px solid var(--btnResetColor);
    border-radius: 4px;
    font-weight: bold;
    color: var(--btnColor);
    cursor: pointer;
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

export const MarginDiv = styled.div`
  margin-bottom: 4rem;
  
  ${media.lessThan("large")`
    margin-bottom: 0;
  `}  
`