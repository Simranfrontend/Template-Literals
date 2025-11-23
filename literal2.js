// ======================================
// 1. Template Literals + Expressions
// ======================================
console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `This is line one
This is line two
This is line three`;
console.log(multiLine);

const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);

// ======================================
// 2. Arrow Functions & this
// ======================================
const square = n => n * n;
console.log(square(5));

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();

// Correct version
const objFixed = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
objFixed.test();

// ======================================
// 3. Rest, Spread & Copying Objects
// ======================================
const product = { name: "Pen", price: 10 };
const copiedProduct = { ...product };
console.log(copiedProduct);

const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(4, 8, 2, 9));

// ======================================
// 4. Destructuring & Optional Chaining
// ======================================
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

const info = {};
console.log(info.user?.name); // undefined, no error

// ======================================
// 5. Scoping (let/var/const)
// ======================================
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

for (let j = 0; j < 3; j++) {}

// ======================================
// 6. Ternary Operator – Practice
// ======================================
const kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

const age = 16;
console.log(age >= 18 ? "Adult" : "Minor");

const num = 0;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

// ======================================
// 7. Spread, Rest & Arrays
// ======================================
const nums = [1, 2, 3];
const updatedNums = [...nums, 4, 5];
console.log(updatedNums);

const arrA = ["x", "y"];
const arrB = ["z"];
const combinedArrays = [...arrA, ...arrB];
console.log(combinedArrays);

const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));

// ======================================
// 8. Object Destructuring & Shorthand
// ======================================
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

const role = "admin";
const user2 = { id, role };
console.log(user2);

const name = "Maya";
const score = 90;
const student = {
  name,
  score,
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
};
student.greet();

// ======================================
// 9. Template Literals (More Practice)
// ======================================
console.log(`Today's date: ${new Date().toDateString()}`);
console.log(`Hello ${name}, your score is ${score}/100`);

// ======================================
// 10. Arrow Function Shorthands
// ======================================
const add = (a, b) => a + b;
console.log(add(4, 6));

const isAdult = age => age >= 18;
console.log(isAdult(20));

const double = n => n * 2;
console.log(double(8));

// ======================================
// 11. Spread Operator (Arrays & Objects)
// ======================================
const numsArr = [10, 20, 30];
const clonedArr = [...numsArr];
console.log(clonedArr);

const arrNew = [100, ...numsArr];
console.log(arrNew);

const obj1 = { x: 1, y: 2 };
const obj2 = { y: 50, z: 3 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// ======================================
// 12. Optional Chaining (More Practice)
// ======================================
const userInfo = { name: "Alex", address: { city: "Bangalore" } };
console.log(userInfo.address?.city);

console.log(userInfo.job?.title); 

const safe = {};
console.log(safe.profile?.email); 
