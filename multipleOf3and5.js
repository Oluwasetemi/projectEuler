function multiplesOf3and5(number) {
  const result = Array.from({ length: number }, (v, i) => i)
    .filter(v => v % 3 === 0 || v % 5 === 0)
    .reduce((prev, curr) => prev + curr, 0);
  // Good luck!
  return result;
}

multiplesOf3and5(1000);
