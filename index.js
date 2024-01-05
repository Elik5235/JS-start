function factorial (number){
  let res = 1
  if (number === 1 || number === 0){
return 1;
  }
  else if (number < 0){
    return null;
  }
  for (let it = 1;it <= number; it++){
    res = res * it;
  }
  return res;
}
console.log (factorial(170));

  
