import { SET_USER } from "../action-types/loginFormaction-types";

export const LoginUser = (dispatch) => {
    dispatch ({type: SET_USER})
}