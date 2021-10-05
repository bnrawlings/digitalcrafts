import styled from "styled-components";

export const UserButton = styled.button`
  height: 40px;
  width: 90px;
  border: none;
  background-color: #5885af;
  color: #efebe0;
  border-radius: 2px;
`;

export const UserPicture = styled.img`
  border-radius: 30%;
  height: 60px;
  width: 60px;
`;

export const HeaderHeader = styled.h1`
  color: #6E6D6E;
  font-family: "Roboto", sans-serif;
  text-shadow: 0 0 3px #DAE3E6, 0 0 5px #FEEFDE;

  
`;
export const HeaderContainer = styled.div`
  background-color: #DFDACD;
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: flex-end; */
  height: 10rem;
 
`;
export const WelcomeDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: flex-start;


`