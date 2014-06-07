// Quicksort
// Copyright (C) 2014 Kyle Maune

'use strict';

var quicksortInit = function(array, comparatorFn) {

  var comparator = new Comparator(comparatorFn);

  return (function quicksort(array, lo, hi) {
    if (lo < hi) {
      var p = partition(array, comparator, lo, hi);
      quicksort(array, lo, p - 1);
      quicksort(array, p + 1, hi);
    }

    return array;
  })(array, 0, array.length - 1);
};

var partition = function(a, comparator, lo, hi) {
  swap(a, Math.floor(Math.random() * (hi - lo)) + lo, hi);
  var pivot = hi;

  var dividerPosition = lo;

  for (var i = lo; i < hi; i++) {
    if (comparator.lessThan(a[i], a[pivot])) {
      swap(a, i, dividerPosition);
      dividerPosition++;
    }
  }
  swap(a, dividerPosition, pivot);
  return dividerPosition;
};

var swap = function(array, x, y) {
  var tmp = array[y];
  array[y] = array[x];
  array[x] = tmp;
};

module.exports = quicksortInit;
