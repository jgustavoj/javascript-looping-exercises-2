var myArray = [2323, 4344, 2325, 324413, 21234, 24531, 2123, 42234, 544, 456, 345, 42, 5445, 23, 5656, 423];
let currentMax = 0;
let lengthArray = myArray.length;
let mean = 0; 
for (var index in myArray) {
    currentMax += myArray[index];
}
 mean = currentMax/lengthArray; 
 console.log(mean); 
