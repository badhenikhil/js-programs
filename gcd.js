module.exports = {
  usingWhile: function (a, b) {
    var min = Math.min(a, b);
    while (min >= 1) {
      if (a % min == 0 && b % min == 0) return min;
      min--;
    }
    return 1;
  },
  usingRecursive: function (a, b) {
    if (!b) return a;
    return this.usingRecursive(b, a % b);
  },
};
