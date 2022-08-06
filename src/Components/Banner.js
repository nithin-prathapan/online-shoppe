import styled from "styled-components";
import React from "react";

function Banner() {
  return (
    <Container>
      <img
        src="https://media.istockphoto.com/photos/shopping-cart-full-of-food-on-yellow-background-grocery-and-food-picture-id1316968335?b=1&k=20&m=1316968335&s=170667a&w=0&h=PkK1r12jvNs3CiCsQIBFcTa0SO1kG5ZdsK_7Rz4PxyQ="
        alt=""
      />
    
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  width: 100%;
  overflow-Y:hidden;
  overflow-X:hidden;
  img {
    object-fit: cover;
    width: 100%;
    max-height: 400px;
    padding-top: 0;
    margin: 0;
    height: 300px;
    max-height: 100%;
  }
`;