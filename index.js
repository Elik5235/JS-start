const departmentSalary = {
  HR: 120000,
  development: 100000,
  PR: 1200,
  MARK: 21211,
  asisstant: undefined,
};
function greet(departmentSalary) {
  let sum = 0;
  let nameOfUndefined;
  for (let key in departmentSalary) {
    if (typeof departmentSalary[key] !== undefined) {
      sum += departmentSalary[key];
    } else {
      nameOfUndefined = key;
      console.log("blablabla"`${nameOfUndefined}`);
    }
  }
  return sum;
}
console.log(greet(departmentSalary));
