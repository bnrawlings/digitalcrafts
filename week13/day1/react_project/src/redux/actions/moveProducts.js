import { ADD_TO_CART } from "../action-types/moveProducts-types"
export const moveProducts = () => {
    dispatch ({ type:ADD_TO_CART , payload: {...state}})
}