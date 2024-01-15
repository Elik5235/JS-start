// const arr = [1,2,3,4,5,6];
// console.log(arr.reverse());

// const arr1 = [2,3,4,5,6,7];
// console.log(arr1.concat(arr));

// const arr2 = [aaa,sss,ddd];
// console.log(arr2.push());

// const arr3 = [21,2,12,2,12,4,'12']
// arr3.pop;
// console.log(arr3.join);

// const arr4 = [2,2,3,4,6,67,11]
// console.log(arr4.join)
// const arr = [1,2,3,4,5,6];
// console.log(arr.splice(2, 1))

// console.log(arr.splice(2,0,'hi'))

// const arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.splice(1, 2));

// const arr2 = [1,2,3,4];
// const arr4 = arr2.slice(1);


// const arr3 = [1, 2, 3, 4, 5];
// arr3.splice(8,0,'aa')
// arr3.splice(1,0,'w','tr-td');
// arr3.splice(6,0,'vv')
function IDE(arr) {
    for(let i = 0; i < Array.length; i++){
      if(arr[i] === arr[i + 1]) {
            return true;
        }
    }
return false;
}