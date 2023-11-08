/*
 * Filename:  complex_code.js
 * Description: A complex code example demonstrating various JavaScript concepts and techniques.
 * Author: Your Name
 * Date: 2022-08-15
 */

// Define a class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define a class representing a Student, inheriting from Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  sayHello() {
    super.sayHello();
    console.log(`I am a student majoring in ${this.major}.`);
  }
}

// Define a class representing a Teacher, inheriting from Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  sayHello() {
    super.sayHello();
    console.log(`I am a teacher specializing in ${this.subject}.`);
  }
}

// Create instances of the Person, Student, and Teacher classes
const john = new Person("John Doe", 25);
john.sayHello();

const jane = new Student("Jane Smith", 20, "Computer Science");
jane.sayHello();

const mrSmith = new Teacher("Mr. Smith", 35, "Mathematics");
mrSmith.sayHello();

// Demonstrate array manipulation using map, filter, and reduce
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num);
console.log(`Squared numbers: ${squaredNumbers}`);

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Sum of numbers: ${sum}`);

// Define a higher-order function that returns a function
function createMultiplier(multiplier) {
  return function (number) {
    return multiplier * number;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(`Double of 5: ${double(5)}`);
console.log(`Triple of 5: ${triple(5)}`);

// Use promise chaining to simulate asynchronous operations
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data");
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(`Received data: ${data}`);
    return fetchData();
  })
  .then((data) => {
    console.log(`Received more data: ${data}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

// Implement an async function using async/await syntax
async function fetchAsyncData() {
  try {
    const data = await fetchData();
    console.log(`Received data (async): ${data}`);
  } catch (error) {
    console.error(`Error (async): ${error}`);
  }
}

fetchAsyncData();

// Define a generator function that yields an infinite sequence
function* fibonacciGenerator() {
  let prev = 0;
  let current = 1;

  while (true) {
    yield current;
    const next = prev + current;
    prev = current;
    current = next;
  }
}

const fibonacci = fibonacciGenerator();

console.log("Fibonacci sequence:");
for (let i = 0; i < 10; i++) {
  console.log(fibonacci.next().value);
}

// Implement a class using ES6 modules
import { calculateArea, calculateCircumference } from "./geometry";

console.log(`Area of a circle with radius 5: ${calculateArea(5)}`);
console.log(`Circumference of a circle with radius 5: ${calculateCircumference(5)}`);

// Demonstrate destructuring assignment
const student = { name: "Alice", age: 22, major: "Biology" };
const { name, age, major } = student;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Major: ${major}`);

// Demonstrate the spread operator
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const mergedNumbers = [...numbers1, ...numbers2];

console.log(`Merged numbers: ${mergedNumbers}`);

// Define some utility functions
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function printDelayed(value, delayMs) {
  await delay(delayMs);
  console.log(value);
}

// Demonstrate usage of async/await and utility functions
async function printValuesInOrder() {
  await printDelayed("First", 1000);
  await printDelayed("Second", 500);
  await printDelayed("Third", 100);
}

printValuesInOrder();

// ... Additional code goes here ...