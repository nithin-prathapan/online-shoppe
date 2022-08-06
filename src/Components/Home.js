import React from 'react'
import styled from 'styled-components';
import Banner from './Banner';
import Products from './Products'

function Home() {
  return (
    <Container>
        <Banner/>
        <Products/>
    </Container>
  )
}

export default Home;

const Container = styled.main`
margin-top:70px;
width:100%;
overflow-X:hidden;
  
  `