import React from 'react'
import { ProductsDiv, ProductCard } from '../styled-components/ProductsStyled'
import { useSelector } from "react-redux";
import TheProducts from '../redux/reducers/products';


export default function Products() {
  const products = useSelector(state => state.products)

    return (
        <ProductsDiv className="products">
            <ProductCard>
          {/* {products.map((product) => {
              return (
                  <h2>{products.name}</h2>,
                  <img src ={products.img}/>,
                  <h3>{products.price}</h3>
              )
          })} */}
          </ProductCard>
        </ProductsDiv>
    )
}
