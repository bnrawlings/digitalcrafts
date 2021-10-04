import styled from "styled-components";
import { Link } from "react-router-dom";
export const SidebarContainer = styled.div`
  display:flex;
  flex-direction: column;
  grid-area: sidebar;
  background-color: #DFDACD;
  min-width: 200px;
  max-width: 230px;
  text-align: center;
`;

export const TheSidebarLink = styled(Link)`
  border: solid black;
  text-align: center;
   width: 100%;
   height: 2rem;
   font-size:16px;
   font-weight:300;
   position:relative;
   line-height:40px;
   margin-top:10px;
   overflow:hidden;
   margin-left:5%;
   cursor:pointer;
`;
  
  
  
  
  
  
  
  



