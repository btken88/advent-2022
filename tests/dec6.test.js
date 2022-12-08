const {
  startOfPacket,
  allUniqueCharacters,
  startOfMessage,
} = require("../dec6");

describe("tests for dec 6th", () => {
  test("it identifies that letters are unique", () => {
    expect(allUniqueCharacters("abc")).toBe(true);
    expect(allUniqueCharacters("abb")).toBe(false);
  });
  test("it identifies the location of the first marker", () => {
    expect(startOfPacket("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toBe(7);
    expect(startOfPacket("bvwbjplbgvbhsrlpgdmjqwftvncz")).toBe(5);
    expect(startOfPacket("nppdvjthqldpwncqszvftbrmjlhg")).toBe(6);
    expect(startOfPacket("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toBe(10);
    expect(startOfPacket("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toBe(11);
  });
  test("it identifies the location of the first message", () => {
    expect(startOfMessage("mjqjpqmgbljsphdztnvjfqwrcgsmlb", 14)).toBe(19);
    expect(startOfMessage("bvwbjplbgvbhsrlpgdmjqwftvncz", 14)).toBe(23);
    expect(startOfMessage("nppdvjthqldpwncqszvftbrmjlhg", 14)).toBe(23);
    expect(startOfMessage("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 14)).toBe(29);
    expect(startOfMessage("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 14)).toBe(26);
  });
});
