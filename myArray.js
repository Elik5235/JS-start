const arr1 = [4, 3, 7, 5, -11];
const arr2 = [3, 4, 8, 7, 2, -11];
const newSet = [...arr1.values(), ...arr2.values()];
const noPair = [...new Set(newSet)];
console.log(noPair);
