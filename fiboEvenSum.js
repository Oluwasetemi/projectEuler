function fiboEvenSum(n) {
  // You can do it!
  let f0 = 1;
  let f1 = 2;
  let fb = 0;
  const arr = [f0, f1];
  for (let i = 2; i < n; i += 1) {
    fb = f0 + f1;
    // console.log(fb)
    arr.push(fb);
    f0 = f1;
    f1 = fb;
    // console.log(f0)
    // console.log(f1)
  }

  const result = arr
    .filter(v => v % 2 === 0)
    .reduce((prev, curr) => prev + curr, 0);

  console.log(result);

  return result;
}

fiboEvenSum(10);
