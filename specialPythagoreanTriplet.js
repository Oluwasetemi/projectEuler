function specialPythagoreanTriplet(n) {
  const sumOfabc = n;
  // loop 1 a
  for (let a = 0; a < n; a += 1) {
    // loop 1 b
    for (let b = a; b < n; b += 1) {
      if (a < b && a !== 0 && b !== 0) {
        // a < b < c
        // a + b + c = n;
        const c = n - b - a;
        if (c > 0) {
          if (c ** 2 === a ** 2 + b ** 2) {
            // console.log(c);
            // console.log(a * b * c);
            return a * b * c;
          }
        }
      }
    }
  }
}

const x = specialPythagoreanTriplet(24);
x;
