import styled from "styled-components"
import media from "styled-media-query"

import transitions from '../../styles/transitions'

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 2px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  transition: ${transitions.ALL};

  ${media.lessThan("large")`
    border: none;
    border-bottom: 2px solid var(--borders);
    align-items: flex-start;
    height: auto;
    padding: 1rem 1rem;
    width: 100%;
  `}
`

export const MenuIcon = styled.button`
  display: none;
  ${media.lessThan("large")`  
    position: fixed;
    top: 1.4rem;
    right: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;
    
    div {
      width: 1.5rem;
      height: 0.2rem;
      background: black;
      border-radius: 5px;
      transform-origin: 1px;
      position: relative;
      transition: opacity 300ms, transform 300ms;
      
      :first-child {
        transform: ${({nav}) => (nav ? "rotate(45deg)" : "rotate(0)")}
      }

      :nth-child(2) {
        opacity: ${({nav}) => (nav ? "0" : "1")}
      }

      :nth-child(3) {
        transform: ${({nav}) => (nav ? "rotate(-45deg)" : "rotate(0)")}
      }
    }
  `}
`