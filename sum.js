module.exports = function (arr = []) {
  if (!arr.length) return 0;
  return arr.reduce((accumulator, next) => accumulator + next);
};
