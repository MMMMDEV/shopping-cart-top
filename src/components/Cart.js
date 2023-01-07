import React, { useEffect, useState } from "react";
import Item from "./Item";
import data from "../data";
import { Link } from "react-router-dom";

export default function Cart() {
  const [storedData, setStoredData] = useState(() => {
    const jsonData = JSON.parse(localStorage.getItem("data"));
    return jsonData !== null ? jsonData : data;
  });
  const [cartItemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [truthy, setTruthy] = useState(true);

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
    setTotal();
  }, [storedData]);

  function addCart() {
    let amount = 0;
    storedData.map((item) => {
      amount += item.units;
    });
    setItemAmount(amount);
  }

  const setTotal = () => {
    let itemPrices = [];
    storedData.map((item) => {
      const itemPrice = item.units * item.price;
      itemPrices.push(itemPrice);
    });

    const newPrice = itemPrices.reduce((prev, current) => prev + current, 0);

    setTotalPrice(newPrice);
  };

  function addItem(id) {
    setStoredData((prev) => {
      const unit = prev[id].units;
      const newData = {
        ...prev,
        [id]: {
          ...data[id],
          units: unit + 1,
        },
      };
      const extractedData = Object.values(newData);
      return extractedData;
    });
    localStorage.setItem("data", JSON.stringify(storedData));
  }

  function subtractItem(id) {
    setStoredData((prev) => {
      const unit = prev[id].units;
      const newData = {
        ...prev,
        [id]: {
          ...data[id],
          units: unit - 1,
        },
      };
      const extractedData = Object.values(newData);
      return extractedData;
    });
    localStorage.setItem("data", JSON.stringify(storedData));
  }

  function reset(id) {
    setStoredData((prev) => {
      const newData = {
        ...prev,
        [id]: {
          ...data[id],
          units: 0,
        },
      };
      const extractedData = Object.values(newData);
      return extractedData;
    });
    localStorage.setItem("data", JSON.stringify(storedData));
  }

  const clickCheck = (e) => {
    const id = e.target.id;
    const name = e.target.className;

    switch (name) {
      case "btn-subtract":
        subtractItem(id);
        break;
      case "btn-add":
        addItem(id);
        break;
      case "trash-icon":
        reset(id);
        break;
    }

    setTruthy((prev) => {
      return !prev;
    });
  };

  let items = storedData.map((item) => {
    if (item.units > 0) {
      return (
        <Item
          key={item.id}
          title={item.title}
          price={item.price}
          id={item.id}
          change={truthy}
          units={item.units}
        />
      );
    }
  });

  return (
    <div className="Cart">
      {cartItemAmount > 0 ? (
        <>
          <div className="all-items" onClick={clickCheck}>
            {items}
          </div>
          <div className="purchase-area">
            <div className="total-display">
              <p className="text-total">Total:</p>
              <p className="total-price">${totalPrice}</p>
            </div>
            <Link className="btn-checkout" to="/">
              Checkout
            </Link>
          </div>
        </>
      ) : (
        <h2 className="cart-title">Nothing In Cart </h2>
      )}
    </div>
  );
}
