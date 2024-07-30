const numbers = [5, 4, 9, 0, 6, 7, 8, 2];

// Task 1. Get max number
let currentMax = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  const current = numbers[i];
  if (currentMax < current) {
    currentMax = current;
  }
}

console.log(`Max number ${currentMax}`);

// Task 2. Get max pair
let currentSum = 0;
let maxSum = 0;

for (let i = 0; i < numbers.length - 1; i++) {
  const current1 = numbers[i];
  const current2 = numbers[i + 1];
  currentSum = current1 + current2;
  if (currentSum > maxSum) {
    maxSum = currentSum;
  }
}

console.log(`Max pair sum is ${maxSum}`);

// Task 3. Last odd

let lastOddNumber = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  const isOdd = number % 2 == 1;
  if (isOdd) {
    lastOddNumber = number;
  }
}

console.log(`Last odd number ${lastOddNumber}`);

// Task 4. Sum first and last number
const first = numbers[0];
const last = numbers[numbers.length - 1];
const sum = first + last;
console.log(sum);
