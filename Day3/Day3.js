const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day3/Day3.txt");

//In lower case letters ascii code - 96 to get the priority
//In upper case letters ascii code - 64 to get the priority

function getPriority(char) {
  let ascii = char.charCodeAt(0);
  let priority;
  if (char === char.toUpperCase()) {
    priority = ascii - 64 + 26;
  } else {
    priority = ascii - 96;
  }

  return priority;
}

let prioritySum = 0;
arr.forEach((sack) => {
  let firstHalf = sack.slice(0, sack.length / 2);
  let secondHalf = sack.slice(sack.length / 2, sack.length);

  for (i = 0; i < firstHalf.length; i++) {
    if (secondHalf.includes(firstHalf[i])) {
      prioritySum += getPriority(firstHalf[i]);
      break;
    }
  }
});
console.log(prioritySum);
