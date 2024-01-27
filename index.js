// const dog = {
//   nik: "tuz",
//   color: "black",
//   w: 3,
//   age: 4,
// }
// const catMethods = {
//   run: function () {
//     console.log("cat running");
//   },
//   meow: function () {
//     console.log("MEEEEEEEEEEOW=)");
//   },
// };
// dogA.__proto__ = catMethods;

//   {
//     nik: "muz",
//     color: "red",
//     w: 36,
//     age: 45,
//   },
//   {
//     nik: "kuz",
//     color: "yel",
//     w: 6,
//     age: 5,
//   },
//   {
//     nik: "fuz",
//     color: "blue",
//     w: 7,
//     age: 6,
//   },
// ];

// dogArray.sort((dog1, dog2) => {
//   if (dog1.age > dog2.age) {
//     return -1;
//   }
//   else{
//     return 1;
//   }
// });

// function MyArray(){
//     this.length = 0;

//     this.push = function (value){
//         this[this.length]= value;
//         this.length++;
//         return this.length
//     }
// }
// const arr = new MyArray();
// arr.push(1);
// arr.push(2);

// this.forEach = function (element) {
//   for (let i = 0; i < this.length; i++) {
//     element(this[i], i, this);
//   }
// }
// const arr = new MyArray();
// arr.push(3, 2, 5);
// arr.forEach((item) => {
//   console.log(item ** 2);
// });
// function Ladder() {
//   this.currentStair = 0;
// }
// function ladderProtorype() {
//   this.up = function () {
//     this.currentStair++;
//   };
//   this.down = function () {
//     this.currentStair--;
//   };
//   this.showStair = function () {
//     return this.currentStair;
//   }
// }
// Ladder.prototype = new ladderProtorype();
// const ladder = new Ladder();
// console.log(ladder.up());
// function test() {
//   console.log(this);
// }
// test();
// const test2 = function () {
//   console.log(this);
// };
// test2();
// console.log(this);
// function sum (a,b){
//   return a + b;
// }
// const sumA = ( a, b) => {
//   return a + b;
// }
// const sumA2 = (a,b) => a + b; //odno i tozhe

// const kub = number => number ** 2;
// const SupF = () => {
//   this.value = 'hello';

// }
// const t1 = function(){
//   console.log(arguments)
// }
// t1('hello', 'world','!!')
// const arrowSum = (...reas) => {
//   let sum = 0;
//   for(let i = 0; i < reas.length; i++){
// sum += reas[i]
//   }
//   return sum;
// }
// const array1 = (...reas) => {
//   const sum = reas.reduce((a, b) => {
//     return a + b;
//   }, 0);
//   return sum;
// };
// const numbers89 = [1,2,3,4,5];
// function sum (a,b, ...rest){
//   console.log(rest);
//   return a + b;
// }
// console.log(sum(numbers))



const numbers1 = [1,2,3,4,5];
const numbers = [1,2,3,4,5];
const coppyNum = [...numbers,...numbers1]
console.log(coppyNum)