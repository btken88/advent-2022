const { calories, topCalories } = require("./dec-1");

const testData = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

describe("calories", () => {
  test("Returns 24000", () => {
    expect(calories(testData)).toBe(24000);
  });
});
describe("topCalories", () => {
  test("Returns 45000", () => {
    expect(topCalories(testData)).toBe(45000);
  });
});
