function calculator(num1, num2, functionLink) {
  let results = functionLink(num1, num2);
  return results;
}
console.log(calculator(5, 5, plus));

console.log(calculator(3, 2, function (a, b) {
  return a**b;
}));
function minus(a, b) {
  return a - b;
}
function plus(a, b) {
  return a + b;
}
