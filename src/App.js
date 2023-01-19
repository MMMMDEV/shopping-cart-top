import React from "react";
import "./App.css";
import "./normalize.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Shop" element={<Shop />} />
        <Route exact path="/Shop/Cart" element={<Cart />} />
      </Switch>
    </div>
  );
}

export default App;
