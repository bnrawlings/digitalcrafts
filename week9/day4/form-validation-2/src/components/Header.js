import React, { useEffect, useState } from "react";
import {
  UserButton,
  HeaderHeader,
  HeaderContainer,
  UserPicture,
} from "../styled-components/HeaderStyle";

const URL = "https://randomuser.me/api/";

export default function Header(props) {
  console.log(props)
  const viewSidebar = props.viewSidebar
  const setViewSidebar = props.setViewSidebar
  const [user, setUser] = useState({});
  const [counter, setCounter] = useState(0);
  // useEffect is a hook
  // hook that fires when the component is mounted
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
      setUser({
        ...jsonNews.results[0],
        userImage: jsonNews?.results[0]?.picture?.thumbnail,
      });
    };
    getNewsData();
    return () => {};
  }, [counter]);

  // useEffect(()=>{}) fire when we mount and anytime we call useState

  // useEffect(()=>{},[]) fire when we mount and only when we mount

  // useEffect(()=>{},[variable]) fire when we mount and only when when variable changes in value

  return (
    <HeaderContainer>
      <UserButton onClick={()=>setViewSidebar(viewSidebar)}>Show SideBar</UserButton>
    
      <UserPicture src={user?.picture?.large} alt="" />
      <p>
        Welcome {user?.name?.first} {""} {user?.name?.last}
      </p>

      <UserButton onClick={() => setCounter(counter + 1)}>
        Get New User
      </UserButton>
    </HeaderContainer>
  );
}