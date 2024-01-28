// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax

// Based on the variables you created, create a new variable 'description'
//  which contains a string with this format: 'Portugal is in Europe, and its 11 million
//  people speak portuguese

// Solution
// const country  = `Portugal`
// const continent = `Europe`
// const population = 11
// const language = `Portuguese`
// const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}`
// console.log(description)

// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

// Solution

// const population = 22.2

// if(population > 33) {
//     console.log(`Portugal's population is above average`)
// } else {
//     console.log(`Portugal's population is 22 million below average`)
// }

// Coding Challenge #2
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 

// Solution
// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// const massMark = 95
// const heightMark = 1.88
// const massJohn = 85
// const heightJohn = 1.76
// BODY MASS INDEX FOR JOHN AND MARK
// const BMIMark = massMark / heightMark ** 2
// const BMIJohn = massJohn / heightJohn ** 2
// console.log(BMIMark, BMIJohn)

let BMIMark = 26.8;;
let BMIJohn = 27.4;;

// TAKING DECISIONS
if (BMIMark > BMIJohn) {
    console.log(`"Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn})is higher than Mark's BMI (${BMIMark})!`)
}

