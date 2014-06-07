// Merge sort
// Copyright (C) 2014 Kyle Maune

'use strict';

var mergeSortInit = function(a, compareFn) {
  var comparator = new Comparator(comparefn);

  return (function mergeSort(a) {
    if (a.length > 1) {
      var middle = a.length >> 1;
      var left = mergeSort(a.slice(0, middle));
      var right = mergeSort(a.slice(middle));
      a = merge(left, right, comparator);
    }

    return a;
  })(a);
};

var merge = function (a, b, comparator) {
  var i = 0;
  var j = 0;
  var result = [];

  while (i < a.length && j < b.length) {
    result.push(comparator.lessThan(a[i], b[j]) ? a[i++] : b[j++]);
  }

  // concats the elements from the subarray
  return result.concat((i < a.length ? a.slice(i) : b.slice(j)));
};

module.exports = mergeSortInit;
