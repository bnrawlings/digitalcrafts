import React from 'react'
import { useDispatch } from "react-redux";
import { ItemsDiv, CImgDiv, CartImg, ItemDetails, Price } from '../styled-components/CartStyled';


export default function CartContainer(props) {
    const { item } = props
    const dispatch = useDispatch()
    return (
        <ItemsDiv>
            <CImgDiv>
                <CartImg src={item?.img}/>
            </CImgDiv>
            <ItemDetails>
                <h3>{item?.name}</h3>
            </ItemDetails>
            <Price>
                <h4>{item?.price}</h4>
                <button>X</button>
            </Price>
        </ItemsDiv>
    )
}