import styled from "styled-components";

export const ProductsDiv = styled.div`
background-color: #CCB28F;
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 1rem;




`

export const ProductCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: black solid; */
height: 20rem;
width: 10%;
margin-top: 4rem;
margin-left:5rem;

`
export const ProductImg = styled.img`
height: 65%;
width: 8rem;
border-radius: 6px;
`
export const AddButton = styled.button`
height: 2rem;
width: 6rem;
border-radius: 6px;
background-color:#B0CBB0;
`