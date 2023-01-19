import React from "react";
import "./App.css";
import "./normalize.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/shopping-cart-top" element={<Main />} />
        <Route path="/shopping-cart-top/Shop" element={<Shop />} />
        <Route path="/shopping-cart-top/Shop/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
