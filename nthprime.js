const primes = num => {
  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2);
  const sqroot = Math.floor(Math.sqrt(num));
  const numsTillSqroot = Array.from({ length: sqroot - 1 }).map(
    (x, i) => i + 2
  );
  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
  return arr;
};

// const arr = primes(10000000);
// console.log(arr[10001]);

function nthprime(n) {
  const prime = [];
  let i = 1;
  while (i++ && prime.length < n - 1)
    prime.reduce((a, c) => (i % c) * a, 1) && prime.push(i);
  return prime.length ? prime.pop() : 1;
}

console.log(nthprime(10001));
