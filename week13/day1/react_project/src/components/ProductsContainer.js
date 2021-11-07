import React from 'react'
import { ProductsDiv, ProductCard } from '../styled-components/ProductsStyled'
import { useSelector, useDispatch } from "react-redux";
import TheProducts from '../redux/reducers/products';


export default function ProductsContainer(props) {
    const dispatch = useDispatch();
  const { products } = props
  // const products = useSelector((state) => state.TheProducts)

    return (
        <ProductsDiv className="products">
            <ProductCard>
          
                  <h2>{products?.name}</h2>,
                  <img src ={products?.img}/>,
                  <h3>{products?.price}</h3>
              
          
          </ProductCard>
        </ProductsDiv>
    )
}