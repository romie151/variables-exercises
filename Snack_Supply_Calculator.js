// // Snack Supply Calculator:
// // Store your current age in a variable.
// // Store a maximum age in a variable.
// // Store an estimated amount per day (as a number).
// // Calculate how many you would eat total, from your current age until the maximum age.
// // Log the result to the screen like this: "You will need NN to last you until the age of X".

var currentAge = 24
var maxAge = 30
var snacksPerDay = 3

var snacksPerYear = 365 * snacksPerDay

console.log("I will need " + (snacksPerYear * (maxAge - currentAge)) + " to last me until the age of " + maxAge)
