import { SET_USER, GET_USER } from "../action-types/loginFormaction-types";


export const RegisterUser = (dispatch) => {
    dispatch ({type: SET_USER})
}
export const LoginUser = (dispatch) => {
    dispatch ({type: GET_USER})
}