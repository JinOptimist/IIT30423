const numbers = [5,4,9,0,6,7,8,2]

// Task 1. Get max number
let currentMax = numbers[0]

for(let i = 0; i < numbers.length; i++){
	const current = numbers[i]
	if (currentMax < current){
		currentMax = current
	}
}

console.log(`Max number ${currentMax}`)


// Task 2. Get max pair
let currentSumm = 0
let maxSumm = 0

for(let i = 0; i < numbers.length - 1; i++){
	const current1 = numbers[i]
	const current2 = numbers[i + 1]
	currentSumm = current1 + current2
	if (currentSumm > maxSumm){
		maxSumm = currentSumm
	}
}

console.log(`Max pair sum is ${maxSumm}`)


// Task 3. Last odd

let lastOddNumber = 0
for(let i = 0; i < numbers.length; i++){
	const number = numbers[i]
	const isOdd = number % 2 == 1
	if (isOdd){
		lastOddNumber = number
	}
}

console.log(`Last odd number ${lastOddNumber}`)

// Task 4. Summ first and last number
const first = numbers[0]
const last = numbers[numbers.length - 1]
const summ = first + last
console.log(summ)

