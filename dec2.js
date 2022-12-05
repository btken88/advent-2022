const scoring = {
  A: {
    X: 4,
    Y: 8,
    Z: 3,
  },
  B: {
    X: 1,
    Y: 5,
    Z: 9,
  },
  C: {
    X: 7,
    Y: 2,
    Z: 6,
  },
};

const decryptionKey = {
  A: {
    X: "Z",
    Y: "X",
    Z: "Y",
  },
  B: {
    X: "X",
    Y: "Y",
    Z: "Z",
  },
  C: {
    X: "Y",
    Y: "Z",
    Z: "X",
  },
};

function scoreGame(inputs) {
  let score = 0;
  for (const input of inputs) {
    const [opponent, player] = input;
    score += scoring[opponent][player];
  }
  return score;
}

function decryptStrategy(inputs) {
  return inputs.map((game) => {
    const [opponent, playerStrategy] = game;
    const play = decryptionKey[opponent][playerStrategy];
    return [opponent, play];
  });
}

module.exports = { scoreGame, decryptStrategy };
const { dec2 } = require("./inputs");
const input = dec2.split("\n").map((e) => e.split(" "));
console.log(scoreGame(decryptStrategy(input)));
