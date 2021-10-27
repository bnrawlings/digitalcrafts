import { combineReducers } from 'redux'
import SignUpFormData from './signUpForm';
import Counter from './counter';

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  
  const rootReducer = combineReducers({
    SignUpFormData,
    Counter,
  })
    
 
  export default rootReducer;