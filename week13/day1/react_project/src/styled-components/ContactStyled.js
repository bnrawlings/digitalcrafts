import styled from "styled-components";

export const ContactDiv = styled.div`
background-color: white;
background-image: url("https://images.unsplash.com/photo-1506634064465-7dab4de896ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80") ;
-webkit-background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;

`
export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
/* border: solid black; */
height: 70vh;
width: 80vh;
/* background-color: #CCB28F; */
border-radius: 8px;
`
export const ContactInput = styled.input`
height:20rem;
width:30rem;
border-radius: 8px;
font-size: 25px;


`
export const ContactName = styled.input`
height: 1.5rem;
width: 15rem;
font-size: 25px;
border-radius: 8px;
`
export const Submit = styled.button`
width:8rem;
height:2rem;
border-radius: 8px;
font-size: 25px;
`