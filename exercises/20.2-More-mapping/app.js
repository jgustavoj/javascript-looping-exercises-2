

var myNumbers = [23,234,345,4356234,243,43,56,2];

function myFunction (number){
    return number * 3;
}
// your code here
let newArray = myNumbers.map(myFunction);

console.log(newArray);