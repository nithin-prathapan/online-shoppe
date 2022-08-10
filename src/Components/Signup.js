import React from "react";
import styled from "styled-components";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  setUserLogin
} from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, email, password, userName).then(
        async (result) => {
          console.log(result);
          let user = result.user;
          user.displayName = userName;
          console.log(user);
          if (user) {
            dispatch(
              setUserLogin({
                userName: user.displayName,
                email: user.email,
                isLoggedIn: true,
              })
            );
            navigate('/login')
          }
          else{
            alert('user already exists')
          }
        }
      );
    } catch (error) {
      alert('User already exists')
    }
  };

  return (
    <Container>
      <h2>Create a new account</h2>
      <SignupContainer>
        <h5>Enter Your Name</h5>
        <input
          value={userName}
          type="text"
          onChange={(e) => setName(e.target.value)}
          name=""
          id=""
          placeholder="Enter fullname"
        />
        <h5>Enter Your Email</h5>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name=""
          id=""
          placeholder="Email"
        />
        <h5>Enter New Password</h5>
        <input
          value={password}
          type="password"
          name=""
          onChange={(e) => setPassword(e.target.value)}
          id=""
          placeholder="New Password"
        />
        <h5>Confirm Password</h5>
        <input
          value={password}
          type="password"
          name=""
          id=""
          placeholder="Confirm Password"
        />
        <Button onClick={signup}>SignUp</Button>
        <SignUpDiv>
          <p>
            already have an account?{" "}
            <a href="/login">click here to go to login page</a>
          </p>
        </SignUpDiv>
      </SignupContainer>
    </Container>
  );
}

export default Signup;
const Container = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: center;
  flex-direction: column;
  h2 {
    text-align: center;
  }
`;
const SignupContainer = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #111;
  padding: 30px;
  justify-content: center;
  margin: auto;
  background: #111;
  color: white;
  border-radius: 5px;
  border: 1px solid silver;

  h5 {
    text-align: left;
  }
  input {
    margin-top: -18px;
    margin-bottom: 10px;
  }
`;
const Button = styled.button`
  margin-top: 5px;
  width: 100%;
  margin: auto;
  background: yellow;
  border-radius: 5px;
`;
const SignUpDiv = styled.div`
  text-align: center;
  margin-top: 0;
  font-size: 10px;
  a {
    color: rgb(10, 150, 255);
  }
`;
