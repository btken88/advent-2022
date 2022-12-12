function signalStrength(input) {
  let cycle = 0;
  let x = 1;
  const strengths = [];
  for (const [instruction, value] of input) {
    cycle++;
    strengths.push(x);
    if (value) {
      cycle++;
      strengths.push(x);
      x += value;
    }
  }
  return strengths;
}

function drawImage(signalStrengths) {
  let pixels = "";
  const screen = [];
  for (let i = 0; i < 240; i++) {
    if (
      signalStrengths[i] - 1 === i % 40 ||
      signalStrengths[i] + 1 === i % 40 ||
      signalStrengths[i] === i % 40
    )
      pixels += "#";
    else pixels += ".";
    if (pixels.length === 40) {
      screen.push(pixels);
      pixels = "";
    }
  }

  return screen;
}

module.exports = { signalStrength, drawImage };

// const { dec10 } = require("./inputs");
// const parsedInput = dec10.split("\n");
// const parsedData = parsedInput.map((e) => {
//   const data = e.split(" ");
//   if (data.length == 2) {
//     data[1] = parseInt(data[1]);
//   }
//   return data;
// });

// const strengths = signalStrength(parsedData);
// const strengthSum = console.log(signalStrength(parsedData));
// console.log(drawImage(strengths));
