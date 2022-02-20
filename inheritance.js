class Vahicle{
    model;
    price;
    fuelCapacity;
    constructor(model, price, fuelCapacity){
        this.model = model ;
        this.price = price;
        this.fuelCapacity = fuelCapacity;
    }

    displayVahicleInfo(){
        console.log(`model : ${this.model}  price:${this.price} & fuel capacity : ${this.fuelCapacity}`);
    }
}

class Sedan  extends Vahicle{
    totalSeat;

    constructor(model, price, fuelCapacity, totalSeat){
        super(model, price, fuelCapacity);
        this.totalSeat =totalSeat;
    }    

    displayCarInfo(){
        console.log(`model : ${this.model}  price:${this.price}  fuel capacity : ${this.fuelCapacity} total seat : ${this.totalSeat}`);
    }
}

class Truck extends Vahicle{
    totalLoad;
    constructor(model, price, fuelCapacity, totalLoad){
        super(model, price, fuelCapacity);
        this.totalLoad =totalLoad;
    } 

       
    displayTruckInfo(){
        console.log(`model : ${this.model}  price:${this.price}  fuel capacity : ${this.fuelCapacity} total load : ${this.totalLoad}`);
    }

}


const vahicle = new Vahicle('cycle', 10000, 0);
const bmw = new Sedan('BMW', 7000000, 60, 5);
const truck = new Truck('MAN', 100000000, 100,40);


vahicle.displayVahicleInfo();                   //model : cycle  price:10000 & fuel capacity : 0
bmw.displayCarInfo();                           //model : BMW  price:7000000  fuel capacity : 60 total seat : 5
truck.displayTruckInfo();                       //model : MAN  price:100000000  fuel capacity : 100 total load : 40