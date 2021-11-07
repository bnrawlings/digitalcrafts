import { ADD_TO_CART } from "../action-types/moveProducts-types";
import { data } from "./data";
const initialState = {
    products : data
}

const Products = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default Products