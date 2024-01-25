
// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console


// Solution
let country = 'Nigeria'
let continent = 'Africa'
let population = 226.2
console.log(country)
console.log(continent)
console.log(population)

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

// Solution
let isIsland = false
let language;
console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese

// Solution
console.log(population / 2)
population ++
console.log(population )
let populationFinland = 6 
console.log(population > populationFinland)
let averageCountry = 33
console.log(population < averageCountry)
 country = 'Portugal '
 continent = 'Europe'
 population = 11
 language = 'portuguese'

const description = country + 'is' + ' in ' + continent +','  + ' and ' + ' its ' + population +
   ' million' + ' people' + ' speak ' + language
console.log(description)

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// Solution FOR DATA 1

// QUESTION 1
// John BMI
const massMark = 78
const heightMark = 1.69

// Marks BMI
const massJohn = 92
const heightJohn = 1.95

// QUESTION 2

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
const BMIMark = massMark / heightMark ** 2
console.log(BMIMark)

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
const BMIJohn = massJohn / heightJohn ** 2
console.log(BMIJohn)

// QUESTION 3
const markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)

// SOLUTION FOR DATA 2
 
// QUESTION 1
// John BMI
const massMark2 = 95
const heightMark2 = 1.88

// Marks BMI
const massJohn2 = 85
const heightJohn2 = 1.76

// QUESTION 2

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
const BMIMark2 = massMark2 / heightMark2 ** 2
console.log(BMIMark2)

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
const BMIJohn2 = massJohn2 / heightJohn2 ** 2
console.log(BMIJohn2)

// QUESTION 3
const markHigherBMI2 = BMIMark2 > BMIJohn2
console.log(markHigherBMI2)



