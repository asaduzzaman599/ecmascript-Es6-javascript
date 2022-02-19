//find out the largest element in the array
const largeNumber = (numbers) => `${Math.max(...numbers)} is large number`;

console.log(largeNumber([5,100,9,3,85,63,72]))        //100 is large number

//duplicate an create a full new array

const oldArr = [1,2,3,4,5,6];
const newArr = oldArr;              //without spread operator
const fullNewArr = [...oldArr];    //with spread operator

console.log('\nBefore pop and push');    //Before pop and push
console.log(oldArr);                     //[ 1, 2, 3, 4, 5, 6 ]
console.log(newArr);                     //[ 1, 2, 3, 4, 5, 6 ]
console.log(fullNewArr);                 //[ 1, 2, 3, 4, 5, 6 ]

oldArr.pop();
oldArr.push(8);

console.log('\nAfter pop and push');     //After pop and push
console.log(oldArr);                     //[ 1, 2, 3, 4, 5, 8 ]
console.log(newArr);                     //[ 1, 2, 3, 4, 5, 8 ]
console.log(fullNewArr);                 //[ 1, 2, 3, 4, 5, 6 ]


//find out max from numbers

const max = Math.max(...fullNewArr);
console.log(`${max} is large number`)     //6 is large number
