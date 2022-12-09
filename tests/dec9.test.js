const { parseInput, MoveCalculator } = require("../dec9");

const testData = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;
const formattedData = [
  ["R", 4],
  ["U", 4],
  ["L", 3],
  ["D", 1],
  ["R", 4],
  ["D", 1],
  ["L", 5],
  ["R", 2],
];

const calculatedMoves = new MoveCalculator(formattedData);

describe("tests for dec 9", () => {
  test("it converts the input", () => {
    expect(parseInput(testData)).toEqual(formattedData);
  });

  test("it returns the number of nodes visited", () => {
    expect(Object.keys(calculatedMoves.visitedNodes).length).toEqual(13);
  });
});
