const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day5/Day5.txt");

//Read in the crate positions
let stacks = {};
arr.every((line) => {
  let counter = 1;
  for (i = 0; i < line.length; i += 4) {
    const sliced = line.slice(i, i + 3);
    if (sliced.startsWith("[")) {
      stacks[counter] = stacks[counter] || []; // Initialize as an array if it doesn't exist
      stacks[counter].push(sliced);
    }
    counter++;
  }
  //Execute until it reaches the 1 2 3 line
  if (line[1] == 1) {
    return false;
  }
  return true;
});

//Read in the commands
let commands = [];
arr.forEach((line) => {
  if (line.startsWith("move")) {
    const splits = line.split(" ");
    commands.push({ amount: splits[1], from: splits[3], to: splits[5] });
  }
});

//Move the Crates

commands.forEach((command) => {
  MoveCrate2(command.amount, command.from, command.to);
});

function MoveCrate(amount, from, to) {
  for (i = 0; i < amount; i++) {
    const removedElement = stacks[from].shift();
    stacks[to].unshift(removedElement);
  }
}

function MoveCrate2(amount, from, to) {
  let temp = [];
  for (i = 0; i < amount; i++) {
    const removedElement = stacks[from].shift();
    temp.push(removedElement);
  }
  stacks[to].unshift(...temp);
}

console.log(stacks);
