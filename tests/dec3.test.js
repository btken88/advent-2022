const {
  rucksackList,
  itemPriority,
  outOfPlace,
  prioritizedTotal,
  groupList,
  groupBadgeLetter,
} = require("../dec3");

const testData = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const expectedOutput = [
  ["vJrwpWtwJgWr", "hcsFMMfFFhFp"],
  ["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"],
  ["PmmdzqPrV", "vPwwTWBwg"],
  ["wMqvLMZHhHMvwLH", "jbvcjnnSBnvTQFn"],
  ["ttgJtRGJ", "QctTZtZT"],
  ["CrZsJsPPZsGz", "wwsLwLmpwMDw"],
];

const expectedGroupOutput = [
  [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
  ],
  [
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
  ],
];

describe("tests for dec 3", () => {
  test("it splits the input into compartments array", () => {
    expect(rucksackList(testData)).toEqual(expectedOutput);
  });

  test("it converts character values correctly", () => {
    expect(itemPriority("p")).toBe(16);
    expect(itemPriority("L")).toBe(38);
    expect(itemPriority("P")).toBe(42);
    expect(itemPriority("v")).toBe(22);
    expect(itemPriority("t")).toBe(20);
    expect(itemPriority("s")).toBe(19);
  });

  test("it identifies the out of place letter", () => {
    expect(outOfPlace(expectedOutput[0])).toBe("p");
    expect(outOfPlace(expectedOutput[1])).toBe("L");
    expect(outOfPlace(expectedOutput[2])).toBe("P");
    expect(outOfPlace(expectedOutput[3])).toBe("v");
    expect(outOfPlace(expectedOutput[4])).toBe("t");
  });

  test("it returns the combined value of priorities", () => {
    expect(prioritizedTotal(expectedOutput)).toBe(157);
  });

  test("it correctly creates group lists", () => {
    expect(groupList(testData)).toEqual(expectedGroupOutput);
  });

  test("it correctly returns the group badge letter", () => {
    expect(groupBadgeLetter(expectedGroupOutput[0])).toBe("r");
    expect(groupBadgeLetter(expectedGroupOutput[1])).toBe("Z");
  });
});
