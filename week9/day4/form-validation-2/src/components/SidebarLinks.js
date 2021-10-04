import React from "react";
// import { TheSidebarLink } from "../styled-components/SidebarStyle";
import { Link } from 'react-router-dom'
export default function SidebarLinks(props) {
  return (
    <>
      <Link to={props.linkData.path}>{props.linkData.name}</Link>
    </>
  );
}