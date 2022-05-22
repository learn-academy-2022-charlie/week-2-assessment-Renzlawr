# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parameter is a name you pass through a function inside the parentheses that is dynamic and scoped locally. An argument is passed through a function invocation in the parentheses and is taken in the function as the parameters. So the difference would be parameters are used in the function in place of data types and arguments are used outside the fuction to pass through different data types to the function.

  Researched answer: After researching I found that there's 2 types of parameters(parameters are also considered as variables). The input which pass in values to your function, and the output which return multiple values from your function.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: .map() is a higher order function you can only use on arrays and are used for iteration. Their predefined parameters are value, index, and array in that order. the parameters are part of the callback function passed through .map(). index and array are optional parameters as you can just declare value. Also note that .map() returns a new array, if you're looking to iterate through an array and change your existing array use .forEach()

  Researched answer: Looks like I was pretty close to the entire answer but it seems I missed thisArg which is the value to use this when you are executing the callback function. callback functions also only applies to indexes of the array that actually have values assigned to them, undefined counts here as a value.



3. What is the difference between map and filter?

  Your answer: Both .map() and .filter() are used to iterate through arrays, take in callback functions with value(index, and array are optional here too), and both also create new arrays once returned. The primary difference between the two is map iterates through the array where filter iterates through the array and contains a built in conditional that takes in values and returns only the ones that come back as matching your conditionals requirements. Effectively "filtering" the data that you return. Imagine using for loops with conditional statements... yuck

  Researched answer: When using map you iterate through the array and have it return a whole new array with changed values based on what you want to change, however with filter it just checks if your array meets certain requirements and makes decisions from there and won't alter the values of your array. 



4. What is the difference between a function and a method?

  Your answer: First what is a function and a method. A function is a reusable dynamic code block assigned to a variable. A method is similar, being a code block that can be applied to classes and other functions. So the difference would be methods have to be appended to a parent component and functions can be used seperately from other functions. 

  Researched answer: Methods take in function definitions and are applied to objects. Methods are also stored in objects as properties that can be assigned to classes. Objects that take on a method don't need parentheses like how functions do when calling them.



5. What is object destructuring?

  Your answer: Object destructuring is where you declare a variable within curly braces and it takes in a specific "path" to part of your object. So if I had an object containing animals with another nested object I could assign the second object to my variable.

  Researched answer: Object destructuring takes in properties of an object and assigns them to variables to be used elsewhere. This is really good for sending and receiving large amounts of data.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I'm pretty sure hoisting refers to being able to use a function in your code before you've even declared it? Not sure how it works but isnt it taking in arguments before the function and then applying them later? I feel like you would solely get errors. Only example I can think of is testing with Jest, I think that can be listed as hoisting since when we test with jest we don't need to invoke our function(at least not outside our test).

  Researched answer: Hoisting works on functions, variables and scope. It allows us to call functions before declaration. Testing is a big part of the usefulness of hoisting. You also get a ReferenceError instead of undefined which means it was previously undefined.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Class inheritance is super awesome as it allows you to make a parent class with its own constructor and parameters. Then make a new class that "extends" the parent class, inside the constructor of this child class you use super() which takes in the parameters of the parent classes constructor. This allows for use of a class that contains values that all child classes with have while allowing them to have their own differences. 

2. React: React is a javascript library for building user interfaces. React can be object oriented or function oriented and for LEARN we'll be using class and object oriented programming. We use JSX for react which is a syntax extension for javascript which allows us to use and write html inside react. React is used for managing user interactions seamlessly and efficiently, it achieves this by updating only changed nodes in the DOM instead of reloading the entire page. 

3. React state: React state is a built in object that contains properties with values. Whenever this object is changed the react component re renders.

4. React lifecycle methods: React components have lifecycles with 3 phases that are mounting(inserting objects into the DOM), updating(when the component updates based on changes in state or props), and unmounting(which is taking the object out of the DOM). 

5. DOM: The DOM is the document object model, which gives us a visual representation of HTML elements and tags. It is also language-independent.
