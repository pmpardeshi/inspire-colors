import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

function Navbar(props) {
  const { level, changeLevel } = props;
  const [format, setFormat] = useState("hex");

  const handleChange = (evt) => {
    let format = evt.target.value;
    setFormat(format);
    props.handleChange(format);
  };

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
      <div className="Select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX</MenuItem>
          <MenuItem value="rgb">RGB</MenuItem>
          <MenuItem value="rgba">RGBA</MenuItem>
        </Select>
      </div>
    </nav>
  );
}

export default Navbar;
