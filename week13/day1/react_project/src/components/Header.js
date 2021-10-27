import React from 'react'
import { HeaderDiv, WrapperDiv, WrapperLeft, WrapperRight } from '../styled-components/HeaderStyled'
import SideBar from './SideBar'

export default function Header() {
    return (
        <HeaderDiv className="headerdiv">
             <h1>Tru Skin</h1>
            <SideBar/>
         <WrapperLeft>
            <h1>Your journey starts here</h1>
         </WrapperLeft>
        </HeaderDiv>
    )
}
