import styled from "styled-components";

export const CartDiv = styled.div`
background-color: #CCB28F;
width: 100vw;
display: grid;
grid-template-columns: 1fr;
position: absolute;
margin-top: 4.7rem;
`
export const ItemsDiv = styled.div`
display: grid;
    grid-template-areas:
    "picture details"
    "picture details"
    /* "picture quantity" */
    "picture price";
    grid-template-rows: auto;
    border: 1px solid lightgray;
    padding: .5rem;
    margin: .5rem;
@media (min-width: 600px) and (max-width: 1000px){
    grid-template-areas:
    "picture details price";
}
 @media (min-width: 1001px) {
    grid-template-areas:
    "picture details price";
    
 }
`
export const CImgDiv = styled.div`
grid-area: picture;
`
export const CartImg = styled.img`
  width: 170px;
    height: 125px;
    margin-right: 0;
    margin-left: 0;
    @media (min-width: 600px) and (max-width: 1000px){
        width: 200px;
        height: 140px;
}
    @media (min-width: 1001px) {
        width: 250px;
        height: 190px;
    
 }
`
export const ItemDetails = styled.div`
grid-area: details;
    @media (min-width: 600px) and (max-width: 1000px){
       margin-top: 2rem;
}
    @media (min-width: 1001px) {
    margin-top: 2rem;
    
 }
`
export const Price = styled.div`
grid-area: price;
    display: flex;
    justify-content: space-evenly;
    
    @media (min-width: 600px) and (max-width: 1000px){
       margin-top: 2rem;
}
    @media (min-width: 1001px) {
    margin-top: 2rem;
    
 }
`
