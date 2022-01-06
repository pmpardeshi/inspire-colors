import React from "react";
import "./PaletteList.css";

function PaletteList(props) {
  console.log("Palette List");
  return <div className="PaletteList">{props.links}</div>;
}

export default PaletteList;
