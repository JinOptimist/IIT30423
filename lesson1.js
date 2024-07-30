let name = 'Ivan'

let age = 20 + 2 * 3 // 26
age = age + 1 // 27

let chance = .02

let isAdult = true
let isAdmin = false
// && => and
let isCoolAdmin = isAdult && isAdmin
// || => or
let isNewUser = isAdult || isAdmin
// ! => not
let isModerator = !isAdmin // true
let condition4 = isCoolAdmin || isNewUser && !isModerator

let user1 = {
	name: 'Olga',
	age: 20,
	isWoman: true
}

let user2 = {
	name: 'Ivan',
	age: 25,
	isWoman: false,
	address: {
		street: 'Push',
		house: 50,
		flat: 77
	}
}

user1.name = 'Lera'
user2.address.house

user1.secondName = 'Ivanov'

// old way
// console.log('Hi ' + user1.name + ' Cool ' + user1.age + ' age')

// new way
// console.log(`Hi ${user1.name}. Cool ${user1.age} age`)


function sayHiToUser(user){
	console.log(`Hi ${user.name}. It was greate ${user.age} years`)
}

sayHiToUser(user1)
sayHiToUser(user2)

let users = []

for(let i = 0; i < 10 ; i++){
	let user = {
		name: 'Ivan ' + i,
		age: 40 - i
	}
	
	users.push(user)
}

//for( AAA ; BBB ; CCC){
// DDD	
//}

// AAA
// BBB true
// DDD
// CCC
// BBB true
// DDD
// CCC
// BBB false


for(let i = 0; i < users.length; i++){
	let user = users[i]
	sayHiToUser(user)	
}
	







