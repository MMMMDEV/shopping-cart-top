import React, { useEffect, useState } from "react";
import trashCan from "../images/trash-can.svg";
import PropTypes from "prop-types";
import data from "../data";

export default function Item({ title, price, id, change, units }) {
  const [storedData, setStoredData] = useState(() => {
    const jsonData = JSON.parse(localStorage.getItem("data"));
    return jsonData !== null ? jsonData : data;
  });

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
  }, [storedData]);

  useEffect(() => {
    const jsonData = localStorage.getItem("data");
    if (jsonData !== null) {
      setStoredData(JSON.parse(jsonData));
    } else {
      localStorage.setItem("data", JSON.stringify(storedData));
    }
  }, [change]);

  return (
    <div className="Item">
      <div className="item-title-price">
        <p className="title">{title}</p>
        <p className="price">${price}</p>
      </div>
      <div className="counter-clear">
        <div className="counter">
          <button className="btn-subtract" id={id}>
            -
          </button>
          <input
            type="number"
            className="input-counter"
            value={units}
            readOnly
            max="5"
            min="1"
            step="1"
          ></input>
          <button className="btn-add" id={id}>
            +
          </button>
        </div>
        <img
          className="trash-icon"
          src={trashCan}
          alt="A small trash can icon"
          id={id}
        ></img>
      </div>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.number,
  change: PropTypes.bool,
  units: PropTypes.number,
};
