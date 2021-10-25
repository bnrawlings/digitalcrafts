import React from 'react';
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
      title : "Home",
      path : "/",
      icon :  <AiIcons.AiFillHome/>, 
      iconClosed: <RiIcons.RiArrowDownSFill/>,
      iconOpened: <RiIcons.RiArrowUpSFill/>,},
   
    { title : "Products",
      path : "/products",
      icon :  <AiIcons.AiFillShopping/>, },   
  
   
    { title : "Appointments",
      path : "/appointments",
      icon :  <BiIcons.BiCalendarPlus/>, },
         
          
    { title : "Contact",
      path : "/contact",
      icon :  <FiIcons.FiMessageCircle/>, },
         
         
    { title : "Cart",
      path : "/cart",
      icon :  <FiIcons.FiShoppingCart/>, },
          
    ]