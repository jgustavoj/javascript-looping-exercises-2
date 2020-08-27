var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];
var new_array = [];
const mergeArrays = (firstArray, secondArray) => {
    //your code here
    for ( let i = 0; i < firstArray.length; i++){
        new_array.push(firstArray[i]);
    }
    for ( let j = 0; j < secondArray.length; j++){
        new_array.push(secondArray[j]); 
    }
    return new_array;
}

// console.log(mergeArrays(chunk_one, chunk_two));