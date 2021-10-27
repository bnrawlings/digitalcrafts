import styled from "styled-components";

export const MainPageDiv = styled.div`
/* background-color: #CCB28F; */
font-size: 50px;
color: #4A4138;
display: flex;
flex-direction: row;
justify-content: center;
justify-content: space-around;
align-items: center;
margin-left:4rem;

`
export const PhotoDiv = styled.div`
border: solid black;
height: 60vh;
width: 20rem;
`
export const ImgMain = styled.img`
--webkit-animation: fadein 2s;
@-webkit-keyframes fadein {
    from {opacity: 0;}
    to { opacity: 1; }
}
`