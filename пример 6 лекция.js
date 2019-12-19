/*
let user = {
    
    leg:2,
    arm:2,
    dogs:['Reks','Feks'],
    
    create:function (param){
        alert('Successful')
    }, 
    
    delete:function name(param){

    },

    update:function name(param){

    },

    changeStatus:function name(param){

    },

    balance:function name(param){

    },

}

/////////////////////////////////////////////////////////////////

for (const key in user) {
    if (user.hasOwnProperty(key)) {
        
        console.log(key);
    }
}

console.log(user);

//////////////////////////////////////////////////////////////

function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}

let obj = new Car('USA','Ford',1991);

let obj1 = new Car('Germany','BMW', 1987);

let obj2 = new Car('France','Renault',2005);

console.log(obj,obj2);

///////////////////////////////////////////////////////////////

let Animal = {
    type: 'Invertebrates',
    displayType:function(){
        console.log(this.type);
    }
};

let animal1 = Object.create(Animal);
animal1.displayType();

let fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType();


let pets = Object.create(Animal);
pets.displayType();

let dog = Object.create(fish);
dog.displayType();
console.log(dog);

////////////////////////////////////////////////////////////// 

delete fish.type;
console.log(fish);

////////////////////////////////////////////////

let obj = {
    arm:2,
};

let obj1 = obj;
obj1.leg = 2;

let obj2 = {
    arm:2,
    leg:2,
};

console.log(obj);

console.log(obj === obj1);
console.log(obj1 === obj2);
*/








