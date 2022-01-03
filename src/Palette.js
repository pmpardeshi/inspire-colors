import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

function Palette(props) {
  const [level, setLevel] = useState(500);
  const { colors } = props.palette;

  const ColorBoxes = colors[level].map((colorObj) => (
    <ColorBox background={colorObj.hex} name={colorObj.name} />
  ));

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };

  return (
    <div className="Palette">
      <nav className="Palette-nav">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
        />
      </nav>

      {/* {navbar goes here} */}
      <div className="Palette-colors">{ColorBoxes}</div>
      {/* {footer} */}
    </div>
  );
}

export default Palette;
