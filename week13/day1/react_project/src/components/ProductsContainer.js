import React from 'react'
import { ProductsDiv, ProductCard } from '../styled-components/ProductsStyled'
import { useSelector, useDispatch } from "react-redux";
import { ProductImg } from '../styled-components/ProductsStyled';



export default function ProductsContainer(props) {
    const dispatch = useDispatch();
  const { item } = props


    return (
       
            <ProductCard>
                  <h2>{item?.name}</h2>,
                  <ProductImg src ={item?.img}/>,
                  <h3>{item?.price}</h3>
                  <button>Add To Cart</button>
          </ProductCard>
        
    )
}