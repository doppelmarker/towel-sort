module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let newArr = [];
  let k = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++, k++) {
      // i % 2 !== 0 ? newArr[k] = matrix[i].reverse()[j] : newArr[k] = matrix[i][j];
      if (i % 2 !== 0) {
        newArr[k] = matrix[i].reverse()[j];
        matrix[i].reverse();
      } else {
        newArr[k] = matrix[i][j];
      }
    }
  }
  return newArr;
}
