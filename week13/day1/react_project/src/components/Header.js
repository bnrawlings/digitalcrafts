import React from 'react'
import { HeaderDiv, WrapperDiv, WrapperLeft, WrapperRight } from '../styled-components/HeaderStyled'
import SideBar from './SideBar'

export default function Header() {
    return (
        <HeaderDiv className="headerdiv">
            <SideBar/>
           <WrapperDiv className="wrapper">
               <WrapperLeft className="wrapperLeft">
                    <h6>Left header wrapper</h6>
               </WrapperLeft>
               <WrapperRight className="wrapperRight">
            
               </WrapperRight>

           </WrapperDiv>
        </HeaderDiv>
    )
}
