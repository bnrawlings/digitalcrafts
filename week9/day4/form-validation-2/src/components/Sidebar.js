import React from "react";
import { SidebarContainer } from "../styled-components/SidebarStyle";
import {Link} from 'react-router-dom'

export default function Sidebar(props) {
const viewSidebar = props.viewSidebar
  return (
    <>
    {viewSidebar? <SidebarContainer>
      <Link to='/'>
        <p>Home</p>
        </Link>
      <Link to='/form'>
      <p>Form</p>
        </Link>
      <Link to='/dashboard'>
      <p>Dashboard</p>
        </Link>
        <Link to='/account'>
        <p>Account</p>
        </Link>
        <Link to='garage'>
        <p>Garage</p>
        </Link>
    </SidebarContainer>
  :""}
  </>
    
  );
}