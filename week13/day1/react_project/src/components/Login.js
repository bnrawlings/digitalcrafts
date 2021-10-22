import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormDiv, LoginForm, LoginInput, LoginResButton, InputDiv, CheckBoxDiv, ButtonDiv} from '../styled-components/LoginStyled';
import { RegisterUser } from "../redux/actions/LoginFormActions";


const supabase =createClient(
    "https://tjehpqqkyyhmeopnzygv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTIwNDQyNywiZXhwIjoxOTQ2NzgwNDI3fQ.CXkE6d0tVK1OUXfzphKqf1mCHwIBsh_ddp11S9doo3Y"
  );
export default function Login(props) {
    const [formData, setFormData] = useState({username: "", password: ""});
    const history = useHistory();
    const dispatch = useDispatch()
    
    console.log(formData)
    //LOGIN USER
    const login = async (e) =>{
      e.preventDefault()
      const { user, session, error } = await supabase.auth.signIn({
        email: formData.username,
        password: formData.password,
      });
      if(session){
      history.push("/dashboard");
      dispatch({type: RegisterUser, payload : formData.username})
      
  
    } else{
      alert(error.message)
    }
    };
    //REGISTER USER
    const register = async (e) => {
      e.preventDefault()
      const { user, session, error } = await supabase.auth.signUp({
        email: formData.username,
        password: formData.password,
      });
      if(user){
        history.push("/login");
      } else{
        alert(error.message)
      }
      console.log(user, session)
    return (
        <FormDiv>
            <h1>Login To Continue</h1>
            <LoginForm>
                <InputDiv>
                <LoginInput
                onChange={(e) =>
                    setFormData({ ...formData, [e.target.name]: e.target.value })
                  }
                type="text" placeholder="username" name="username"></LoginInput>
                </InputDiv>
                <InputDiv>
                <LoginInput 
                onChange={(e) =>
                    setFormData({ ...formData, [e.target.name]: e.target.value })
                  }
                type="password" placeholder="password" name="password"></LoginInput>
                </InputDiv>
                <CheckBoxDiv>
                <input type="checkbox"/>Remember Me
                </CheckBoxDiv>
                {/* Turnery for switching between login/register */}
               { props.register ? ( <ButtonDiv>
                <LoginResButton 
                onClick={(e) =>register(e)}
                >REGISTER</LoginResButton>
                </ButtonDiv>  
               ) : (
                <ButtonDiv>
                  <LoginResButton 
                  onClick={(e) =>login(e)}
                  >LOGIN</LoginResButton>  
                </ButtonDiv>    
               )};
               <p>Forgot your Password?</p>
            </LoginForm>
        </FormDiv>
    );
  };
};
