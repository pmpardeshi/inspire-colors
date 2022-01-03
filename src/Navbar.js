import React from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

function Navbar(props) {
  const { level, changeLevel } = props;

  return (
    <nav className="Navbar">
      <div className="logo">
        <a href="#">Inspire Colors</a>
      </div>
      <div className="slider-container">
        <span>Level: {level} </span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
