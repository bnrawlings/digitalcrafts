import React from 'react';
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
      title : "Home",
      path : "/home",
      icon :  <AiIcons.AiFillHome/>, 
      iconClosed: <RiIcons.RiArrowDownSFill/>,
      iconOpened: <RiIcons.RiArrowUpSFill/>,},
   
    { title : "Products",
      path : "/products",
      icon :  <AiIcons.AiFillShopping/>, },   
         
          
    { title : "Contact",
      path : "/contact",
      icon :  <RiIcons.RiMessageFill/>, },
         
         
    { title : "Cart",
      path : "/cart",
      icon :  <FaIcons.FaShoppingCart/>, },
          
    ]