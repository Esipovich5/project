/*
function sum(params,params1) {
    return params + params1;
};
alert(sum(53,47));



function involution(params) {
    return params * params;
}
console.log(involution(11));


function minus(params,params1) {
    return params1 - params;
}
alert(minus(40,80));


function sum(param,param1,param2) {
    return (param + param1) * param2;
}
console.log(sum(8,2,4));


function name() {
    console.log('Sergey');
}
name();

function name() {
    alert('Sergey');
    
}
name();

function name() {
    console.log('Sergey');
    alert('Sergey');
}
name();


function name(params) {
    alert(params);
}
name('Wow');


function sum(param) {
    let sum = 0;
    for(let i = 1; i <= param; i++){
        if(i % 2 != 0){
            sum = sum + i;
        }
        
    }   
    return sum;
}
console.log(sum(prompt('enter number')));



function bigNumber(param,param1,param2){
    if(param > param1 && param > param2){
        return param;
    }
    if(param1 > param && param1 > param2){
        return param1;
    }
    if(param2 > param && param2 > param1){
        return param2;
    }
}
console.log(bigNumber(15,7,5));



function day(param){
    
        switch (param) {
            case '1':
                console.log('Sunday');
                break;
            case '2':
                console.log('Monday');
                break;
            case '3':
                console.log('Tuesday');
                break;
            case '4':
                console.log('Wednesday');
                break;    
            case '5':
                console.log('Thursday');
                break;
            case '6':
               console.log('Friday');
                break;
           case '7':
                console.log('Saturday');
                break;
    }
}
day(prompt('Enter number'));



function type(param){
    console.log(typeof(param));
}
type(false);
*/


//function bigNumber(param){
    let max = 0;
    for(let i = 1; i <= 8; i++){
        if(i % 2 == 0){
            
        }
        
       if(max <= i){
       max = i;
       
        }
        
    }
    console.log(max); 

//}













