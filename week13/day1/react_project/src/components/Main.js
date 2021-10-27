import React from 'react'
import { MainPageDiv, PhotoDiv } from '../styled-components/MainStyled'
import img1 from "../assests/image0.jpeg"
import img2 from "../assests/image1.jpeg"
import img3 from "../assests/image2.jpeg"


export default function Main() {
    return (
        <MainPageDiv className="mainpage">
           <PhotoDiv>
               <img src={img1} height ="100%" width ="100%"/>
           </PhotoDiv>
           <PhotoDiv>
               <img src={img2} height ="100%" width ="100%"/>
           </PhotoDiv>
           <PhotoDiv>
               <img src={img3} height ="100%" width ="100%"/>
           </PhotoDiv>
        </MainPageDiv>
        
    )
}
