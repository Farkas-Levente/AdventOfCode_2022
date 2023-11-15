const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day8/Day8.txt");

let visibleTrees = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    // Check the edge cases
    if (i === 0 || i === arr.length - 1 || j === 0 || j === arr[i].length - 1) {
      visibleTrees++;
      continue;
    }

    let visible = false;

    // Check the right side
    for (let k = j + 1; k < arr[i].length; k++) {
      if (parseInt(arr[i][j]) > parseInt(arr[i][k])) {
        visible = true;
      } else {
        visible = false;
        break;
      }
    }
    if (visible) {
      visibleTrees++;
      continue;
    }

    // Check the left side
    for (let k = j - 1; k >= 0; k--) {
      if (parseInt(arr[i][j]) > parseInt(arr[i][k])) {
        visible = true;
      } else {
        visible = false;
        break;
      }
    }
    if (visible) {
      visibleTrees++;
      continue;
    }

    // Check the top side
    for (let k = i - 1; k >= 0; k--) {
      if (parseInt(arr[i][j]) > parseInt(arr[k][j])) {
        visible = true;
      } else {
        visible = false;
        break;
      }
    }
    if (visible) {
      visibleTrees++;
      continue;
    }

    // Check the bottom side
    for (let k = i + 1; k < arr.length; k++) {
      if (parseInt(arr[i][j]) > parseInt(arr[k][j])) {
        visible = true;
      } else {
        visible = false;
        break;
      }
    }
    if (visible) {
      visibleTrees++;
    }
  }
}

console.log(visibleTrees);
