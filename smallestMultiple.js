const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};

function smallestMult(n) {
  const values = [...Array(n)].map((value, index) => index + 1);
  values;
  // Good luck!
  const result = lcm(...values);
  return result;
}

const x = smallestMult(20);
x;
const a1 = smallestMult(5);
a1; // should return 60.
const a11 = smallestMult(7);
a11; // should return 420.
const a111 = smallestMult(13);
a111; // should return 360360
x;

const a = lcm(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
a;
