/*eslint no-undef: "off"*/

import PropTypes from "prop-types";
import React from "react";

export default function Card({ img, title, price, classType, add, id }) {
  return (
    <div className={classType}>
      <div className="title-price">
        <p className="title">{title}</p>
        <p className="price">{price}</p>
      </div>
      <img src={require(`../images/${img}`)} className="card-img"></img>
      <button id={id} className="add-btn" onClick={add}>
        Add
      </button>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  classType: PropTypes.string,
  add: PropTypes.any,
  id: PropTypes.number,
};
