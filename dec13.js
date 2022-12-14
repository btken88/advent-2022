function parseInput(data) {
  return data.split("\n\n").map((dataPairs) => {
    return dataPairs.split("\n").map((datum) => JSON.parse(datum));
  });
}

function testPackets([left, right]) {
  // console.log(left, right);
  if (left && right) {
    if (parseInt(left) && parseInt(right)) {
      // console.log(`Number left-${left} right-${right}`);
      return left < right;
    } else if (typeof left === "object" && typeof right === "object") {
      if (left.length == 0 && right.length) {
        return true;
      }
      // console.log(`Both not number left-${left} right-${right}`);
      if (left.length <= right.length) {
        for (let i = 0; i < left.length; i++) {
          // console.log(`For loop left-${left} right-${right} index-${i}`);
          testPackets([left[i], right[i]]);
        }
      }
    } else if (parseInt(left)) {
      // console.log(`Left number left-${left} right-${right}`);
      testPackets([[left], right]);
    } else if (parseInt(right) && left) {
      // console.log(`Right number left-${left} right-${right}`);
      testPackets([left, [right]]);
    }
  }
  return false;
}

function correctIndices(packets) {
  // console.log(packets);
  const indices = [];
  for (let i = 0; i < packets.length; i++) {
    // console.log(packets[i]);
    if (testPackets(packets[i])) indices.push(i + 1);
  }
  return indices;
}

const { dec13 } = require("./inputs");
const testData = parseInput(dec13);
const correctIndicesList = correctIndices(testData);
console.log(correctIndicesList);
console.log(correctIndicesList.reduce((prev, cur) => (prev += cur), 0));

module.exports = { parseInput, testPackets, correctIndices };
