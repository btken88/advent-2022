const { convertSteps, parseMove, parseMove9001 } = require("./dec5");

describe("dec 5th tests", () => {
  let testData1 = {
    start: {
      1: ["Z", "N"],
      2: ["M", "C", "D"],
      3: ["P"],
    },
    steps: `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
  };
  test("converts steps data", () => {
    expect(convertSteps(testData1.steps)).toEqual([
      [1, 2, 1],
      [3, 1, 3],
      [2, 2, 1],
      [1, 1, 2],
    ]);
  });
  test("returns correct solution for problem 1", () => {
    expect(parseMove(testData1.start, convertSteps(testData1.steps))).toEqual("CMZ")
  });
  let testData2 = {
    start: {
      1: ["Z", "N"],
      2: ["M", "C", "D"],
      3: ["P"],
    },
    steps: `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
  };
  test("returns correct solution for problem 2", () => {
    expect(parseMove9001(testData2.start, convertSteps(testData2.steps))).toEqual("MCD")
  });
});
