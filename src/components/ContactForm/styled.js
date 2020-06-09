import styled from "styled-components"
import media from "styled-media-query"
import transitions from '../../styles/transitions'

import { MailSend as Mail } from "@styled-icons/remix-line/MailSend"
import { CancelCircle as Cancel } from "@styled-icons/icomoon/CancelCircle"

export const ContactWrapper = styled.section`
    margin: auto;
    max-width: 70rem;
    padding: 1rem 5rem;
    transition: ${transitions.ALL};

    ${media.lessThan("large")`
        padding: 0;
        max-width: 100%;
    `}
`
export const ContactTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    padding: 0 0 3rem;
    margin: 1rem auto;

    ${media.lessThan("large")`
    display: inline-block;
    justify-content: auto;
    font-size: 2.5rem;
    line-height: 1.1;
    padding: 0 1rem;
    margin: 0 auto;
    `}
`

export const LabelMain = styled.label`
    display: flex;
    flex-direction: column;    
    color: var(--texts);        
`

export const ContactInput = styled.input`
    width: 50%;
    padding: 10px 20px;
    margin: 20px 0;
    display: inline-block;
    border: 2px solid var(--texts);
    border-left: 5px solid var(--progress-bar);
    border-radius: 4px;
    :focus {
        background-color: var(--formColor);
        transition: 0.5s;
    }
    ${media.lessThan("600px")`
        width: 100%;
        margin-left: 0;
               
    `}  
`

export const ContactArea = styled.textarea`
    width: 50%;
    padding: 10px 20px;
    margin: 20px 0;
    display: inline-block;
    border: 2px solid var(--texts);
    border-left: 5px solid var(--progress-bar);
    border-radius: 4px;
    :focus {
        background-color: var(--formColor);
        transition: 0.5s;
    }
    ${media.lessThan("600px")`
        width: 80%;       
    `}
`
export const ContactButtonSend = styled.button`
    padding: 0.5rem;
    margin-right: 1rem;
    border: 2px solid var(--texts);
    border-left: 5px solid #1fa1f2;
    border-radius: 4px;
`
export const ContactButtonRest = styled.button`
    padding: 0.5rem;
    border: 2px solid var(--texts);
    border-left: 5px solid #d63031;
    border-radius: 4px;
`
export const IconSend = styled(Mail)`
    width: 15px;
    margin: -2px 10px 0 0;
    color: var(--highLight);
`

export const IconRest = styled(Cancel)`
    width: 15px;
    margin: -2px 10px 0 0;
    color: #d63031;
`