//takes an array and multiple by 3  then return another new array with result

const numbers = [10,20,30,40,50,60];

//normal

function mapDetail(number){
    return number * 3;
}

const result = [];

for(const number of numbers){
    result.push(mapDetail(number));
}
console.log(result);                  //[ 30, 60, 90, 120, 150, 180 ]


//with map
constmapResult = numbers.map(x => x*3);
console.log(constmapResult);            //[ 30, 60, 90, 120, 150, 180 ]