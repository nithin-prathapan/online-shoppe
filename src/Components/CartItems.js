import React from "react";
import styled from "styled-components";

function CartItems() {
  return (
    <Container>
      <h1>Cart Items</h1>
      <LeftSection>
        <div className="title">Oppo A74</div>
        <div className="discription">
          OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost
          EMI/Additional Exchange Offers
        </div>
        <img
          src="https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg"
          alt=""
        />
        <CheckoutBtn>
          <button>Proceed To Checkout</button>
        </CheckoutBtn>
      </LeftSection>
    </Container>
  );
}

export default CartItems;
const Container = styled.div`
  margin-top: 70px;
  h1 {
    display: flex;
    justify-content: center;
  }
`;
const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  max-width: 30%;
  border: 3px solid #111;
  border-radius: 5px;
  flex-direction: column;
  margin: 10px;

  .discription {
    text-align: center;
  }
  img {
    margin-top: 20px;
    margin: 10px;
  }
  .title {
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
const CheckoutBtn = styled.div`
  display: flex;
  justify-content: center;
  button {
    display: flex;
    justify-content: center;
    margin: 20px;
    border: 1px solid black;
    background: rgba(238, 238, 7);
    font-weight: 700;
    border-radius: 4px;
  }
`;
