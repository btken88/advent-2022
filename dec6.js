function startOfPacket(stream) {
  for (let i = 0; i < stream.length - 4; i++) {
    if (allUniqueCharacters(stream.substr(i, 4))) return i + 4;
  }
}

function allUniqueCharacters(str) {
  return new Set(str).size == str.length;
}

function startOfMessage(stream, length) {
  for (let i = 0; i < stream.length - length; i++) {
    if (allUniqueCharacters(stream.substr(i, length))) return i + length;
  }
}

module.exports = { startOfPacket, allUniqueCharacters, startOfMessage };

// const {dec6} = require('./inputs');

// console.log(startOfMessage(dec6, 14))
