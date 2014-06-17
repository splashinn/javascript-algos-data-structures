// hashtable.js
// (C) 2014 kmaune0

var HashTable = function() {
  this._limit = 1;

  // use a limited array to store inserted elements
  // it will help keep from using too much space

  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndeBelowMaxForKey(key, this._limit);
  if(!this._storage[index]) {
    this._storage[index] = [[key, value]];
  } else {
    for(var i = 0; i < this._storage[index].length; i++) {
      if(this._storage[index][i][0] === key) {
        this._storage[index][i][1] = value;
      } else {
        this._storage[index].push([key, value]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key this._limit);
  if(this._storage[index]) {
    for(var i = 0; i < this._storage[index].length; i++) {
      if(this._storage[index][i][0] === key) {
        return this._storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if(this._storage[index]) {
    for(var i = 0; i < this._storage[index].length; i++) {
      if(this._storage[index][i][0] === key) {
        this._storage[index].splice(i, 1);
      }
    }
  }
};
