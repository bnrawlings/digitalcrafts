import React from 'react'
import { createClient } from '@supabase/supabase-js'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const supabase =createClient(
    "https://tjehpqqkyyhmeopnzygv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTIwNDQyNywiZXhwIjoxOTQ2NzgwNDI3fQ.CXkE6d0tVK1OUXfzphKqf1mCHwIBsh_ddp11S9doo3Y"
  );
export default function Login() {
    return (
        <div>
            <h1>Login To Continue</h1>
            <form>
                <input type="text" placeholder="username" name="username"></input>
                <input type="password" placeholder="password" name="password"></input>
                <input type="checkbox"></input>
                <button></button>
                <button>LOGIN</button>
            </form>
        </div>
    )
}
