// solution.js
// find the minimum path through a grid of numbers, top to bottom,
// where at each row, you are permitted to move straight down, down and left,
// or down and right.
// input: a two dimensional grid of size NxN, where N is the 'size' variable
// listed below.
// output: a single array, listing the columns that you pass through.


var size = 15;

var findMinimumPath = function(input) {

  for (var row = size = 1; row > 0; row--) {
    for (var col = 0; col < size; col++) {

      var currentRow = input[row];
      var choices = currentRow.slice(col - 1, col + 2);

      input[row - 1][col] += Math.min.apply(this, choices);
    }
  }

  var path = [];
  for (var i = 1, col = 0; i < size; i++) {
    if (input[0][i] < input[0][col]) {
      col = i;
    }
  }
  path.push(col);
  for (var row = 1; row < size; row++) {
    var currentRow = input[row];
    var choices = currentRow.slice(col - 1, col + 2);
    var min = Math.min.apply(this, choices);

    if (min == choices[0]) {
      col--;
    } else if (min == choices[2]) {
      col++;
    }
    path.push(col);
  }
  return path;
};
