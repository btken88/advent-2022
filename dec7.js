function formatFilesystemData(dataString) {
  const filesystemOutput = dataString.split("\n");
  const dirs = {};
  let dirStack = [];

  for (const output of filesystemOutput) {
    const outputContent = output.split(" ");
    if (outputContent[0] == "$" && outputContent[2] == "..") {
      dirStack.pop();
      continue;
    } else if (outputContent[0] == "$" && outputContent[1] == "cd") {
      if (dirs[outputContent[2]]) {
        let rootDir = dirStack.join("/");
        rootDir += `/${outputContent[2]}`;
        dirStack.push(rootDir);
        dirs[rootDir] = 0;
        continue;
      } else {
        dirStack.push(outputContent[2]);
        dirs[outputContent[2]] = 0;
        continue;
      }
    } else if (!isNaN(parseInt(outputContent[0]))) {
      for (const dir of dirStack) {
        dirs[dir] += parseInt(outputContent[0]);
      }
      continue;
    }
  }
  return dirs;
}

function smallDirectorySum(directories) {
  let sum = 0;
  for (const directory in directories) {
    if (directories[directory] <= 100000) {
      sum += directories[directory];
    }
  }
  return sum;
}

function findSmallestDeletableDirectory(directories) {
  const availableSpace = 70000000 - directories["/"];
  const spaceNeeded = 30000000 - availableSpace;
  let smallestSize = directories["/"];
  let smallestDirectory;
  for (const directory in directories) {
    let value = directories[directory];
    if (value >= spaceNeeded && value <= smallestSize) {
      smallestSize = value;
      smallestDirectory = directory;
    }
  }
  return smallestSize;
}

module.exports = { formatFilesystemData, smallDirectorySum };

// const { dec7 } = require("./inputs");

// console.log(findSmallestDeletableDirectory(formatFilesystemData(dec7)));
