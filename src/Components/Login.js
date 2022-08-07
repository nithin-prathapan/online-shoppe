import styled from "styled-components";
import React from "react";

function Login() {
  return (
    <Container>
      <h2>User ddLogin</h2>
      <LoginContainer></LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  margin-top: 70px;
  background: blue;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  h2 {
    text-align: center;
  }
`;
const LoginContainer = styled.div`
  
`;
