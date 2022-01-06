import logo from "./logo.svg";
import "./App.css";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { NavLink, Routes, Route } from "react-router-dom";
import PaletteList from "./PaletteList";

function App() {
  console.log("HI");
  console.log(seedColors);
  const links = seedColors.map((seedColor) => {
    console.log("hihi");
    console.log(seedColor);
    return (
      <div>
        <NavLink to={`/palettes/${seedColor.id}`}>{seedColor.id} </NavLink>
      </div>
    );
  });

  console.log(links);

  const palettes = seedColors.map((seedColor) => generatePalette(seedColor));
  console.log("palettes");
  console.log(palettes);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaletteList links={links} />} />

        {console.log("palette list")}
        <Route
          path="/palettes/:paletteID"
          element={<Palette palettes={palettes} />}
        />
      </Routes>
    </div>
  );
}

export default App;
