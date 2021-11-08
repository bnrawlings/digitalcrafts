import React from 'react'
import { ProductCard } from '../styled-components/ProductsStyled'
import { useDispatch } from "react-redux";
import { ProductImg, AddButton } from '../styled-components/ProductsStyled';
import { moveProducts } from '../redux/actions/moveProducts';


export default function ProductsContainer(props) {
    const dispatch = useDispatch();
  const { item } = props


    return (
       
            <ProductCard>
                  <h2>{item?.name}</h2>,
                  <ProductImg src ={item?.img}/>,
                  <h3>{item?.price}</h3>
                  <AddButton onClick={()=> moveProducts(dispatch, item)}>Add To Cart</AddButton>
          </ProductCard>
        
    )
}