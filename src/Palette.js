import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

function Palette(props) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const params = useParams();
  const paletteID = params.paletteID;

  const paletteArray = props.palettes.filter(
    (palette) => palette.id === paletteID
  );

  const [palette] = paletteArray;

  const { colors, paletteName } = palette;

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };

  const changeFormat = (format) => {
    setFormat(format);
    raiseToast(`Changed to ${format} format`);
  };

  const raiseToast = (msg) => {
    return toast(`${msg}`, {
      duration: 1000,
      style: { background: "gray", outline: "none", color: "white" },
    });
  };

  const ColorBoxes = colors[level].map((colorObj) => (
    <ColorBox
      background={colorObj[format]}
      raiseToast={raiseToast}
      name={colorObj.name}
    />
  ));

  return (
    <div className="Palette">
      <Toaster />
      <div className="Palette-nav">
        <Navbar
          level={level}
          changeLevel={changeLevel}
          handleChange={changeFormat}
        />
      </div>
      {/* {navbar goes here} */}
      <div className="Palette-colors">{ColorBoxes}</div>
      <footer className="Palette-footer">
        <div className="palette-name">Palette - {paletteName}</div>
      </footer>
    </div>
  );
}

export default Palette;
