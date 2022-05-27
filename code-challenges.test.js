// ASSESSMENT 2: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// First create a test taking in the function name isDiv3
// make an it telling us the function takes in a number and decides if it is evenly divisible by 3 or not.
// This test will have 3 expects, one for each number. Have the test good fail

describe("isDiv3", () => {
    it("takes in a number and decides if it is evenly divisible by 3 or not.", () => {
        const num1 = 15
        // Expected output: "15 is divisible by three"
        const num2 = 0
        // Expected output: "0 is divisible by three"
        const num3 = -7
        // Expected output: "-7 is not divisible by three"
        expect(isDiv3(num1)).toEqual("15 is divisible by three")
        expect(isDiv3(num2)).toEqual("0 is divisible by three")
        expect(isDiv3(num3)).toEqual("-7 is not divisible by three")
    })
})

// Red
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run
// ReferenceError: isDiv3 is not defined

// b) Create the function that makes the test pass.

// Create a function named isDiv3 with the parameter number
// create a conditional using ternary operator that takes the condtion number modulo three strictly equals zero
// have the true statement be string interpolation taking in number and saying it's divisible by three
// have the false statement be string interpolation as well taking in number and saying is not divisible by three
// return the conditional
// run the test and see a pass

// const isDiv3 = (number) => {
//     return number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three`
// }

// Green
// PASS  ./code-challenges.test.js
//   isDiv3
//     ✓ takes in a number and decides if it is evenly divisible by 3 or not. (2 ms)


// Refactor
// Lowest refactor point
// condensed into a single line of code
const isDiv3LowestRefactor = number => { return number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three` }


// Prefered refactor for readability

const isDiv3 = (number) => {
    return number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three`
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// Create a test taking in a function named wordUpper 
// It will tell us takes in an array of words and returns an array with all the words capitalized.
// We want two expects
// Have the test good fail

describe("wordUpper", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
        expect(wordUpper(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(wordUpper(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// Red
// FAIL  ./code-challenges.test.js
// ● wordUpper › takes in an array of words and returns an array with all the words capitalized.
//   ReferenceError: wordUpper is not defined

// b) Create the function that makes the test pass.

// Create a function names wordUpper that takes in the parameter array
// take the array and iterate through it with map
// find the first character and uppercase it
// add every letter of the string sliced off except the first one
// return the array
// test for pass

// const wordUpper = (array) => {
//     return array.map((value) => {
//         return value.charAt(0).toUpperCase() + value.slice(1)
//     })
// }

// Green 
// PASS  ./code-challenges.test.js
// wordUpper
//   ✓ takes in an array of words and returns an array with all the words capitalized. (1 ms)

// Refactor 
// Lowest refactor point
// Remove unnecessary parens and condensed into single line

const wordUpperLowestRefactor = array => { return array.map(value => { return value.charAt(0).toUpperCase() + value.slice(1) }) }

// Prefered refactor for readability

const wordUpper = (array) => {
    return array.map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// Make test that takes in function called firstVowel 
// it will tell us takes in a string and logs the index of the first vowel.
// expects three outputs 
// good fail test

describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel.", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})

// Red 
// FAIL  ./code-challenges.test.js
// ● firstVowel › takes in a string and logs the index of the first vowel.
// ReferenceError: firstVowel is not defined

// b) Create the function that makes the test pass.

// Create a function firstVowel that passes through string as the parameter
// create a variable called regex matching regular expressions of vowels
// search the string for matches and return it
// pass test

// const firstVowel = (string) => {
//     const regex = /[aeiouAEIOU]/
//     return string.search(regex)
// }

// Green 
// PASS  ./code-challenges.test.js
// firstVowel
//   ✓ takes in a string and logs the index of the first vowel.

// Refactor 
// This is the lowest refactor point
const firstVowelLowestRefactor = string => { return string.search(/[aeiouAEIOU]/) }

// This is my prefered refactor for readability

const firstVowel = (string) => {
    return string.search(/[aeiouAEIOU]/)
}