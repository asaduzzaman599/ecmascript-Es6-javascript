//object distructuring
const desktop = {
   monitor:{
       name:"Dell",
       price:11000
   },
   pc:{
    cpu:{
        name:"AMD",
        model:'Ryzen 5 3600x',
        prcie:1800
    },
    ram:{
        name:"G.skill",
        size:'8GB',
        quantity:'2',
        mhz:3200,
        price:5000
    },
    graphics:{
        name:"Zotac",
        model:'1660 super',
        price:25000,
    }
   }
};

//name and price of ram from object by object destructuring

const {name,price} = desktop.pc.ram;


console.log(`Ram name ${name} price is ${price}`)       //Ram name G.skill price is 5000

//array destructuring 

const [ a, b] = [10,20,30,40,50]
console.log(a,b)       //10 20