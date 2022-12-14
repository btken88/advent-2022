const { parseInput, testPackets, correctIndices } = require("../dec13");

const testInput = `[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`;

const formattedInput = [
  [
    [1, 1, 3, 1, 1],
    [1, 1, 5, 1, 1],
  ],

  [
    [[1], [2, 3, 4]],
    [[1], 4],
  ],

  [[9], [[8, 7, 6]]],

  [
    [[4, 4], 4, 4],
    [[4, 4], 4, 4, 4],
  ],

  [
    [7, 7, 7, 7],
    [7, 7, 7],
  ],

  [[], [3]],

  [[[[]]], [[]]],

  [
    [1, [2, [3, [4, [5, 6, 7]]]], 8, 9],
    [1, [2, [3, [4, [5, 6, 0]]]], 8, 9],
  ],
];

describe("dec 13th tests", () => {
  test("it parses the input", () => {
    expect(parseInput(testInput)).toEqual(formattedInput);
  });

  test("it identifies if a packet is in the right order", () => {
    expect(testPackets(formattedInput[0])).toBe(true);
    expect(testPackets(formattedInput[1])).toBe(true);
    expect(testPackets(formattedInput[2])).toBe(false);
    expect(testPackets(formattedInput[3])).toBe(true);
    expect(testPackets(formattedInput[4])).toBe(false);
    expect(testPackets(formattedInput[5])).toBe(true);
    expect(testPackets(formattedInput[6])).toBe(false);
    expect(testPackets(formattedInput[7])).toBe(false);
  });

  test("it identifies the correctly ordered packets", () => {
    expect(correctIndices(parseInput(testInput))).toEqual([1, 2, 4, 6]);
  });
});
