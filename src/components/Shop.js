import React, { useEffect, useState } from "react";
import data from "../data";
import Card from "./Card";
import cartIcon from "../images/shopping-basket.svg";
import { Link } from "react-router-dom";

export default function Shop() {
  const [searchVal, setSearchVal] = useState("");
  const [storedData, setStoredData] = useState(() => {
    const jsonData = JSON.parse(localStorage.getItem("data"));
    return jsonData !== null ? jsonData : data;
  });
  const [cartItemAmount, setItemAmount] = useState(0);

  function addCart() {
    let amount = 0;
    storedData.map((item) => {
      amount += item.units;
    });
    setItemAmount(amount);
  }

  const onInput = (e) => {
    setSearchVal(e.target.value);
  };

  const addItem = (e) => {
    const idNum = e.target.id;
    setStoredData((prev) => {
      const unit = prev[idNum].units;
      const newData = {
        ...prev,
        [idNum]: {
          ...data[idNum],
          units: unit + 1,
        },
      };
      const extractedData = Object.values(newData);
      return extractedData;
    });
    localStorage.setItem("data", JSON.stringify(storedData));
  };

  useEffect(() => {
    const jsonData = localStorage.getItem("data");
    if (jsonData !== null) {
      setStoredData(JSON.parse(jsonData));
    } else {
      localStorage.setItem("data", JSON.stringify(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(storedData));
    addCart();
  }, [storedData]);

  const cards = storedData.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        img={item.picture}
        title={item.title}
        price={item.price}
        classType="Card"
        add={addItem}
      />
    );
  });

  const searchCards = storedData.map((item) => {
    return item.title.includes(searchVal) ? (
      <Card
        key={item.id}
        id={item.id}
        img={item.picture}
        title={item.title}
        price={item.price}
        classType="Card"
        add={addItem}
      />
    ) : (
      <Card
        key={item.id}
        id={item.id}
        img={item.picture}
        title={item.title}
        price={item.price}
        classType="Hide"
        add={addItem}
      />
    );
  });

  return (
    <div className="Shop">
      <div className="search-cart">
        <input onChange={onInput} className="search-bar" type="text"></input>
        <Link className="cart-btn" to="./Cart">
          <img
            className="cart-icon"
            src={cartIcon}
            alt="icon of square shopping basket"
          ></img>
          <div className="cart-counter">
            <p className="cart-counter-text">{cartItemAmount}</p>
          </div>
        </Link>
      </div>
      <div className="items">{searchVal.length > 0 ? searchCards : cards}</div>
    </div>
  );
}
