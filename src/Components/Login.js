import styled from "styled-components";
import React from "react";

function Login() {
  return (
    <Container>
      <h2>User Login</h2>
      <LoginContainer>
        <h5>Enter your Email</h5>
        <input type="email" name="" id="" placeholder="Email..." />
        <h5>Enter your Password</h5>
        <input type="password" name="" id="" placeholder="Password..." />
        <Button>Login</Button>
        <SignUpDiv>
          <p>
            Don't have an accoount? <a href="/signup">click here to create a new acount</a>
          </p>
        </SignUpDiv>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: center;
  flex-direction: column;
  h2 {
    text-align: center;
  }
`;
const LoginContainer = styled.div`
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
text-align:center;
margin-top:0;
font-size:10px;
a{
  color: rgb(10, 150, 255);;

}

`;
