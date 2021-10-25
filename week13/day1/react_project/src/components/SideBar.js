import React from 'react'
import { SidBarDiv, SidebarIcon } from '../styled-components/SideBarStyled'

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const SideBar = () => {
    return (
        <> 
        <SidBarDiv>
            <SidebarIcon>
                <FaIcons.FaBars/>
            </SidebarIcon>
        </SidBarDiv>
        
        </>
    )
}

export default SideBar


