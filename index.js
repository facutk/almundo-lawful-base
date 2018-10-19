/*
const assert = require('assert');

assert(lawfulBase(1) === 3);
assert(lawfulBase(2) === 2);
assert(lawfulBase(3) === 1);
assert(lawfulBase(4) === 6);
assert(lawfulBase(5) === 5);
assert(lawfulBase(6) === 4);
assert(lawfulBase(7) === 3);
assert(lawfulBase(8) === 2);
assert(lawfulBase(9)  === 1);
assert(lawfulBase(10) === 12);
assert(lawfulBase(11) === 11);
assert(lawfulBase(12) === 10);
assert(lawfulBase(13) === 9);
assert(lawfulBase(14) === 8);
assert(lawfulBase(15) === 7);
assert(lawfulBase(16) === 6);
assert(lawfulBase(17) === 5);
assert(lawfulBase(18) === 4);
assert(lawfulBase(19) === 3);
assert(lawfulBase(20) === 2);
assert(lawfulBase(21) === 1);
assert(lawfulBase(22) === 24);
assert(lawfulBase(23) === 23);
*/
// ┌─────────────────────────────────────────────────────────────────┐
// │ Tiempo │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 10 │ 11 │ 12 │ ... │
// │─────────────────────────────────────────────────────────────────│
// │ Valor  │ 3 │ 2 │ 1 │ 6 │ 5 │ 4 │ 3 │ 2 │ 1 │ 12 │ 11 │ 10 │ ... │
// └─────────────────────────────────────────────────────────────────┘

function lawfulBase(n) {
  let value = 3;
  let lastDouble = value;

  for(let i = 1; i < n; i++) {
    value--;
    if (value === 0) {
      value = lastDouble * 2;
      lastDouble = value;
    }
  }

  return value;
}

module.exports = lawfulBase;

