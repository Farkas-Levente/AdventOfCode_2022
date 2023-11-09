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
//Get the largest calorie carrying elf

//Basic Max Element Code
let maxCaloriesCarried = 0;
elves.forEach((element) => {
  if (element.calories > maxCaloriesCarried) {
    maxCaloriesCarried = element.calories;
  }
});

//Refactored Max Element Code
maxCaloriesCarried = Math.max(...elves.map((x) => x.calories));

//Part 1 Answer
console.log(maxCaloriesCarried);
