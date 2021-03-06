# anagramDetection.coffee
# splashinn

# Simple function that will take a string of latin characters and return a unique hash
hashString = (str) ->
  # Map characters to prime numbers to multiply
  charMap =
    a: 2
    b: 3
    c: 5
    d: 7
    e: 11
    f: 13
    g: 17
    h: 19
    i: 23
    j: 29
    k: 31
    l: 37
    m: 41
    n: 43
    o: 47
    p: 53
    q: 59
    r: 61
    s: 67
    t: 71
    u: 73
    v: 79
    w: 83
    x: 89
    y: 97
    z: 101
    A: 103
    B: 107
    C: 109
    D: 113
    E: 127
    F: 131
    G: 137
    H: 139
    I: 149
    J: 151
    K: 163
    L: 167
    M: 173
    N: 179
    O: 181
    P: 191
    Q: 193
    R: 197
    S: 199
    T: 211
    U: 223
    V: 227
    W: 229
    X: 233
    Y: 239
    Z: 241
    
  str.split("").reduce ((memo, char) -> memo * charMap[char]), 1

anagramDetection = (parent, child) ->
  length = child.length
  anagram = hashString(child)
  total = 0
  i = 0

  while i < (parent.length - length)
    total += 1  if hashString(parent.substr(i, length)) is anagram
    i++
  total