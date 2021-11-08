import React from 'react';
import { ADD_TO_CART, REMOVE_FROM_CART, REFRESH_CART } from '../action-types/moveProducts-types';

const initialState = []
const cart = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        default:
            return state;
        case REMOVE_FROM_CART:
            const removeItem = state;
            const removeItemFiltered = removeItem.filter((item)=> item !== action.payload);
            return removeItemFiltered;  
        case REFRESH_CART:
            state = []
            return [...state]
        default:
            return state
    }
}
    
export default cart