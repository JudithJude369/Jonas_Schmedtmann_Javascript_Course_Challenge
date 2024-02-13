`use strict`

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

// SOLUTION
// const populations = [22.2, 33, 11, 12]
//  populations.length === 4 ? console.log(true) : console.log(false)

// function percentageOfWorld1(  population) {
//     return (population / 7900) * 100
//  }
// const percentages = [
//      percentageOfWorld1( populations[0]),
//      percentageOfWorld1( populations[1]), 
//      percentageOfWorld1( populations[2]), 
//      percentageOfWorld1( populations[3])
// ]
//  console.log(percentages)

// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

// SOLUTION
// const neighbours = ['Ghana', 'Mali', 'Benin-republic']
// neighbours.push('Utopia')
// neighbours.pop()
// if (!neighbours.includes('Germany')) {
//     console.log('Probably not a central European country :D')
// }
// console.log(neighbours.indexOf('Ghana'))
// neighbours[0] = 'Republic of Ghana'
// console.log(neighbours)

// Coding Challenge #2
//       Steven is still building his tip calculator, using the same rules as before: Tip 15% of
//       the bill if the bill value is between 50 and 300, and if the value is different, the tip is
//       20%.
//       Your tasks:
//       1. Write a function 'calcTip' that takes any bill value as an input and returns
//       the corresponding tip, calculated based on the rules above (you can check out
//       the code from first tip calculator challenge if you need to). Use the function
//       type you like the most. Test the function using a bill value of 100
//       2. And now let's use arrays! So create an array 'bills' containing the test data
//       below
//       3. Create an array 'tips' containing the tip value for each bill, calculated from
//       the function you created before
//       4. Bonus: Create an array 'total' containing the total values, so the bill + tip
//       Test data: 125, 555 and 44
//       Hint: Remember that an array needs a value in each position, and that value can
//       actually be the returned value of a function! So you can just call a function as array
//       values (so don't store the tip values in separate variables first, but right in the new
//       array) �
//       GOOD LUCK �
      
//       SOLUTION
// const calcTip=(bill)=>{
//    return  bill >= 50 && bill <= 300 ? bill * (15/100) : bill * (20/100)
// }
// console.log(calcTip(100))
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]]
// console.log(bills, tips, totals)

// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

// SOLUTION
// myCountry = {
//     country : `Nigeria`,
//     capital : `Abuja`,
//     language: [`English`],
//     population: 22.2,
//     neighbours: [`Ghana`, `Benin-republic`, `Mali`]
// }

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

// SOLUTION
// console.log(`${myCountry.country} has ${myCountry.population} million
//  ${myCountry.language} speaking people, ${myCountry.neighbours.length}
//  neighbouring countries and a capital called ${myCountry.capital}.`)

//  let increasePopulation = myCountry.population + 2
//  console.log(increasePopulation)
//  increasePopulation = myCountry[`population`] - 2
//  console.log(increasePopulation)

//  SELF CODING PRACTICE
//  const countryName= prompt(`What do you want to know about my country? 
//  Choose between language, neighbours, population, president`)
//  myCountry[countryName] = `Jagaban`
//  console.log(myCountry[countryName])
      
    
      
