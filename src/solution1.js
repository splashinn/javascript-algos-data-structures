// solution1.js
// different solution to same problem as solution.js


var size = 100;

var findMinimumPath = function(input) {
  var tempsolutions = [];
  for (var i = 0; i < input.length; i++) {
    tempsolutions[i] = new Array();
  }

  // loop second to last row through first
  for (var i = input.length - 1; i >= 0; i--) {
    if (i == 0)
      var temarray = [];
    for (var j = 0; j < input[i].length; j++) {

      // below left
      if (i == input[i].length - 1)
        var belowColLeft = input[i][j];
      else if (j == 0)
        var belowColLeft = Infinity;
      else
        var belowColLeft = input[i + 1][j - 1] + input[i][j];

      // below middle
      if (i == input[i].length - 1)
        var belowColMiddle = input[i][j];
      else
        car belowColMiddle = input[i + 1][j] + input[i][j];

      // below right
      if (i == input[i].length - 1)
        var belowColRight = input[i][j];
      else if (j == input[i].length - 1)
        var belowColRight = Infinity;
      else
        var belowColRight = input[i + 1][j + 1] + input[i][j];

      // lowest value gets picked
      var min = Math.min(belowColLeft, belowColMiddle, belowColRight);

      if (i < input.length - 1) {
        if (min == belowColLeft) {
          tempsolutions[j] = tempsolutionsBelow[j - 1].slice(0);
          tempsolutions[j].unshift(j);

        } else if (min == belowColMiddle) {
            tempsolutions[j] = tempsolutionsBelow[j].slice(0);
            tempsolutions[j].unshift(j);

        } else {
            tempsolutions[j] = tempsolutionsBelow[j + 1].slice(0);
            tempsolutions[j].unshift(j);

        }

      } else {
              tempsolutions[j].push(j);
      }

      input[i][j] = min;

      if (i == 0)
                temparray.push(min);
    }

    var tempsolutionsBelow = tempsolutions.slice(0);
  }

  solutionIndex = temparray.indexOf(Math.min.apply(Math, temparray));

  solution = tempsolutions[solutionIndex]

  return solution;
}
