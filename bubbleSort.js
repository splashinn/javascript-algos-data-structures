/** Copyright (C) Kyle Maune 2014 **/

'use strict';
var Comparator = require('../../util/comparator');

/** Bubble sort algorithm 0(n^2) **/

var bubbleSort = function(a, comparatorFn) {
  var comparator = new Comparator(comparatorFn),
    n = a.length,
    bound = n - 1;
  for (var i = 0; i < n - 1; i++) {
    var newbound = 0;
    for (var j = 0; j < bound; j++) {
      if (comparator.greaterThan(a[j], a[j + 1])) {
        var tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
        newbound = j;
      }
    }
    bound = newbound;
  }

  return a;
};

module.exports = bubbleSort;