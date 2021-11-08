import { ADD_TO_CART, REMOVE_FROM_CART, REFRESH_CART } from "../action-types/moveProducts-types";



export const moveProducts = (dispatch, ListProducts, cart) => {
    dispatch ({ type:ADD_TO_CART , payload: ListProducts, cart})
}
export const removeProducts = (dispatch, ListProducts) =>{
    dispatch({ type: REMOVE_FROM_CART, payload: ListProducts})
}
export const emptyCart = (dispatch) => {
    dispatch ({ type: REFRESH_CART})
}