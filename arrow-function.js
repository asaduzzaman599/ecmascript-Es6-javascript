//single line function with no parameter
const prinstSomething = () => console.log('hello world');

//function call
prinstSomething();  //hello world



//single line function
//add two numbers
const addTwoNumber = (number1 = 0, number2 = 4) => number1 + number2;

console.log(addTwoNumber(2,3));   //5
//default parameter
console.log(addTwoNumber(2));     //2

//multiline arrow
//compare return large number

const largeNumber =(number1, number2 ,number3) =>{
    if(number1 > number2 && number1 > number3){
        return `${number1} is larger number.`;
    }
    else if(number2 > number1 && number2 > number3){
        return `${number2} is larger number.`;
    }else{
        return `${number3} is larger number.`;
    }
}

console.log(largeNumber(2,4,3));  //4 is larger number.




