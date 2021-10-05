import React, { useState } from "react";
import { FormContainer, TheForm, TheInput, LoginButton, InputDiv, CheckBoxDiv} from "../styled-components/FormStyle";

export default function Login() {
  const [formData, setFormData] = useState({});

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
        <div>
          <LoginButton>LOGIN</LoginButton>
        </div>
        <p>Forgot your password?</p>
      </TheForm>
    </FormContainer>
  );
}
