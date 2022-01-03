import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getRange = (hexColor) => {
  const endColor = "#fff";
  const startColor = chroma(hexColor).darken(1.4);
  return [chroma(hexColor).darken(1.4).hex(), hexColor, endColor];
};

const generateScale = (hexColor, numberofColors) => {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberofColors);
};

const generatePalette = (starterPalette) => {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    colors: {},
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse();

    for (let i in scale) {
      let rgb = chroma(scale[i]).css();
      newPalette.colors[levels[i]].push({
        name: `${color.name}-${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: rgb,
        rgba: rgb.replace("rgb", "rgba").replace(")", ",1.0)"),
      });
    }
  }

  return newPalette;
};

export { generatePalette };
