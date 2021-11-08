import React from 'react'
import { useSelector } from 'react-redux';
import CartContainer from './CartContainer';
import { CartDiv } from '../styled-components/CartStyled';

export default function Cart() {
    const cartFill = useSelector((state) => state.cart)
  
    console.log(cartFill)

    return (
        <CartDiv>
            {cartFill?.map((item) => (
                <CartContainer item ={item}/>
            ))}
        </CartDiv>
    )
}
