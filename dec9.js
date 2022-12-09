function parseInput(steps) {
  return steps.split("\n").map((step) => {
    const instructions = step.split(" ");
    instructions[1] = parseInt(instructions[1]);
    return instructions;
  });
}

class MoveCalculator {
  constructor(steps) {
    this.steps = steps;
    this.headPosition = [0, 0];
    this.tailPosition = [0, 0];
    this.moves = [];
    this.visitedNodes = {};
    this.calculateMoves();
  }

  isAdjacent() {
    return (
      (this.headPosition[0] == this.tailPosition[0] &&
        this.headPosition[1] == this.tailPosition[1]) ||
      (this.headPosition[0] == this.tailPosition[0] &&
        Math.abs(this.headPosition[1] - this.tailPosition[1]) == 1) ||
      (this.headPosition[1] == this.tailPosition[1] &&
        Math.abs(this.headPosition[0] - this.tailPosition[0]) == 1) ||
      this.isDiagonallyAdjascent()
    );
  }

  isDiagonallyAdjascent() {
    return (
      Math.abs(this.headPosition[1] - this.tailPosition[1]) === 1 &&
      Math.abs(this.headPosition[0] - this.tailPosition[0]) === 1
    );
  }

  calculateMoves() {
    for (const [direction, moves] of this.steps) {
      for (let i = 0; i < moves; i++) {
        if (direction === "L") this.headPosition[0]--;
        if (direction === "D") this.headPosition[1]--;
        if (direction === "R") this.headPosition[0]++;
        if (direction === "U") this.headPosition[1]++;
        // console.log(direction, i, this.headPosition, this.tailPosition);
        if (this.isAdjacent()) {
          this.visitedNodes[this.tailPosition.join()]
            ? this.visitedNodes[this.tailPosition.join()]++
            : (this.visitedNodes[this.tailPosition.join()] = 1);
          continue;
        } else if (
          // head and tail are in the same column - move y axis
          this.headPosition[0] != this.tailPosition[0] &&
          this.headPosition[1] == this.tailPosition[1]
        ) {
          if (
            Math.abs(this.headPosition[0] - this.tailPosition[0]) > 1 &&
            this.headPosition[0] > this.tailPosition[0]
          )
            this.tailPosition[0]++;
          else if (
            Math.abs(this.headPosition[0] - this.tailPosition[0]) > 1 &&
            this.headPosition[0] < this.tailPosition[0]
          )
            this.tailPosition[0]--;
        } else if (
          // head and tail are in the same row - move x axis
          this.headPosition[0] == this.tailPosition[0] &&
          this.headPosition[1] != this.tailPosition[1]
        ) {
          if (
            Math.abs(this.headPosition[1] - this.tailPosition[1]) > 1 &&
            this.headPosition[1] - this.tailPosition[1] > 0
          )
            this.tailPosition[1]++;
          else if (
            Math.abs(this.headPosition[1] - this.tailPosition[1]) > 1 &&
            this.headPosition[1] - this.tailPosition[1] > 0
          )
            this.tailPosition[1]--;
        } else {
          //head and tail are in different column and row - move x and y
          if (
            this.headPosition[0] > this.tailPosition[0] &&
            this.headPosition[1] > this.tailPosition[1]
          ) {
            this.tailPosition[0]++;
            this.tailPosition[1]++;
          }
          if (
            this.headPosition[0] < this.tailPosition[0] &&
            this.headPosition[1] < this.tailPosition[1]
          ) {
            this.tailPosition[0]--;
            this.tailPosition[1]--;
          }
          if (
            this.headPosition[0] > this.tailPosition[0] &&
            this.headPosition[1] < this.tailPosition[1]
          ) {
            this.tailPosition[0]++;
            this.tailPosition[1]--;
          }
          if (
            this.headPosition[0] < this.tailPosition[0] &&
            this.headPosition[1] > this.tailPosition[1]
          ) {
            this.tailPosition[0]--;
            this.tailPosition[1]++;
          }
        }
        // console.log(this.tailPosition);
        this.moves.push([...this.tailPosition]);
        this.visitedNodes[this.tailPosition.join()]
          ? this.visitedNodes[this.tailPosition.join()]++
          : (this.visitedNodes[this.tailPosition.join()] = 1);
      }
    }
    // console.table(this.moves);
  }
}

module.exports = { parseInput, MoveCalculator };

// const { dec9 } = require("./inputs");
// const formattedData = parseInput(dec9);
// const puzzleSolution = new MoveCalculator(formattedData);
// console.log(puzzleSolution.visitedNodes);
// console.log(Object.keys(puzzleSolution.visitedNodes).length);
