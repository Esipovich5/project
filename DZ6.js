/*
let warn = {
    danger: function(){
        alert('Danger!')
    },
    fire: function(){
        alert('Fire!')
    },
};

warn.danger();
warn.fire();
*/


let Car = {
    make:'USA',
    displayMake:function(){
        console.log(this.make);
    },
    model:'BMW',
    displayModel:function(){
        console.log(this.model);
    },
    
    year: 2003,
    displayYear:function(){
        console.log(this.year);
    },
    color: 'black',
    displayColor:function(){
        console.log(this.color);
    },
    weight: 3000,
    displayWeight:function(){
        console.log(this.weight);
    },
};



let Ford = Object.create(Car);
Ford.year = 2015;
Ford.displayYear();
Ford.displayColor();