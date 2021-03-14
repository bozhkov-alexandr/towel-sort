
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arrSort = [];

  if (!matrix) {
    return arrSort;
  }

	for (let item = 0; item < matrix.length; item++) {
		if (item % 2 === 0) {
			arrSort.push(...matrix[item]);
		} else {
			arrSort.push(...matrix[item].reverse());
		}
	}
	return arrSort;
}