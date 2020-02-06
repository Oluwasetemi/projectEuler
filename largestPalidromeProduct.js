function largestPalindromeProduct(n) {
  const max = +[...Array(n)].reduce((prev, curr) => (prev += 9), '');

  const min = (max + 1) / 10;

  const res = [];
  for (let i = max; i >= min; i -= 1) {
    for (let j = max; j >= min; j -= 1) {
      const num = i * j;

      const reverseNum = [...String(num)].reverse().join('');

      if (num == reverseNum) {
        res.push(num);
        break;
      }
    }
  }
  // Good luck!
  return Math.max(...res);
}

const a = largestPalindromeProduct(4);
a;
