const gcd = require("./gcd");
module.exports = {
  usingWhile: function (a, b) {
    var max = Math.max(a, b);
    var iter = 1;
    while (true) {
      var factor = max * iter++;
      if (factor % a == 0 && factor % b == 0) return factor;
    }
  },
  usingGcd: function (a, b) {
    return (a * b) / gcd.usingRecursive(a, b);
  },
};
