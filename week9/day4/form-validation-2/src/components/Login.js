import React, { useState } from "react";
import { FormContainer, TheForm, TheInput, LoginButton } from "../styled-components/FormStyle";

export default function Login() {
  const [formData, setFormData] = useState({});

  return (
    <FormContainer>
        <h1>Login to continue! </h1>
        <TheForm>
        <TheInput
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="username"
          name="username"
          value={formData?.username}
        />
        <TheInput
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="password"
          placeholder="password"
          name="password"
          value={formData?.password}
        />
         <input type='radio'/> 
        <div>
          <LoginButton>LOGIN</LoginButton>
        </div>
        <p>Forgot your password?</p>
      </TheForm>
    </FormContainer>
  );
}
