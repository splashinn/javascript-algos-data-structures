// stack implementation in JavaScript
// (C) 2014 kmaune0
// stack.js

var node = function() {
  var data;
  var next = null;
}

var stack = function() {
  this.top = null;

  this.push = function(data) {
    if (this.top == null) {
      this.top = new node();
      this.top.data = data;
    } else {
        var temp = new node();
        temp.data = data;
        temp.next = this.top;
        this.top = temp;
    }
  }

  this.pop = function() {
    var temp = this.top;
    var data = this.top.data;
    this.top = this.top.next;
    temp = null;
    return data;
  }

  this.print = function() {
    var node = this.top;
    while (node != null) {
      console.log(node.data);
      node = node.next;
    }
  }
}

var s = new stack();

s.push(1);
s.push(2);
s.push(3);

s.print();

var a = s.pop();

s.print();
