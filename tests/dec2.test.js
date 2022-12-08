const { scoreGame, decryptStrategy } = require("../dec2");

describe("dec2 tests", () => {
  const input = `A Y
B X
C Z`
    .split("\n")
    .map((e) => e.split(" "));
  test("returns 15 for problem 1 sample data", () => {
    expect(scoreGame(input)).toEqual(15);
  });
  test("returns 12 for decrypted problem 1 sample data", () => {
    const decryptedInput = decryptStrategy(input);
    expect(scoreGame(decryptedInput)).toEqual(12);
  });
});
