import styled from "styled-components";

export const FormContainer = styled.div`
  /* grid-area: formcontainer; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  border: 1px inset #FEEFDE;
  margin: 85px;
  background-color: #DFDACD ;
  font-family: 'Roboto', sans-serif;
  color: #6E6D6E ;
  text-shadow: 0 0 3px #DAE3E6, 0 0 5px #FEEFDE;
  font-size: larger;
  border-radius: 15px;
  height: 37rem;
  width: 26rem;
  position: relative;
  left: 10rem;
  
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
  padding: 10px;
  margin: 20px;

`
export const LoginButton = styled.button`
  height: 3rem;
  width: 20rem;
  border-radius: 15px;
  background: linear-gradient(-45deg, #DAE3E6, #DFDACD);
  font-family: 'Roboto', sans-serif;
  color: #6E6D6E ;
  text-shadow: 0 0 3px #DAE3E6, 0 0 5px #FEEFDE;
  font-size: larger;
  position: relative;
  left: 32px;

`
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`
export const CheckBoxDiv = styled.div`
  justify-content: center;
  position: relative;
  left: 32px;



`