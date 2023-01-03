import React from "react";
import picture1 from "../images/oladimeji-unsplash1.jpg";

export default function Main() {
  return (
    <div className="Main">
      <div className="part-one">
        <img
          src={picture1}
          alt="black and white picture of a slender black male with a white flower on his lips"
          className="home-images img1"
        ></img>
        <div className="home-text-container home-text1">
          <p className="box-text-1">The new way to experience comfort</p>
        </div>
      </div>
    </div>
  );
}
