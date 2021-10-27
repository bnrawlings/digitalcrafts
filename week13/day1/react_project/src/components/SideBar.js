import React, { useState } from 'react'
import { SidBarDiv, SidebarIcon, SidebarNav, SidebarWrap, SidebarLink } from '../styled-components/SideBarStyled'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from '../redux/reducers/sideBarData';
import { Link } from 'react-router-dom';


const SideBar = () => {
    const [sidebar, SetSidebar] = useState(false)

    const showSidebar = () => SetSidebar (!sidebar)

    return (
        <> 
        <SidBarDiv>
            <SidebarIcon to ="#">
                <FaIcons.FaBars onClick={showSidebar} />
            </SidebarIcon>
        </SidBarDiv>
        <SidebarNav sidebar ={sidebar}>
            <SidebarWrap>
            <SidebarIcon to ="#">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
            </SidebarIcon>
            {SidebarData.map((link) => {
                return <SidebarLink to={link.path}>{link.icon} {link.title}</SidebarLink>
            })}
            </SidebarWrap>
        </SidebarNav>
        
        </>
    )
}

export default SideBar


