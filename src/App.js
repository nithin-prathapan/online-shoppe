import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
