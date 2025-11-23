//Template Literals
const username = "Simran";
const course = "Full-Stack Web Development";

console.log(`Hello ${username}, welcome to the ${course} course!`);


//Convert object into shorthand syntax
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

//Arrow Function shorthand (implicit return)
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Sam", "Williams")); 
student.greet(); 
