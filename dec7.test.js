const { formatFilesystemData, smallDirectorySum } = require("./dec7");

const testData = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

const formattedTestData = {
  "/": 48381165,
  e: 584,
  a: 94853,
  d: 24933642,
};

describe("tests for dec7 code", () => {
  test("it formats the data", () => {
    expect(formatFilesystemData(testData)).toEqual(formattedTestData);
  });

  test("it correctly sums directories under 100000", () => {
    expect(smallDirectorySum(formattedTestData)).toBe(95437);
  });
});
