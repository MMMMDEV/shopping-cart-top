import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="Nav">
      <h1 className="logo">Norv</h1>
      <ul className="items-container">
        <li className="nav-item-one">
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <div className="nav-item-spacer"></div>
        <li className="nav-item-two">
          <Link to="/Shop">Shop</Link>
        </li>
      </ul>
    </div>
  );
}
