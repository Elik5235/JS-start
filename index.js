//.
// const telphone1 = "888-9390-292-2211";
// const telphone2 = "888-9390-293-2211";
// const telphone3 = "888-9390-291-2211";
// const tel = {
//   0: "888-9390-292-2211",
//   1: "888-9390-293-2211",
//   2: "888-9390-291-2211",
// };
// const arr = [2, 2, 2, 3, 4];
// const arr2 = new Array(2, 2, 2, 3, 4);

// const Nom = [1, 2, 3, 4, ,5 ,6, 7 ,8 ,9 ,10];
// for ( let i = 0; i < Nom.length; i++){
//   if(Nom[i] % 2 === 0){
//     console.log(Nom[i]);
//   }
// }
//

const mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function plusnum(arr) {
 let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res
}
console.log(plusnum(mas))
