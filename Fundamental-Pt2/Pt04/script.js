`use strict`

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway �

// SOLUTION
// const listOfNeighbours = [
//     ['Canada', 'Mexico'], 
//     ['Spain']
//     , ['Norway', 'Sweden','Russia']
// ];
// for  (let i = 0; i < listOfNeighbours.length; i++) {
//     console.log(`Neighbour: ${listOfNeighbours[i]} for each country`)
//     for  (let y = 0; y < listOfNeighbours.length; y++) {
//     console.log(`Neighbour: ${listOfNeighbours[y]} for each country`)
// }
// }


// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK �

// SOLUTION
// const calcTip=(bill)=>{
//     return  bill >= 50 && bill <= 300 ? bill * (15/100) : bill * (20/100)
//  }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals =  [];
// for ( let i = 0; i < bills.length; i++) {
// const tip = (calcTip(bills[i]))
// tips.push(tip)
// totals.push(tip + bills[i])
// }
// console.log(totals, tips)

// // BONUS
// const calcAverage=(arr)=>{
//     let sum = 0
//     for ( let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//         }
//         return sum/arr.length
//  }
//  console.log(calcAverage(tips))
//  console.log(calcAverage(totals))
//  console.log(calcAverage(bills))
