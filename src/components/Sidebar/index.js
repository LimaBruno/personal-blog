import React, { useState } from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Sidebar = () => {
    const [ nav, showNav ] = useState(false)
    return(
        <S.SidebarWrapper>
            <Profile />
            <SocialLinks />
            <S.MenuIcon nav={nav} onClick={() => showNav(!nav)} alt="Menu">
                <div/>
                <div/>
                <div/>
            </S.MenuIcon>
            <MenuLinks nav={nav} />    
        </S.SidebarWrapper>
    )   
}

export default Sidebar