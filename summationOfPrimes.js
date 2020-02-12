function primeSummation(number) {
  // Good luck!
  function isPrime(n) {
    if (n % 2 === 0) return n === 2;
    if (n % 3 === 0) return n === 3;
    let step = 4;
    const m = parseInt(Math.sqrt(n) + 1);
    for (let i = 5; i < m; step = 6 - step, i += step) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  let sum = 0;
  for (let i = 2; i < number; i += 1) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

const res = primeSummation(17);
console.log(res);
