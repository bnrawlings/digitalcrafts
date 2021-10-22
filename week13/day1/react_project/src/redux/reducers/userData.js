import { GET_USER } from "../action-types/loginFormaction-types"
const initialState = {}

const UserData = (state=initialState, action) => {
    switch(action.type){
        case GET_USER:
            return {...action.payload}

    default:
        return state
    }
}
export default UserData