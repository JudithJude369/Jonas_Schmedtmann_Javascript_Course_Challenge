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

// let BMIMark = 26.8;
// let BMIJohn = 27.4;

// TAKING DECISIONS
// if (BMIMark > BMIJohn) {
//     console.log(`"Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`)
// } else {
//     console.log(`John's BMI (${BMIJohn})is higher than Mark's BMI (${BMIMark})!`)
// }

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

// Solution
// console.log('9' - '5')
// console.log('19' - '13' + '17')
// console.log('19' - '13' + 17)
// console.log('123' < 57)
// console.log(5 + 6 + '4' + 9 - 4 - 2)

// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// SOLUTION
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'))

// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('No borders')
// }

// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)

// SOLUTION
// const country = `Nigeria`
// const language = `English`
// const population = 22.2
// const island = false

// if (language === `English` && population < 50 && !island) {
//     console.log(`You should live in ${country}`)
// } else {
//     console.log(`${country} does not meet your criteria`)
// }

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK �

// SOLUTION
// QUESTION 1
// const scoreDolphins = (96 + 108 + 89) / 3 
// const scoreKoalas = (88 + 91 + 110) / 3
// console.log(scoreDolphins, scoreKoalas)

// // // QUESTION 2
// if ( scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins wins the trophy`)
// } else if (scoreKoalas > scoreDolphins ) {
//     console.log(`Koalas wins the trophy`)
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`No team wins the trophy`)
// }

// QUESTION 
// const scoreDolphins = (97 + 112 + 101) / 3 
// const scoreKoalas = (109 + 95 + 123) / 3
// console.log(scoreDolphins, scoreKoalas)
// if (scoreDolphins > scoreKoalas && scoreDolphins  >= 100 )  {
//     console.log(`Dolphins wins the trophy`)
// }  else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100 ) {
//     console.log(`Koalas wins the trophy`)
// }


// QUESTION 4
// const scoreDolphins = (97 + 112 + 101) / 3 
// const scoreKoalas = (109 + 95 + 106) / 3
// console.log(scoreDolphins, scoreKoalas)
// if (scoreDolphins > scoreKoalas && scoreDolphins  >= 100 )  {
//     console.log(`Dolphins wins the trophy`)
// }  else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100 ) {
//     console.log(`Koalas wins the trophy`)
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log(`No team wins the trophy`)
// }