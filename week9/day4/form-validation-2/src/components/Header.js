import React, { useEffect, useState } from "react";
import {
  UserButton,
  HeaderHeader,
  HeaderContainer,
  UserPicture,
  WelcomeDiv,
} from "../styled-components/HeaderStyle";
import { useDispatch, useSelector } from "react-redux";
import UserData from "../reducers/userData";

const URL = "https://randomuser.me/api/";


export default function Header(props) {
  console.log(props)
  const viewSidebar = props.viewSidebar
  const setViewSidebar = props.setViewSidebar
  
  const [counter, setCounter] = useState(0);
  const user = useSelector((state) => state.UserData);
  console.log(user)
  // useEffect is a hook
  // hook that fires when the component is mounted

  const dispatch = useDispatch()
  useEffect(() => {
    const getNewsData = async () => {
      const getTheNews = await fetch(URL, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonNews = await getTheNews.json();
      console.log(jsonNews);
      dispatch({
        type: "GET_USER",
        payload: { ...jsonNews.results[0] },
      });
    };

    getNewsData();
    return () => {};
  }, [counter, dispatch]);

  // useEffect(()=>{}) fire when we mount and anytime we call useState

  // useEffect(()=>{},[]) fire when we mount and only when we mount

  // useEffect(()=>{},[variable]) fire when we mount and only when when variable changes in value

  return (
    <HeaderContainer>
      <UserButton onClick={()=>setViewSidebar(!viewSidebar)}>Hide SideBar</UserButton>
      <button onClick ={() => dispatch({type: "SET_USERNAME", paylod: ["yes", "no", "maybe", "so", ]})}>Set UserName</button>
      <WelcomeDiv>
      <UserButton onClick={() => setCounter(counter + 1)}>
        Get New User
      </UserButton>
      <UserPicture src={user?.picture?.large} alt="" />
      <HeaderHeader>
        Welcome {user?.name?.first} {""} {user?.name?.last}
      </HeaderHeader>
      </WelcomeDiv>
      

      
    </HeaderContainer>
  );
}