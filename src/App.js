import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import CartItems from "./Components/CartItems";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart" element={<CartItems />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
