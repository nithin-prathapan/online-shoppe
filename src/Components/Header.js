import React from "react";
import styled from "styled-components";
import Search from "@material-ui/icons/Search";
import { selectUserStatus, setSignOut } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/config";
function Header() {
  const dispatch = useDispatch();
  const status = useSelector(selectUserStatus);
  const loginStatus = status.isLoggedIn;
  console.log(loginStatus);
  const logout = (e) => {
    e.preventDefault();

    const confirmBox = window.confirm("do you want to log out");
    if (confirmBox) {
      auth.signOut().then(() => {
        dispatch(setSignOut());
      });
    }else{
      alert('Stay cool')
    }
  };
  return (
    <Container>
      <a href="/">
        <img
          src="https://w7.pngwing.com/pngs/694/236/png-transparent-shopping-cart-x-cart-maroon-text-orange-logo.png"
          alt=""
        />
      </a>
      <SearchBar placeholder="Search...."></SearchBar>
      <SearchIcon></SearchIcon>

      <RightMenu>
        <a href="/orders">Orders</a>

        {loginStatus ? (
          <a onClick={logout} href="">
            Logout
          </a>
        ) : (
          <a href="/login">Login</a>
        )}
      </RightMenu>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  min-width: 100%;
  max-width: 100%;

  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
  background: #111;

  img {
    width: 80px;
    border-radius: 5%;
  }
`;
// const Menu = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex: 1;
//   a {
//     font-weight: 600;
//     text-transform: uppercase;
//     padding: 0 10px;
//     flex-wrap: nowrap;
//   }
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;
const RightMenu = styled.div`
  display: flex;

  align-items: center;
  a {
    color: silver;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    margin-right: 50px;
    display: flex;
    align-items: center;
  }
`;
const SearchBar = styled.input`
  text-decoration: none;
  max-width: 25%;
  height: 20px;
  border-radius: 4px;
  border: 1px solid;
  border-color: silver;
  display: flex;
  align-items: flex-end;
  flex: 1;
  margin: 5px;
  margin-right: 0;
`;
const SearchIcon = styled(Search)`
  background: white;
  height: 20px;
  border-radius: 4px;
  align-items: left;
  width: 20px;
  margin-right: 50px;
  margin-left: 0;
`;
