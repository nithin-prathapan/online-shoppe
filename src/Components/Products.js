import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

function Products() {
  return (
    <Container>
      <ProductDetails>
        <Description>
          OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost
          EMI/Additional Exchange Offers
        </Description>
        <Title>Oppo A74</Title>
        <img
          src="https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg"
          alt=""
        />
        <AddToCart>Add To Cart</AddToCart>
      </ProductDetails>
      <ProductDetails>
        <Description>
          OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost
          EMI/Additional Exchange Offers
        </Description>
        <Title>Oppo A74</Title>
        <img
          src="https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg"
          alt=""
        />
        <AddToCart>Add To Cart</AddToCart>
      </ProductDetails>
      <ProductDetails>
        <Description>
          OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost
          EMI/Additional Exchange Offers
        </Description>
        <Title>Oppo A74</Title>
        <img
          src="https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg"
          alt=""
        />
        <AddToCart>Add To Cart</AddToCart>
      </ProductDetails>
      <ProductDetails>
        <Description>
          OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost
          EMI/Additional Exchange Offers
        </Description>
        <Title>Oppo A74</Title>
        <img
          src="https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg"
          alt=""
        />
        <AddToCart>Add To Cart</AddToCart>
      </ProductDetails>
      <ProductDetails>
        <Description>
          OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost
          EMI/Additional Exchange Offers
        </Description>
        <Title>Oppo A74</Title>
        <img
          src="https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg"
          alt=""
        />
        <AddToCart>Add To Cart</AddToCart>
      </ProductDetails>
      <ProductDetails>
        <Description>
          OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost
          EMI/Additional Exchange Offers
        </Description>
        <Title>Oppo A74</Title>
        <img
          src="https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg"
          alt=""
        />
        <AddToCart>Add To Cart</AddToCart>
      </ProductDetails>
      <ProductDetails>
        <Description>
          OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost
          EMI/Additional Exchange Offers
        </Description>
        <Title>Oppo A74</Title>
        <img
          src="https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg"
          alt=""
        />
        <Link to={"/cart"}>
          <AddToCart>Add To Cart</AddToCart>
        </Link>
      </ProductDetails>
    </Container>
  );
}

export default Products;

const Container = styled.div`
  padding: 30px;
  display grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin:20px;


`;
const ProductDetails = styled.div`
  max-width: 300px;
  height: 100%;
  border: 1px solid black;
  border-radius: 4px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    object-fit: contain;
    width: 200px;
    margin-top: 5px;
  }
`;
const Title = styled.div`
  margin-top: 10px;
`;
const Description = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  font-weight: 600;
`;
const AddToCart = styled.button`
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: rgba(238, 238, 7);
  font-weight: 700;
  width: 40%;
`;
