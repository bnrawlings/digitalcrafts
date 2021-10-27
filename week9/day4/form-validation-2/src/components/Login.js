import React, { useState } from "react";
import { FormContainer, TheForm, TheInput, LoginButton, InputDiv, CheckBoxDiv} from "../styled-components/FormStyle";
import { createClient } from '@supabase/supabase-js'
import { useHistory } from "react-router-dom";
import UserData from "../reducers/userData";
import { useDispatch } from "react-redux";
//linking database via Supabase
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
    dispatch({type: "SET_USER", payload : formData.username})
    console.log(UserData)

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
  };

  return (
    <FormContainer>
        <h1>Login to continue! </h1>
        <TheForm>
          <InputDiv>
        <TheInput
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="username"
          name="username"
          value={formData?.username}
        />
          </InputDiv>
        <InputDiv>
        <TheInput
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="password"
          placeholder="password"
          name="password"
          value={formData?.password}
        />
          </InputDiv>
        <CheckBoxDiv>
         <input type='checkbox'/> Remember me
         </CheckBoxDiv>
       {props.register ? (<div>
          <LoginButton onClick={(e) =>register(e)}>Register</LoginButton>
        </div>
        ):(
        <div>
          <LoginButton onClick={(e) =>login(e)}>LOGIN</LoginButton>
        </div> )}
        <p>Forgot your password?</p>
      </TheForm>
    </FormContainer>
  );
}
