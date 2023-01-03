import React from "react";
import "./App.css";
import "./normalize.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Shop from "./components/Shop";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
