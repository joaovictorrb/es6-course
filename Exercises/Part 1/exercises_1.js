// declare a variable with a name
const name = 'Andrea'

// declare a variable with your age
const age = 22

// declare a variable with your favorite food, but without assign value
let favoriteFood

// assign a value to your favorite food
favoriteFood = 'Sushi'

// declare 5 different variables without value
let x, y , z, a, b
console.log(favoriteFood, age, name)

// declare a variable containing a string
const varWithString = 'halo'

// declare a variable containing a number within a string
const numberWithinString = '2020'

// declare 2 variables, one with your first name and the other with you last name, than sum them up
const firstName = 'João'
const lastname = 'Brum'
const fullName = `${firstName} ${lastname}`

// in a variable assign the following phrase: 'It's time'
const phrase = "It's time"
// verify data type of the variable containing your name 
const verifyDataType = typeof(fullName)
console.log(varWithString, numberWithinString, firstName, lastname, fullName, phrase, verifyDataType)

// what is the result of the following expression
const total = 10 + 5 * 2 / 2 + 20
console.log(`Result: ${total}`)

// make 2 expressions that returns NaN
const expressionOne = 'Test' / 2
const expressionTwo = 'Test' - 2
console.log(expressionOne, expressionTwo)

// Sum a string '200' and a number 50, it must return 250
const sum = +'200' + 50
console.log(sum)

// Increment number 5 and returns the new value
let numberFive = 5
console.log('Value incremented: '+ ++numberFive )
console.log('Value incremented: ', ++numberFive )
console.log(`Value incremented: ${++numberFive}`)

// Verify if you are older than someone of your family
const myAge = 22
const myCousinAge = 15
if (myAge > myCousinAge) {
    console.log('I am older than my cousin')
} else if (myAge === myCousinAge) {
    console.log(`Both me and my cousin are ${myAge} years old`)
} else {
    console.log('I am younger than my cousin')
}

const whoIsOlder = myAge > myCousinAge ? 'I am older than my cousin'
    : myAge === myCousinAge ? `Both me and my cousin are ${myAge} years old`
    : 'I am younger than my cousing'

console.log(whoIsOlder)

// Which value is returned on the following expression
const anotherExpression = (5 - 2) && (5 - 's') && (5 - 2)
console.log(anotherExpression)

// make a function to verify if a value is truthy
function valueIsTruthy(value) {
	return console.log(!!value)
}

// make a mathematical function that returns the perimeter of a square
// remember: perimeter is the sum of the four sides of the square
function squarePerimeter(side) {
	return console.log('Perimeter is: ', side*4)
}

// make a function that returns your full name
// it must have the following params: firstname, lastname
function fullNameFunc(first, second) {
	console.log(`Nome completo: ${first} ${second}`)
}

// make a function that verifies if a number is pair
function isEven (number) {
    if(number%2==0) return console.log('Is even? Yes')
    return console.log('Is even? No')
}
// make a function that returns argument data type passed to it
function wichType(value) {
	return console.log('Type is: ', typeof(value))
}

// addEventListener is a native function from JS,
// the first param is a event that executes
// the seconed param is a Callback
// use this function to show your name in console
// when the event scroll occurs
addEventListener('scroll', () => {
	console.log('eu')
})

var totalCountries = 193
function needToVisit (countriesVisited) {
    return console.log(`Still to go ${totalCountries - countriesVisited} countries to visit`)
}

function alredyVisited (countriesVisited, total) {
    return console.log(`Alredy visited ${countriesVisited} of ${totalCountries} countries`)
}

// Create a Object with your personalData
// Must have at least 2 properties, first name and last name
var data = {
	age: 22,
	firstname: 'João',
	lastname: 'Brum',
	country: 'Brazil',
	fullname() {
		return fullname = `${this.firstname} ${this.lastname}`
	}
}
/* data.fullname = function() {
	return `${this.firstName} ${this.lastname}`
} */
console.log(data.fullname())

// Create a function inside the previous object that displays your full name
// Ok, done

// Change the value of price property to 3000
var car = {
	price: 1000,
	doors: 4,
	brand: 'Audi'
}

car.price = 3000
console.log(car)

// Create a object of a dog that represents a Labrador
// color: black, age: 10, humanOnSight: bark
var dog = {
	breed: 'Labrador',
	color: 'black',
	age: 10,
	isHumanOnSight(boolean) {
		if(boolean === true) return console.log('BARK')
		return console.log('sleep')
	}
}
dog.isHumanOnSight(true)

// create a array with the years that Brazil won the world cup
// 1959, 1962, 1970, 1994, 2002
// Make a loop to display the following message:
// "Brazil won the world cup of YEAR"
var wonCups = [1959, 1962, 1970, 1994, 2002]
wonCups.forEach((year) => {
	console.log('Brazil won the world cup of: ', year)
})

// Make a loop for the following array, than stop at Pear
var fruits = ['Banana', 'Apple', 'Pear', 'Grape', 'Watermelon']
fruits.forEach((fruit) => {
	if (fruit === 'Pear') {
		console.log(fruit)
	}
})
// Define a variable with the last fruit of the array
// without removing it from the array
var watermelon = fruits[fruits.length - 1]
console.log(watermelon)

// Add 500 to var Scroll
let scroll = 1000
scroll += 500
console.log(scroll)

// add true to addCredit in case of client having car and house
// and false if the opposite
const hasCar = true
const hasHouse = true
const addCredit = (hasCar && hasHouse) ? true : false
console.log(addCredit)

valueIsTruthy(sum)
squarePerimeter(5)
fullNameFunc(firstName, lastname)
wichType(10)
isEven(numberWithinString)
needToVisit(20)
alredyVisited(20)
