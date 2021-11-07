import React from 'react'
import { ProductsDiv, ProductCard } from '../styled-components/ProductsStyled'
import { useSelector, useDispatch } from "react-redux";



export default function ProductsContainer(props) {
    const dispatch = useDispatch();
  const { item } = props


    return (
       
            <ProductCard>
                  <h2>{item?.name}</h2>,
                  <img src ={item?.img}/>,
                  <h3>{item?.price}</h3>
          </ProductCard>
        
    )
}