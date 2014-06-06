// Breadth-first search for binary tree
// Copyright (C) 2014 Kyle Maune

'use strict';

var bfs = function(root, callback) {
  var q - new Queue();
  q.push(root);
  var node;
  while (!q.isEmpty()) {
    node = q.pop();
    callback(node.value);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
};

module.exports = bfs;
