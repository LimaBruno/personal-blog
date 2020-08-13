import React, { useState } from "react"

import Profile from "../Profile"
//import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import {
  SidebarWrapper,
  MenuIcon,
} from "./styled"

const Sidebar = () => {
    const [ nav, showNav ] = useState(false)
    return(
        <SidebarWrapper>
            <Profile />
            {/* <SocialLinks /> */}
            <MenuIcon nav={nav} onClick={() => showNav(!nav)} aria-label="Menu">
                <div/>
                <div/>
                <div/>
            </MenuIcon>
            <MenuLinks nav={nav} />    
        </SidebarWrapper>
    )   
}

export default Sidebar