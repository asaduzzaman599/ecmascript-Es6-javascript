class Student{
    name;
    age;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    displayInfo(){
        console.log(`student name is ${this.name} and age is ${this.age}.`);
    }
}

const myObject = new Student('Mohammad Asaduzzaman', 22);
const myfriendObject = new Student('Akib Iftekhar', 23);

myObject.displayInfo();                 //student name is Mohammad Asaduzzaman and age is 22.
myfriendObject.displayInfo();           //student name is Akib Iftekhar and age is 23.