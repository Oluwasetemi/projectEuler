function largestPrimeFactor(number) {
  // Good luck!
  const arr = [];
  for (let i = 0; i < number; i += 1) {
    const factor = number % i === 0;
    if (factor === true && isPrime(i)) {
      arr.push(i);
    }
  }
  console.log(arr);
  return arr.length === 0 ? number : arr[arr.length - 1];
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  console.log(num > 1);
  return num > 1;
}

isPrime(1);

const a = largestPrimeFactor(13195);
const b = largestPrimeFactor(2); // should return 2.
b;
const c = largestPrimeFactor(3); // should return 3.
c;
const d = largestPrimeFactor(5); // should return 5.
d;
const e = largestPrimeFactor(7); // should return 7.
e;
a;

function largestPrimeFactor(number) {
    let prime = 2;
    let max = 1;
  while (prime <= number) {
    if (number % prime == 0) {
      max = prime;
      number = number / prime;
    } else prime++; //Only increment the prime number if the number isn't divisible by it
  }
  return max;
}