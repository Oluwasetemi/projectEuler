function divisibleTriangleNumber(number) {
  function listCountOfFactors(num) {
    let n = num;
    let i = 2;
    let p = 1;

    if (num === 1) return 1;

    while (i * i <= n) {
      let c = 1;
      while (n % i === 0) {
        n /= i;
        c++;
      }
      i++;
      p *= c;
    }

    if (n === num || n > 1) p *= 1 + 1;

    return p;
  }

  let sum = 1;
  let count = 1;
  while (listCountOfFactors(sum) <= number) {
    count += 1;
    sum += count;
  }
  //   console.log(res);
  // Good luck!
  console.log(sum);
  return sum;
}

divisibleTriangleNumber(500);
