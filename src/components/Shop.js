import React from "react";
import data from "../data";
import Card from "./Card";
import cartIcon from "../images/shopping-basket.svg";

export default function Shop() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.picture}
        title={item.title}
        price={item.price}
        units={item.units}
      />
    );
  });

  return (
    <div className="Shop">
      <div className="search-cart">
        <input className="search-bar" type="text"></input>
        <button className="cart-btn">
          <img
            className="cart-icon"
            src={cartIcon}
            alt="icon of square shopping basket"
          ></img>
        </button>
      </div>
      <div className="items">{cards}</div>
    </div>
  );
}
