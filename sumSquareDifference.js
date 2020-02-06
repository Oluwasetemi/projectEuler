function sumSquareDifference(n) {
  // sum of squares
  function sumOfSquare(...args) {
    return [...args].reduce((prev, curr) => {
      prev += curr ** 2;
      return prev;
    }, 0);
  }
  function squareOfSum(...args) {
    return [...args].reduce((prev, curr) => prev + curr, 0) ** 2;
  }
  console.log(sumOfSquare(1, 2, 3));
  console.log(squareOfSum(1, 2, 3));
  // square of sum
  // Good luck!
  const arr = [...Array(n)].map((v, i) => i + 1);
  return squareOfSum(...arr) - sumOfSquare(...arr);
}

const x = sumSquareDifference(100);
console.log(x);
