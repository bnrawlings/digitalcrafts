

const initialState = {

}

const LoginInfo = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {...state, loginInfo: action.payload}
            
        default:
            return state
    }
}
export default LoginInfo