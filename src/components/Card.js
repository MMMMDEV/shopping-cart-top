/*eslint no-undef: "off"*/

import PropTypes from "prop-types";
import React from "react";

export default function Card({ img, title, price, units }) {
  return (
    <div className="Card">
      <div className="title-price">
        <p className="title">{title}</p>
        <p className="price">{price}</p>
      </div>
      <img src={require(`../images/${img}`)} className="card-img"></img>
      <button className="add-btn">Add</button>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  units: PropTypes.number,
};
