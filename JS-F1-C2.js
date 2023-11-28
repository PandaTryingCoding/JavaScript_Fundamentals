// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.

// Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// Hint: Use an if/else statement

// Solution:

const markWeight = 78;
const johnWeight = 92;

const markHeight = 1.69;
const johnHeight = 1.95;

const markBmi = markWeight / (markHeight * markHeight);
console.log("Mark's BMI ~ ", markBmi);

const johnBmi = johnWeight / (johnHeight * johnHeight);
console.log("John's BMI ~ ", johnBmi);

const markHigherBmi = markBmi > johnBmi;
{
  markHigherBmi
    ? console.log(
        `Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi})`
      )
    : console.log(
        `"Mark's BMI (${markBmi}) is lower than John's BMI (${johnBmi})`
      );
}
