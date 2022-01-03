import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";

function Palette(props) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const { colors } = props.palette;

  const ColorBoxes = colors[level].map((colorObj) => (
    <ColorBox background={colorObj[format]} name={colorObj.name} />
  ));

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };

  const changeFormat = (format) => {
    setFormat(format);
  };

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
      />

      {/* {navbar goes here} */}
      <div className="Palette-colors">{ColorBoxes}</div>
      {/* {footer} */}
    </div>
  );
}

export default Palette;
