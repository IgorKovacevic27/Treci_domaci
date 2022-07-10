const zeroFilled = (n, str) => {
  return "0".repeat(n - str.length) + str;
};

const hexToRgb = hex => {
  const colour = hex
    .replace(
      /^#?([a-fd])([a-fd])([a-fd])$/i,
      (_, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16));

  if (colour.length === 2) {
    console.log(`WTF! + ${hex} + ${colour}`);
  }
  return `rgb(${colour.join(", ")})`;
};

export const generateColours = length => {
  const maxColour = parseInt("FFFFFF", 16);
  return Array.from({ length: length }, () => {
    const randColour = Math.floor(Math.random() * maxColour);
    const colourStr =
      "#" + zeroFilled(6, randColour.toString(16).toUpperCase());

    return { colourString: hexToRgb(colourStr), isGuessed: false };
  });
};

export const generateAnswer = length => Math.floor(Math.random() * length);

export const newGame = boardSize => ({
  squares: generateColours(boardSize),
  answer: generateAnswer(boardSize)
});
