// fisheryates.js
// (C) 2014 kmaune0
// the shuffling algorithm of Fisher-Yates

function shuffle(array) {
  var size = array.length,
    rand, temp;
  for(var i = 1; i < size; i += 1) {
    rand = Math.round(Math.random() * i);
    temp = array[rand];
    array[rand] = array[i];
    array[i] = temp;
  }
  return array;
}
