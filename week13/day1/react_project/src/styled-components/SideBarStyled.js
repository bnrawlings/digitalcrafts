import styled from "styled-components";
import {Link} from "react-router-dom"

export const SidBarDiv = styled.div`
background: #B0CBB0;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`
export const SidebarIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
color: black;
`
export const SidebarNav = styled.nav`
background: white;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0; 
left: ${({ sidebar }) => (sidebar ? "0": "-100%")}; 
transition: 350ms;
z-index:10;
border: solid black;
`
export const SidebarWrap = styled.div`
width: 100%;
`

export const SidebarLink = styled(Link)`
display: flex;
color: black;
/* justify-content: space-between; */
align-items: center ;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;

&:hover {
    background: grey;
    border-left: 4px solid;
    cursor: pointer;
}
`