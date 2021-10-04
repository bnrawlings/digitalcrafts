import styled from "styled-components";

export const FormContainer = styled.div`
  /* grid-area: formcontainer; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  border: solid black;
  margin: 85px;
  background-color: #4120A9 ;
  font-family: 'Roboto', sans-serif;
  color: whitesmoke ;
  font-size: larger;
  border-radius: 15px;
  height: 37rem;
  width: 26rem;
  
`;
export const TheForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 15rem;
  position: relative;
  bottom: 100px;
  

`
export const TheInput = styled.input`
  height: 3rem;
  width: 20rem;
  border-radius: 15px;
  /* padding: 10px;
  margin: 20px; */

`
export const LoginButton = styled.button`
  height: 3rem;
  width: 20rem;
  border-radius: 15px;
  background: linear-gradient(-45deg, #ac46a1, #FBAA60);
  font-family: 'Roboto', sans-serif;
  color: whitesmoke ;
  font-size: larger;

`