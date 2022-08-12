import styled from "styled-components";
import React from "react";

function Banner() {
  return (
    <Container>
      <img
        src="https://www.seekpng.com/png/full/409-4097069_fw-1-e-commerce-banner-png.png"
        alt=""
      />
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;

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
