function longestCollatzSequence(limit) {
  function generateCollatzSequence(num) {
    const arr = [];

    const rules = {
      even: n => n / 2,
      odd: n => 3 * n + 1
    };

    while (num !== 1) {
      num = num % 2 === 0 ? rules.even(num) : rules.odd(num);
      arr.push(num);
    }

    return {
      arr,
      length: arr.length
    };
  }
  let max = 1;
  let answer = 0;

  for (let i = 2; i < limit; i += 1) {
    const { arr, length } = generateCollatzSequence(i);

    if (length > max) {
      max = length;
      answer = i;
    }
  }
  console.log(answer);
  // Good luck!
  return answer;
}

longestCollatzSequence(46500);

function collatz(tape) {
  const rules = {
    a: 'bc',
    b: 'a',
    c: 'aaa'
  };

  const steps = [];

  while (tape.length >= 2) {
    steps.push(tape);
    tape = tape.slice(2) + rules[tape[0]];
  }
  steps.push(tape);
  console.log(steps);
  return steps;
}

collatz('aaa');
