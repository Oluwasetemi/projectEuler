const primes = num => {
  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2);
  const sqroot = Math.floor(Math.sqrt(num));
  const numsTillSqroot = Array.from({ length: sqroot - 1 }).map(
    (x, i) => i + 2
  );
  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
  return arr;
};

console.log(primes(6));

// const arr = primes(10000000);
// console.log(arr[10001]);

function nthPrime(n) {
  const prime = [];
  let i = 1;
  while ((i += 1 && prime.length < n - 1))
    prime.reduce((a, c) => (i % c) * a, 1) && prime.push(i);
  return prime.length ? prime.pop() : 1;
}

// console.log(nthPrime(10001));

// console.log(nthPrime(6)); // should return 13.
// nthPrime(10); // should return 29.
// nthPrime(100); // should return 541.
// nthPrime(1000); // should return 7919.
// nthPrime(10001); // should return 104743.

function generatePrime(userValue) {
  function nextPrime(value) {
    if (value > 2) {
      let i;
      let q;
      do {
        i = 3;
        value += 2;
        q = Math.floor(Math.sqrt(value));
        while (i <= q && value % i) {
          i += 2;
        }
      } while (i <= q);
      return value;
    }
    return value === 2 ? 3 : 2;
  }
  let nextPrimeValue = 0;
  const result = [];
  for (let i = 0; i < userValue; i++) {
    nextPrimeValue = nextPrime(nextPrimeValue);
    result.push(nextPrimeValue);
  }
  return result[result.length - 1];
}

generatePrime(6);

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

console.log(isPrime(13));

function nthPrime2(n) {
  let candidate;
  let count;
  for (candidate = 2, count = 0; count < n; ++candidate) {
    if (isPrime(candidate)) {
      ++count;
    }
  }
  // The candidate has been incremented once after the count reached n
  return candidate - 1;
}

console.log(nthPrime2(6));
