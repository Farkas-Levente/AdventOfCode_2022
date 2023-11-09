const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day1/Day1.txt");

let elves = [];
let currentElf = { calories: 0 };

//Fill up the elves with their inventory
arr.forEach((element) => {
  if (element == "") {
    elves.push(currentElf);

    currentElf = { calories: 0 };
  } else {
    currentElf.calories += parseInt(element);
  }
});

if (currentElf.calories > 0) {
  elves.push(currentElf);
}
//Sort the calories desending
const sortedArray = elves
  .map((x) => x.calories)
  .sort((a, b) => {
    return b - a;
  });

console.log("The most calories at one elf: " + sortedArray[0]);

console.log(
  "The top 3 calories summed: " +
    (sortedArray[0] + sortedArray[1] + sortedArray[2])
);
