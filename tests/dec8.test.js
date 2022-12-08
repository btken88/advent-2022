const {
  parseInput,
  isVisible,
  countVisibleTrees,
  calculateViewScore,
  findHighestScore,
} = require("../dec8");

const testData = `30373
25512
65332
33549
35390`;

const testData2 = `928035193
490598171
374371933
230382600
146613279
024714645
197753035
259003406
378713404`;

const formattedData = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];

describe("tests for dec. 8th", () => {
  test("it converts the input as expected", () => {
    expect(parseInput(testData)).toEqual(formattedData);
  });

  test("it determines if a tree is visible", () => {
    expect(isVisible(3, [3, 5], [9, 0])).toBe(false);
    expect(isVisible(3, [3, 0], [7, 3])).toBe(false);
    expect(isVisible(6, [3, 2], [3, 3])).toBe(true);

    expect(isVisible(5, [2], [5, 1, 2])).toBe(true);
    expect(isVisible(5, [2, 5], [1, 2])).toBe(true);
    expect(isVisible(1, [2, 5, 5], [2])).toBe(false);
    expect(isVisible(5, [6], [3, 3, 2])).toBe(true);
    expect(isVisible(3, [6, 5], [3, 2])).toBe(false);
    expect(isVisible(3, [6, 5, 3], [2])).toBe(true);
    expect(isVisible(3, [3], [5, 4, 9])).toBe(false);
    expect(isVisible(5, [3, 3], [4, 9])).toBe(true);
    expect(isVisible(4, [3, 3, 5], [9])).toBe(false);
  });

  test("it returns the number of visible trees", () => {
    expect(countVisibleTrees(formattedData)).toEqual(21);
    expect(countVisibleTrees(parseInput(testData2))).toEqual(58);
  });

  test("it calculates the viewscore of a tree", () => {
    expect(calculateViewScore(5, [3], [3, 5, 3], [2, 5], [1, 2])).toBe(4);
    expect(calculateViewScore(5, [3, 5, 3], [3], [3, 3], [4, 9])).toBe(8);
  });

  test("it calculates the highest viewscore", () => {
    expect(findHighestScore(formattedData)).toBe(8);
  });
});
