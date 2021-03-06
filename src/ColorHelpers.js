/* eslint-disable no-restricted-syntax */
import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

// getRange
function getRange(hexColor) {
  const end = '#fff';
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}
// generate Scale
function generateScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}

function generatePalette(starterPalette) {
  const newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };

  for (const level of levels) {
    newPalette.colors[level] = [];
  }

  for (const color of starterPalette.colors) {
    const scale = generateScale(color.color, 10).reverse();
    // eslint-disable-next-line guard-for-in
    for (const i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        hexWithoutHash: scale[i].replace('#', ''),
        rgbArray: chroma(scale[i]).rgb(),
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)'),
      });
    }
  }
  return newPalette;
}

// eslint-disable-next-line import/prefer-default-export
export { generatePalette };
