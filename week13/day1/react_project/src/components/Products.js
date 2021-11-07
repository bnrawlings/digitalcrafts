import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../redux/action-types/moveProducts-types'
import { ProductsDiv } from '../styled-components/ProductsStyled'
import ProductsContainer from './ProductsContainer'

export default  function Products() {
    const products = useSelector((state) => state.ListProducts);
    const dispatch = useDispatch();
    console.log(products)
    return (
        <ProductsDiv>
          {/* {products?.map((item) => (
            <ProductsContainer item ={item}/>
          ))} */}
            
        </ProductsDiv>
    )
}


