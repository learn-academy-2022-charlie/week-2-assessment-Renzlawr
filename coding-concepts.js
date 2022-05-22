// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer: The output should be an array. It should contain every character in its own string
// b) Verify and explain: I was correct. The .split method splits each character into an array based on given arguments(in this case it's every character)


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This will output a string of "Hello, LEARN Student"
// b) Verify and explain: Attention to detail is important. no return = undefined *sad face*


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: This will log a new array with every number multiplied by 2
// b) Verify and explain: Yup it's just an array of numbers being iterated through, taking the individual values, and multiplying them by 2


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will output a new array that contains only the odd numbers.
// b) Verify and explain: This happens because filter iterates through the array and has a built in conditional that is testing each number too see if it's not even


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: This will log the first index of the language key inside the myCodingSkills object. "JavaScript"
// b) Verify and explain: Correct, the console.log is taking our object and going into the languages key and taking the first index of the value


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: This will return a new object learnStudent created from the class Learn. It will output the object {student: "George", cohort: "Bravo", year: 2022}
// b) Verify and explain: True since the class Learn is taking in a given name and applying it as the value to the student key. The other keys cohort and year are static in the created object. I wonder what George did wrong to get put into coding concepts... or maybe what he did right? 
