//takes an array and more then 40  then return another new array with result

const numbers = [10,20,30,40,50,60];

//normal

function filterDetail(number){
    return number > 40;
}

const result = [];

for(const number of numbers){
    if(filterDetail(number)){
        result.push(number);
    }
}
console.log(result);                  //[  50, 60 ]


//with map
constmapResult = numbers.filter(x => x > 40);
console.log(constmapResult);            //[ 50, 60 ]