//console log all array elements

const numbers = [10,20,30,40,50,60];

//normal

function foreachDetail(number){
    console.log(number);                    //10//20//30//40//50//60
}


for(const number of numbers){
    foreachDetail(number)
}


//with map
constmapResult = numbers.forEach(x => console.log(x));       //10//20//30//40//50//60