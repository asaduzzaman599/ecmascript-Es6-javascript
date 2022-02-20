//takes an array and more then 30  then return only first result

const numbers = [10,20,30,40,50,60];

//normal

function findDetail(number){
    return number > 30;
}

let result;

for(const number of numbers){
    if(findDetail(number)){
        result = number;
        break;
    }
}
console.log(result);                  //40


//with map
constmapResult = numbers.find(x => x > 30);
console.log(constmapResult);            //40