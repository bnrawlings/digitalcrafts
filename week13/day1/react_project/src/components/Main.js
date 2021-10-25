import React from 'react'
import { MainPageDiv, PhotoDiv } from '../styled-components/MainStyled'

export default function Main() {
    return (
        <MainPageDiv className="mainpage">
           <PhotoDiv>
               <h3>Photo 1</h3>
               <img src="https://images.unsplash.com/photo-1620733723572-11c53f73a416?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80" height="100%"/>
           </PhotoDiv>
           <PhotoDiv>
               <h3>Photo 2</h3>
           </PhotoDiv>
           <PhotoDiv>
               <h3>Photo 3</h3>
           </PhotoDiv>
        </MainPageDiv>
        
    )
}
