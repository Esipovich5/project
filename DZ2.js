/*let firstNumber = 133;
let secondNumber = 200;

if(firstNumber % 2 > 0){
   console.log(firstNumber);
}
   else
       console.log(secondNumber);
*/


/*let years = prompt('Enter year please','');

if(years % 4 == 0 && years % 100 != 0 || years % 400 == 0){
    alert('leap year');
}
    else {
        alert('Regular year');
    }
*/

/*let numberOne = 60;
let numberTwo = 50;
let numberThree = 70;
if(numberThree > numberTwo && numberThree < numberOne || numberThree > numberOne && numberThree < numberTwo) {
    console.log(numberThree);
}
    else if (numberTwo > numberOne && numberTwo < numberThree || numberTwo > numberThree && numberTwo < numberOne){
        console.log(numberTwo);
    }
        else
            console.log(numberOne);
*/

/*let numberOne = 250;
let numberTwo = 300;
let numberThree = 100;
if(numberThree > numberTwo && numberThree > numberOne) {
    console.log(numberThree);
}
    else if (numberTwo > numberOne && numberTwo > numberThree){
        console.log(numberTwo);
    }
        else
            console.log(numberOne);
*/

let day = prompt('Enter day','');
    switch(day) {
        case 'Sunday':
            console.log(1);
            break;
        case 'Monday':
            console.log(2);
            break;
        case 'Tuesday':
            console.log(3);
            break;
        case 'Wednesday':
            console.log(4);
            break;    
        case 'Thursday':
            console.log(5);
            break;
        case 'Friday':
            console.log(6);
            break;
        case 'Saturday':
            console.log(7);
            break;
    }
