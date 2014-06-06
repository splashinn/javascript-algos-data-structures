// Depth first search
// Copyright (C) 2014 Kyle Maune

'use strict';

// in order
var inOrder = function(node, callback) {
  if (node) {
    inOrder(node.left, callback);
    callback(node.value);
    inOrder(node.right, callback);
  }
};

// post order
var postOrder = function(node, callback) {
  if (node) {
    postOrder(node.left, callback);
    postOrder(node.right, callback);
    callback(node.value);
  }
};

// pre order
var preOrder = function(node, callback) {
  if (node) {
    callback(node.value);
    preOrder(node.left, callback);
    preOrder(node.right, callback);
  }
};
