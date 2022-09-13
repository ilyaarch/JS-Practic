"use strict";

let storeName = 'Cold';

const storeDescription = {
    budget: 10000,
    employees: [
        'Alice',
        'Bob',
        'Nick'
        ],
    products: {
        Sock: 1000,
        Nock: 500
    },
    open: true
};

const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Bob';

let incr = 10,
    decr = 10;

// ++incr;
// decr--;

console.log(++incr, --decr);

console.log(5%2);

console.log((2 + 2) * 2 === 8);

const isChecked = false,
      isClosed = true;

console.log(isChecked && !isClosed);