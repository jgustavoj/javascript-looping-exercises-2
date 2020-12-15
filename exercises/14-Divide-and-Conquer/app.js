let list_of_numbers = [4,	80,	85,	59,	37,25,	5,	64,	66,	81,20,	64,	41,	22,	76,76,	55,	96,	2,	68];

// your code here
// your code here
//create function with function then name of function 
//create variable with empty array called odd in order to push odd numbers into 
//create variable with empty array called even in order to push even numbers into 
//create a for loop that iterates through the list of numbers array
//create conditional statement with if the value 
//if statements pushes odd into even array 
//else statement pushes even into even array
//

let odd =[];
let even = [];
let newArray= [];
let mergeTwoList = (arr) => {    
    for(let i=0; i < arr.length; i++){
        if(arr[i] %2 == 0 ){
            even.push(arr[i]);
        } else{
            odd.push(arr[i]);
        }
    }
    newArray.push(odd);
    newArray.push(even);
    console.log(newArray);

}

mergeTwoList(list_of_numbers)

