import styled from "styled-components"
import media from "styled-media-query"

import transitions from '../../styles/transitions'

import { MailSend as Mail } from "@styled-icons/remix-line/MailSend"
import { CancelCircle as Cancel } from "@styled-icons/icomoon/CancelCircle"

export const ContactWrapper = styled.section`
    align-items: center; 
    max-height: 70rem;
    padding: 0 auto;
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
    font-size: 2rem;
    font-weight: 700;
    margin-left: -0.7rem !important;
    color: var(--texts);
    ${media.lessThan("large")`    
        margin-left: 0.6rem;
    `}
`

export const ContactDescription = styled.p`
    font-size: 2rem;
    font-weight: 200;
    margin-left: -10px !important;
    color: var(--texts);

    ${media.lessThan("large")`
        font-size: 1.6rem;
        line-height: 1.3;
        padding: 0 1rem;
    `}
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
    font-weight: bold;
    margin: -5px !important;
    ${media.lessThan("large")`
        margin-left: 0.5rem;        
    `}          
`

export const ContactForm = styled.form`
        width: auto;
    ${media.lessThan("large")`
        width: 100%;
    `}
`

export const ContactInput = styled.input`
    padding: 1rem;
    border: 1px solid var(--texts);
    border-radius: 4px;
    border-left: 5px solid var(--progress-bar);
    margin-left: 0.7rem;
    :focus{
        background: var(--formColor);
        transition: 0.5s;
    }
    ${media.lessThan("large")`
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    `}
`

export const ContactArea = styled.textarea`
    padding: 1rem;
    border: 1px solid var(--texts);
    border-radius: 4px;
    border-left: 5px solid var(--progress-bar);
    margin-left: 0.7rem;
    :focus{
        background: var(--formColor);
        transition: 0.5s;
    }
    ${media.lessThan("large")`
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    `}
`

export const ContactButtonSend = styled.button`
    padding: 0.5rem;
    padding-right: 2rem;
    margin: 1.5rem;
    margin-left: 0.7rem;
    margin-right: 2rem;
    border: 1px solid var(--texts);
    border-left: 5px solid var(--btnSendColor);
    border-radius: 4px;
    font-weight: bold;
    color: var(--btnColor);
    cursor: pointer;
    ${media.lessThan("large")`
        margin-left: 0.5rem;        
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