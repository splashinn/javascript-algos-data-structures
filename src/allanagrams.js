// allanagrams.js
// splashinn

function allanagrams (word) {
  if (word.length < 2) {
    return [word];
  } else {
      var allanswers = [];
      for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        var shorterword = word.substr(0, i) + word.substr(i + 1, word.length - 1);
        var shortwordarray = allanagrams(shorterword);
        for (var j = 0; j < shortwordarray.length; j++) {
          allanswers.push(letter + shortwordarray[j]);
        }
      }
      return allanswers;
  }
}

allanagrams("")
