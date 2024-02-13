`use strict`
    
// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

// SOLUTION
// myCountry = {
//     country : `Nigeria`,
//     capital : `Abuja`,
//     language: [`English`],
//     population: 22.2,
//     neighbours: [`Ghana`, `Benin-republic`, `Mali`],
//     describe: function() {
//        return  `${this.country} has ${this.population} million
//          ${this.language} speaking people, ${this.neighbours.length}
//         neighbouring countries and a capital called ${this.capital}.`
//     },

//       checkIsland: function() {
//       this.isIsland = this.neighbours.length === 0 ? true : false
//       return this.isIsland
//     }
// }
// console.log(myCountry.describe())
// console.log(myCountry.checkIsland())

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �

    //  SOLUTION 
//     const Mark = {
//         fullname:`Mark Miller`, 
//         mass: 78,
//         height :1.69, 
//         calcBMI: function() {
//             //  this.BMIValue =  this.mass / this.height ** 2
//             this.BMIMark = this.mass /(this.height * this.height) 
//              return this.BMIMark 
//         } 
//     }
//     console.log(Mark.calcBMI())

//     const John = {
//         fullname:`John Smith`, 
//         mass: 92,
//         height :1.95, 
//         calcBMI: function() {
//             //  this.BMIJohn =  this.mass / this.height ** 2
//             this.BMIJohn = this.mass /(this.height * this.height) 
//              return this.BMIJohn
//         } 
//     }
//     console.log(John.calcBMI())
// console.log(
//     Mark.calcBMI() > John.calcBMI() || John.calcBMI() > Mark.calcBMI() ?
//     `${Mark.fullname}'s BMI (${Mark.calcBMI()}) is higher than ${John .fullname}'s BMI (${John.calcBMI()})!`:
//     `${John .fullname}'s BMI (${John.calcBMI()})is higher than ${Mark.fullname}'s BMI (${Mark.calcBMI()})!`
// )

// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

// SOLUTION
// for (let voters = 1; voters <= 50; voters++) {
//     console.log(`Voter number ${voters} is currently voting`)
// }

// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

// SOLUTION
// (population / 7900) * 100;
// const populations = [22.2, 1441, 332, 15]
// const percentages2 = []
// for (let i = 0; i < populations.length; i++) {
//     percentages2.push((populations[i] / 7900) * 100)
// }
// console.log( percentages2)

