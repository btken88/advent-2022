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
    this.moveCount = 0;
    this.moves = [];
    this.visitedNodes = {};
    this.calculateMoves();
  }

  sameY() {
    return this.headPosition[1] == this.tailPosition[1];
  }

  sameX() {
    return this.headPosition[0] == this.tailPosition[0];
  }

  isAdjacent() {
    return (
      (this.sameY() && this.sameX()) ||
      (this.sameX() &&
        Math.abs(this.headPosition[1] - this.tailPosition[1]) == 1) ||
      (this.sameY() &&
        Math.abs(this.headPosition[0] - this.tailPosition[0]) == 1) ||
      this.isDiagonallyAdjacent()
    );
  }

  isDiagonallyAdjacent() {
    return (
      Math.abs(this.headPosition[1] - this.tailPosition[1]) === 1 &&
      Math.abs(this.headPosition[0] - this.tailPosition[0]) === 1
    );
  }

  moveX() {
    if (this.headPosition[0] > this.tailPosition[0]) this.tailPosition[0]++;
    else this.tailPosition[0]--;
  }

  moveY() {
    if (this.headPosition[1] - this.tailPosition[1] > 0) this.tailPosition[1]++;
    else this.tailPosition[1]--;
  }

  calculateMoves() {
    for (const [direction, moves] of this.steps) {
      this.moveCount += moves;
      for (let i = 0; i < moves; i++) {
        if (direction === "L") this.headPosition[0]--;
        if (direction === "D") this.headPosition[1]--;
        if (direction === "R") this.headPosition[0]++;
        if (direction === "U") this.headPosition[1]++;
        if (this.isAdjacent()) {
          this.addNode();
          continue;
        } else if (
          // head and tail share y - move x axis
          this.sameY()
        ) {
          this.moveX();
        } else if (
          // head and tail are in the same row - move x axis
          this.sameX()
        ) {
          this.moveY();
        } else {
          //head and tail are in different column and row - move x and y
          this.moveX();
          this.moveY();
        }
        this.addNode();
      }
    }
  }

  addNode() {
    this.visitedNodes[this.tailPosition.join()]
      ? this.visitedNodes[this.tailPosition.join()]++
      : (this.visitedNodes[this.tailPosition.join()] = 1);
    this.moves.push({
      head: [...this.headPosition],
      tail: [...this.tailPosition],
      nodesVisited: Object.keys(this.visitedNodes),
    });
  }
}

module.exports = { parseInput, MoveCalculator };

// const { dec9 } = require("./inputs");
// const formattedData = parseInput(dec9);
// const puzzleSolution = new MoveCalculator(formattedData);
// console.table(
//   puzzleSolution.moves[puzzleSolution.moves.length - 1].nodesVisited.length
// );
// console.log(Object.keys(puzzleSolution.visitedNodes).length);
