`use strict`

// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

// SOLUTION
// function describeCountry(country, population, capitalCity ) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }
// const countryA = console.log(describeCountry(`Finland`, 6, `Helsinki`))
// const countryB = console.log(describeCountry(`Nigeria`, 2.2, `Abuja`))
// const countryC = console.log(describeCountry(`Ghana`, 8, `Accra`))

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

// SOLUTION
// function declaration
// function percentageOfWorld1(  population) {
//      return (population / 7900) * 100
//     return `${country} has ${population} million people, which is about
//     ${percentagePopulation}% of the world`
// }
// const countryA = console.log(percentageOfWorld1(`Finland`, 6))
// const countryB = console.log(percentageOfWorld1(`Nigeria`, 2.2))
//  const countryC = console.log(percentageOfWorld1(`China`, 1441))

//  function expression
// const  percentageOfWorld2 = function(country, population) {
//     const percentagePopulation = (population / 7900) * 100
//     return `${country} has ${population} million people, so it's about
//              ${percentagePopulation}% of the world population`
// }
// const countryA = console.log(percentageOfWorld2(`Finland`, 6))
// const countryB = console.log(percentageOfWorld2(`Nigeria`, 2.2))
//  const countryC = console.log(percentageOfWorld2(`China`, 1441))

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

// SOLUTION
// const percentageOfWorld3=(country, population)=>{
//     const percentagePopulation = (population / 7900) * 100
//     return `${country} has ${population} million people, so it's about
//              ${percentagePopulation}% of the world population`
// }
// const countryA = console.log(percentageOfWorld3(`Finland`, 6))
// const countryB = console.log(percentageOfWorld3(`Nigeria`, 2.2))
//  const countryC = console.log(percentageOfWorld3(`China`, 1441))

// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

// SOLUTION
// function describePopulation(country, population){
//     const percentagePopulation = percentageOfWorld1(population)
//     return `${country} has ${population} million people, which is about
//     ${percentagePopulation}% of the world`
// }
// const countryA = console.log(describePopulation(`Finland`, 6))
// const countryB = console.log(describePopulation(`Nigeria`, 2.2))
//  const countryC = console.log(describePopulation(`China`, 1441))

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �
// GOOD LUCK �

// SOLUTION
// DATA1
// const calcAverage=(a, b, c)=>{
//     return (a+b+c)/ 3
//  }
//      const teamA = calcAverage(44, 23, 71) 
//     const teamB = calcAverage(65, 54, 49)



//  const checkWinner=(avgDolphins,avgKoalas)=>{
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs.  ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs.  ${avgDolphins})`)
//     } else {
//         console.log(`No team wins`)
//     }
//  }
//  checkWinner(teamA, teamB)


//  DATA2
// const calcAverage=(a, b, c)=>{
//     return (a+b+c)/ 3
//  }
//  const teamA = calcAverage(85, 54, 41) 
//  const teamB = calcAverage(23, 34, 27)

//  const checkWinner=(avgDolphins,avgKoalas)=>{
    
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolpins win (${avgDolphins} vs.  ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs.  ${avgDolphins})`)
//     } else {
//         console.log(`No team wins`)
//     }
//  }
//  checkWinner(teamA ,teamB)
 

